"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { X } from "lucide-react";

export default function PrivacyPolicyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-blue-400 underline hover:text-blue-500 focus:outline-none">
          개인정보 수집 및 이용 약관
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white text-black" hideCloseButton>
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold">
            개인정보 수집 및 이용약관
          </DialogTitle>
          <DialogClose className="text-gray-400 hover:text-black">
            <X size={18} />
            <span className="sr-only">닫기</span>
          </DialogClose>
        </DialogHeader>
        
        <div className="mt-4 space-y-4 text-sm overflow-y-auto max-h-[70vh]">
          <div>
            <h3 className="font-bold text-lg mb-2">개인정보보호정책</h3>
            <p className="leading-relaxed">
              Frameout은 이용자의 개인정보를 소중히 여기며, 개인정보 보호법 등 관련 법령을 준수합니다. 
              수집된 개인정보는 서비스 제공 및 상담, 제안서 접수 등 정해진 목적 외에는 사용되지않습니다. 
              또한, 이용자의 동의 없이는 개인정보를 외부에 제공하지 않습니다.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">개인정보 수집 및 이용 동의</h3>
            <p className="leading-relaxed">
              Frameout은 솔루션 및 제안 요청/상담을 위해 이름, 연락처, 이메일 주소 등의 정보를 수집합니다. 
              수집된 정보는 제안서 작성, 상담 응대 등 업무 처리 목적에 한해 이용됩니다. 
              해당 정보는 제3자에게 제공하거나 업무 처리 목적 이외에는 사용하지 않습니다. 
              이용자는 개인정보 제공에 동의하지 않을 수 있으며, 미동의 시 일부 서비스 이용이 제한될 수 있습니다.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-2">개인정보 보유 및 이용기간</h3>
            <p className="leading-relaxed">
              수집된 개인정보는 수집 목적 달성 후 즉시 파기되며, 보관이 필요한 경우 관련 법령에 따라 일정 기간 보관됩니다. 
              기본 보유 기간은 1년이며, 이후에는 지체 없이 안전하게 삭제됩니다. 
              이용자는 언제든지 개인정보 삭제 요청이 가능합니다.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 