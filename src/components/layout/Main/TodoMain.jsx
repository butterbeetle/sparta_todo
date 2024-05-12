import { useState } from "react";
import TodoClock from "../../TodoClock";
import TodoList from "../../TodoList";
import Input from "../../ui/Input";

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

  const onToggleHandler = (id) => {
    const newTodo = todoData.map((data) => {
      if (data.id === id) {
        return { ...data, isDone: !data.isDone };
      }
    });
    setTodoData([...newTodo]);
  };

  const onDeleteHandler = (id) => {
    const newTodo = todoData.filter((data) => data.id !== id);
    setTodoData([...newTodo]);
  };

  return (
    <main className="bg-zinc-600 min-h-screen">
      <div className="flex flex-col max-w-[1200px] mx-auto h-full">
        <TodoClock />
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
            onToggleHandler={onToggleHandler}
            onDeleteHandler={onDeleteHandler}
          />
          <TodoList
            title={"완료"}
            list={todoData.filter((d) => d.isDone)}
            onToggleHandler={onToggleHandler}
            onDeleteHandler={onDeleteHandler}
          />
        </div>
      </div>
    </main>
  );
}
