const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  weekday: "long",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
};
export default function formatTime(date) {
  const clock = new Intl.DateTimeFormat("default", options).format(date);
  const [year, month, day, temp] = clock.split(".");
  const [weekday, time] = temp.trim().split(" ");

  return { year, month, day, weekday, time };
}
