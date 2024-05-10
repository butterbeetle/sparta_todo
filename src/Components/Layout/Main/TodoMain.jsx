import { useState } from "react";
import TodoList from "../../TodoList";
import Input from "../../Ui/Input";

export default function TodoMain() {
  const [todoData, setTodoData] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const id = `_${Math.random().toString(36).slice(2, 16)}`;

    const newTodo = {
      id,
      todoTitle,
      todoContent,
      isDone: false,
    };

    setTodoData([...todoData, newTodo]);

    setTodoTitle("");
    setTodoContent("");
  };
  return (
    <main className="bg-zinc-600 min-h-screen">
      <div className="flex flex-col max-w-[1200px] mx-auto h-full">
        <div className="flex gap-4 justify-center p-4 items-center text-white">
          <div className="flex flex-col text-2xl">
            <div>2024년 5월 10일</div>
            <div className="text-xl text-end">금요일</div>
          </div>
          <div className="text-6xl ">03:56:43</div>
        </div>
        <form
          onSubmit={onSubmitHandler}
          className="max-w-[800px] w-full mx-auto"
        >
          <div className="divide-y divide-solid divide-gray-300 ">
            <Input
              id="title"
              onChange={(e) => setTodoTitle(e.target.value)}
              value={todoTitle}
              label="제목"
            />
            <Input
              id="Content"
              onChange={(e) => setTodoContent(e.target.value)}
              value={todoContent}
              label="내용"
            />
          </div>
          <button className="w-full bg-zinc-700 p-3 text-2xl text-white">
            추가
          </button>
        </form>
        <div className="bg-gray-100 h-full">
          <TodoList
            title={"진행 중"}
            list={todoData.filter((d) => !d.isDone)}
          />
          <TodoList title={"완료"} list={todoData.filter((d) => d.isDone)} />
        </div>
      </div>
    </main>
  );
}
