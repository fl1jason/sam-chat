import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const TimeFromNow = (date) => {
  dayjs.extend(relativeTime);
  const timeFromNow = dayjs(date).fromNow();
  return timeFromNow;
};

export const Timestamp = () => {
  const timestamp = dayjs().format("YYYY-MM-DD HH:mm:ss");
  return timestamp;
};
