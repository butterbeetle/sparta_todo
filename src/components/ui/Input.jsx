export default function Input({ id, onChange, value, label }) {
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        type="text"
        className=" block p-6 pb-1 w-full text-base appearance-none focus:outline-none peer bg-gray-100"
        placeholder=""
        onChange={onChange}
        maxLength={28}
      />
      <label
        className="absolute top-4 left-6
          z-10 text-base text-zinc-400 duration-150
          transform -translate-y-3 scale-75 origin-[0]
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-3
          "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
