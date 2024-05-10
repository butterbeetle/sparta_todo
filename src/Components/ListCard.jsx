import { ArrowDown, Check, Trash2 } from "lucide-react";
export default function ListCard() {
  return (
    <li className="flex flex-col gap-4 p-2">
      <div className=" bg-gray-100 p-4 font-bold shadow-lg rounded-xl border-2 border-solid border-gray-200 divide-y-2 divide-solid">
        <div className="flex justify-between text-lg py-2">
          <p className="line-clamp-1 w-3/4">
            날 사랑해줘요오오오오오 한번마아아아안 미치도록 불러봐도 되나요,
            Hanbeonman nal saranghaejwoyo Ttakhanbeon michidorok bulleobwado
            doenayo Naemamhana deohaejuryeo geudaegyeote ireoke gakkai gallaeyo
          </p>
          <div className="flex flex-col gap-2 items-end justify-start">
            <div className="flex gap-2">
              <i className="border-2 border-solid border-[#2ECC71] rounded-full size-7 flex justify-center items-center">
                <Check color="#27AE60" />
              </i>
              <i className="border-2 border-solid border-[#E74C3C] rounded-full size-7 flex justify-center items-center">
                <Trash2 color=" #C0392B" />
              </i>
              <i className="border-2 border-solid border-[#0056b3] rounded-full  size-7 flex justify-center items-center">
                <ArrowDown color="#007bff" />
              </i>
            </div>
          </div>
        </div>
        <div className="text-sm py-2">
          <div>
            내용내용내용내용내용내용내용내용내용내용내용
            내용내용내용내용내용내용내용내용내용내용내용
            내용내용내용내용내용내용내용내용내용내용내용
            내용내용내용내용내용내용내용내용내용내용내용
            내용내용내용내용내용내용내용내용내용내용내용
          </div>
        </div>
      </div>
    </li>
  );
}
