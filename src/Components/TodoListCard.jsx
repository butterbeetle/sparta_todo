import { Check, Trash2 } from "lucide-react";
import { useState } from "react";

export default function TodoListCard({ todoTitle, todoContent }) {
  const [isDown, setIsDown] = useState(false);

  return (
    <li className="flex flex-col gap-4 p-2">
      <div className=" bg-gray-100 p-4 font-bold shadow-lg rounded-xl border-2 border-solid border-gray-200 divide-y-2 divide-solid">
        <div className="flex justify-between text-lg py-2">
          <p
            onClick={() => setIsDown((prev) => !prev)}
            className={`w-3/4 cursor-pointer ${
              isDown ? "line-clamp-none" : "line-clamp-1"
            }`}
          >
            {todoTitle}
          </p>
          <div className="flex flex-col gap-2 items-end justify-start">
            <div className="flex gap-2">
              <i className="border-2 border-solid border-[#2ECC71] rounded-full size-6 flex justify-center items-center">
                <Check color="#27AE60" size={16} />
              </i>
              <i className="border-2 border-solid border-[#E74C3C] rounded-full size-6 flex justify-center items-center">
                <Trash2 color=" #C0392B" size={16} />
              </i>
            </div>
          </div>
        </div>
        <div className={`text-sm py-2 ${isDown ? "block" : "hidden"}`}>
          <p className=" break-words">{todoContent}</p>
        </div>
      </div>
    </li>
  );
}
