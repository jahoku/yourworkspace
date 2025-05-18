"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Upload, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import PrivacyPolicyDialog from "./privacy-policy-dialog";

const formSchema = z.object({
  name: z.string().min(1, { message: "이름을 입력해주세요." }),
  company: z.string().min(1, { message: "회사명을 입력해주세요." }),
  email: z.string().email({ message: "유효한 이메일을 입력해주세요." }),
  message: z.string().min(1, { message: "문의내용을 입력해주세요." }),
  privacyAgreement: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해주세요.",
  }),
});

interface ContactDialogProps {
  triggerText?: string;
  buttonClassName?: string;
  icon?: React.ReactNode;
}

export default function ContactDialog({ 
  triggerText = "문의하기", 
  buttonClassName = "bg-red-500 hover:bg-red-600 text-white",
  icon
}: ContactDialogProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
      privacyAgreement: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log("폼 제출 시작:", values);

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("company", values.company);
      formData.append("email", values.email);
      formData.append("message", values.message);
      
      if (file) {
        formData.append("file", file);
      }

      console.log("API 요청 시작");
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();
      console.log("API 응답:", response.status, responseData);

      if (!response.ok) {
        throw new Error(responseData.error || "문의 전송에 실패했습니다.");
      }

      // 성공 메시지 표시 (토스트가 보이지 않는 경우를 대비해 alert도 사용)
      toast({
        title: "문의가 성공적으로 전송되었습니다.",
        description: "빠른 시일 내에 답변 드리겠습니다.",
        variant: "default",
      });
      alert("문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.");

      form.reset();
      setFile(null);
      setIsOpen(false);
    } catch (error) {
      console.error("문의 전송 실패:", error);
      toast({
        title: "문의 전송 실패",
        description: "문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
      alert("문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={buttonClassName}>
          {icon}
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-black text-white border-gray-800" hideCloseButton>
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-bold text-white">
            앞으로의 가능성을 함께 열어갑니다!
          </DialogTitle>
          <DialogClose className="text-gray-400 hover:text-white">
            <X size={18} />
            <span className="sr-only">닫기</span>
          </DialogClose>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Name *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="" 
                      {...field} 
                      className="border-0 border-b border-gray-600 bg-transparent py-2 text-white focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Company *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="" 
                      {...field} 
                      className="border-0 border-b border-gray-600 bg-transparent py-2 text-white focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="" 
                      {...field} 
                      className="border-0 border-b border-gray-600 bg-transparent py-2 text-white focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">문의사항 *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="" 
                      {...field} 
                      className="min-h-24 border-0 border-b border-gray-600 bg-transparent py-2 text-white focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="space-y-2">
              <p className="text-sm text-gray-400">참고자료가 있다면 첨부해주세요</p>
              <div className="flex items-center gap-2">
                <label 
                  htmlFor="file-upload-dialog" 
                  className="flex cursor-pointer items-center gap-2 rounded border border-gray-600 px-3 py-2 text-sm text-white hover:bg-gray-900"
                >
                  <Upload size={16} />
                  파일선택
                </label>
                <input
                  id="file-upload-dialog"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {file && <span className="text-sm text-gray-400">{file.name}</span>}
              </div>
            </div>
            
            <FormField
              control={form.control}
              name="privacyAgreement"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-white data-[state=checked]:bg-red-500 data-[state=checked]:text-white"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-gray-400">
                      <PrivacyPolicyDialog />에 동의합니다 *
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full rounded-none bg-red-500 py-5 text-white hover:bg-red-600"
            >
              {isSubmitting ? "전송 중..." : "Send your message"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
} 