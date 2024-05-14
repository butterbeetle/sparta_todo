import TodoListCard from "./TodoListCard";

export default function TodoList({
  title,
  list,
  onToggleHandler,
  onDeleteHandler,
}) {
  return (
    <div className="flex flex-col min-h-[300px] py-2">
      <h1 className="text-3xl p-2 drop-shadow-lg">{title}</h1>
      <div
        className="flex flex-col md:grid 
      md:grid-cols-2 lg:grid-cols-4"
      >
        {list.map((data) => (
          <li key={data.id} className="flex flex-col gap-4 p-2 ">
            <TodoListCard
              {...data}
              onToggleHandler={onToggleHandler}
              onDeleteHandler={onDeleteHandler}
            />
          </li>
        ))}
      </div>
      {!list.length && (
        <div
          className="flex justify-center items-center 
          flex-1 text-lg font-bold"
        >
          저런..{" "}
          {`${
            title === "진행 중"
              ? "할일이나 추가하십시오.."
              : "완료나 누르십시오.."
          }`}
        </div>
      )}
    </div>
  );
}
