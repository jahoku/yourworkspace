import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { writeFile } from "fs/promises";
import path from "path";
import { mkdir } from "fs/promises";

// Configure nodemailer transporter - 필요한 환경변수가 없으면 콘솔에 로그
let transporter;

try {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587");
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  console.log("SMTP Config:", { 
    host: host || "未設定", 
    port, 
    secure, 
    user: user ? "設定済み" : "未設定", 
    pass: pass ? "設定済み" : "未設定"
  });

  if (!host || !user || !pass) {
    console.error("SMTP 설정이 올바르지 않습니다. 환경변수를 확인해주세요.");
    transporter = null;
  } else {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });
  }
} catch (error) {
  console.error("SMTP 설정 에러:", error);
  transporter = null;
}

// 백업 수신자 메일 - SMTP 설정이 없는 경우 콘솔에 출력
const backupRecipient = "axc@frameout.co.kr";

export async function POST(request: NextRequest) {
  console.log("문의 API 호출 시작");

  try {
    const formData = await request.formData();
    console.log("폼데이터 수신 완료");

    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const file = formData.get("file") as File | null;

    console.log("폼 데이터:", { name, company, email, message: message?.substring(0, 100) + "..." });

    if (!name || !company || !email || !message) {
      console.error("필수 필드 누락");
      return NextResponse.json(
        { error: "필수 항목이 누락되었습니다." },
        { status: 400 }
      );
    }

    // 메일 내용 구성
    const emailContent = `
      이름: ${name}
      회사: ${company}
      이메일: ${email}
      
      문의내용:
      ${message}
    `;

    const htmlContent = `
      <h2>프레임아웃 문의하기</h2>
      <p><strong>이름:</strong> ${name}</p>
      <p><strong>회사:</strong> ${company}</p>
      <p><strong>이메일:</strong> ${email}</p>
      <h3>문의내용:</h3>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    console.log("메일 내용 생성 완료");

    // SMTP 설정이 없는 경우 콘솔에 출력하고 성공 응답
    if (!transporter) {
      console.log("======================================================");
      console.log("===== 테스트 모드: SMTP 설정이 없어 메일이 전송되지 않습니다 =====");
      console.log("==== 이 메시지가 보이면 .env.local 파일에 SMTP 설정이 필요합니다 ====");
      console.log("======================================================");
      console.log(`수신자: ${backupRecipient}`);
      console.log(`제목: [문의하기] ${name} - ${company}`);
      console.log("내용:");
      console.log(emailContent);
      console.log("======================================================");

      return NextResponse.json(
        { 
          message: "테스트 모드: 문의가 성공적으로 기록되었습니다. (실제 메일 전송은 되지 않음)", 
          debug: "SMTP 설정이 누락되어 콘솔에만 출력됩니다. .env.local 파일에 환경변수를 설정해주세요."
        },
        { status: 200 }
      );
    }

    // 메일 발송 옵션
    let mailOptions = {
      from: process.env.SMTP_FROM || "website@frameout.co.kr",
      to: backupRecipient,
      subject: `[문의하기] ${name} - ${company}`,
      text: emailContent,
      html: htmlContent,
      attachments: [] as Array<{ filename: string; path: string }>,
    };

    // 파일 첨부 처리
    if (file) {
      try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // 업로드 디렉토리 생성
        const uploadsDir = path.join(process.cwd(), "uploads");
        try {
          await mkdir(uploadsDir, { recursive: true });
        } catch (error) {
          console.error("업로드 디렉토리 생성 오류:", error);
        }

        // 고유 파일명 생성
        const fileName = `${Date.now()}-${file.name}`;
        const filePath = path.join(uploadsDir, fileName);

        // 파일 저장
        await writeFile(filePath, buffer);
        console.log("파일 저장 완료:", filePath);

        // 메일에 첨부
        mailOptions.attachments.push({
          filename: file.name,
          path: filePath,
        });
      } catch (error) {
        console.error("파일 처리 오류:", error);
      }
    }

    // 메일 발송
    console.log("메일 발송 시도:", mailOptions.to);
    const info = await transporter.sendMail(mailOptions);
    console.log("메일 발송 완료:", info.messageId);

    return NextResponse.json(
      { message: "문의가 성공적으로 전송되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("문의 처리 오류:", error);
    return NextResponse.json(
      { error: "문의 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
} 