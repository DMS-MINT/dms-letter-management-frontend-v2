import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Reset() {
  return (
    <section className="flex flex-col gap-7">
      <div>
        <h2 className="text-gray-900 font-medium text-xl mt-5 mb-2">
          የይለፍ ቃሎን ይቀይሩ።
        </h2>
        <p className="text-gray-700 font-light text-sm">
          እባክዎ የይለፍ ቃልዎ ጠንካራ እና ደህንነቱ የተጠበቀ መሆኑን ያረጋግጡ።
        </p>
      </div>
      <form className="flex flex-col gap-5 ">
        <div className="grid items-center gap-1.5">
          <Label htmlFor="የላኪ ፖስታ ቁጥር">አዲስ የይለፍ ቃል ያስገቡ</Label>
          <Input type="text" id="የላኪ ፖስታ ቁጥር" />
          <div className="my-3 ml-5">
            <ul className="text-gray-700 font-light text-sm list-disc">
              <li> የይለፍ ቃልህ ከሌላ የግል መረጃህ ጋር በጣም ተመሳሳይ ሊሆን አይችልም።</li>
              <li> የይለፍ ቃልዎ ቢያንስ 8 ቁምፊዎችን መያዝ አለበት።</li>
              <li> የይለፍ ቃልዎ ቢያንስ አንድ አቢይ ሆሄ መያዝ አለበት።</li>
              <li> የይለፍ ቃልዎ ቢያንስ አንድ የቁጥር እሴት መያዝ አለበት።</li>
              <li> የይለፍ ቃልዎ ቢያንስ አንድ ልዩ ቁምፊ (@, #,$,%) መያዝ አለበት።</li>
            </ul>
          </div>
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="የላኪ ፖስታ ቁጥር">አዲሱን የይለፍ ቃልዎን ያረጋግጡ</Label>
          <Input type="text" id="የላኪ ፖስታ ቁጥር" />
        </div>
        <Link href="/letters/inbox">
          <Button variant="secondary" className="w-full">
            ጨርስ
          </Button>
        </Link>
      </form>
    </section>
  );
}
