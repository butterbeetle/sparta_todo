import ListCard from "../../Components/ListCard";

export default function Main() {
  return (
    <main className="bg-zinc-600 ">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-4 justify-center p-4 items-center text-white">
          <div className="flex flex-col text-2xl">
            <div>2024년 5월 10일</div>
            <div className="text-xl text-end">금요일</div>
          </div>
          <div className="text-6xl ">03:56:43</div>
        </div>
        <form className="max-w-[800px] mx-auto">
          <div className="divide-y divide-solid divide-gray-300 ">
            <div className="relative">
              <input
                id={"name"}
                type="text"
                className=" block p-6 pb-1 w-full text-base appearance-none focus:outline-none peer bg-gray-100"
                placeholder=""
                maxLength={28}
              />
              <label
                className="
          absolute
          top-4
          left-6
          z-10
          text-base
          text-zinc-400
          duration-150
          transform
          -translate-y-3
          scale-75
          origin-[0]
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-3
        "
                htmlFor={"name"}
              >
                제목
              </label>
            </div>
            <div className="relative">
              <input
                id={"name"}
                type="text"
                className=" block p-6 pb-1 w-full text-base appearance-none focus:outline-none peer "
                placeholder=""
                maxLength={28}
              />
              <label
                className="
          absolute
          top-4
          left-6
          z-10
          text-base
          text-zinc-300
          duration-150
          transform
          -translate-y-3
          scale-75
          origin-[0]
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-3
        "
                htmlFor={"name"}
              >
                내용
              </label>
            </div>
          </div>
          <button className="w-full bg-zinc-700 p-3 text-2xl text-white">
            추가
          </button>
        </form>
        <div className="bg-gray-100">
          <h1 className="text-3xl p-2 drop-shadow-lg">진행 중</h1>
          <ListCard />
        </div>
      </div>
    </main>
  );
}
