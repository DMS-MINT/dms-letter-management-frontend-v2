"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  addAttachment,
  removeAttachment,
  selectAttachments,
} from "@/lib/features/letter/letterSlice";
import { v4 as uuidv4 } from "uuid";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function FileUploadButton() {
  const attachments = useAppSelector(selectAttachments);
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      const allowedTypes = [
        "text/plain",
        "application/pdf",
        "application/doc",
        "application/docx",
        "image/jpeg",
        "image/png",
      ];

      if (allowedTypes.includes(selectedFile.type)) {
        dispatch(addAttachment(selectedFile));
      } else {
        toast.error(`Unsupported file type: ${selectedFile.type}`);
      }
    }
  };

  const openFileInBrowser = (attachment: File) => {
    if (attachment.type === "text/plain") {
      const fileURL = URL.createObjectURL(attachment);
      window.open(fileURL, "_blank");
    } else if (attachment.type === "application/pdf") {
      const fileURL = URL.createObjectURL(attachment);
      window.open(fileURL, "_blank");
    } else if (attachment.type.startsWith("image/")) {
      const fileURL = URL.createObjectURL(attachment);
      window.open(fileURL, "_blank");
    } else {
      console.error(`Unsupported file type: ${attachment.type}`);
    }
  };

  return (
    <div
      className="
    flex gap-3 items-end"
    >
      <Button
        type="button"
        variant="outline"
        className="flex gap-2 w-fit mt-4"
        onClick={handleButtonClick}
      >
        <Plus size={19} />
        ፋይል አያይዝ
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className="flex gap-5 flex-wrap">
        {attachments.map((attachment, index) => (
          <Badge
            className="rounded-sm text-gray-900 bg-gray-200 h-10 text-base font-normal cursor-pointer"
            onClick={() => openFileInBrowser(attachment)}
          >
            {attachment.name}
            <Button
              key={uuidv4()}
              size="icon"
              variant="ghost"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(removeAttachment(index));
              }}
              className="ml-2 p-0 hover:bg-transparent"
            >
              <X size={20} />
            </Button>
          </Badge>
        ))}
      </div>
    </div>
  );
}
