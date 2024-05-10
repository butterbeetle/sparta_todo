import TodoListCard from "./TodoListCard";

export default function TodoList({ title, list }) {
  return (
    <div className="flex flex-col min-h-[300px]">
      <h1 className="text-3xl p-2 drop-shadow-lg">{title}</h1>
      {list.length ? (
        list.map((data) => (
          <TodoListCard
            key={`_${Math.random().toString(36).slice(2, 16)}`}
            {...data}
          />
        ))
      ) : (
        <div className="flex justify-center items-center flex-1 text-lg font-bold">
          저런.. 할일 부터 추가하십시오..
        </div>
      )}
    </div>
  );
}
