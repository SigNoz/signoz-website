import { findLinkByUrl } from "lib/docs/findLinkByUrl";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function getFormattedDate(date: Date | null): string {
  if (!date) {
    return "";
  }

  const year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : `0${month}`;
  month = months[parseInt(month) - 1];

  let day = date.getDate().toString();
  day = day.length > 1 ? day : `0${day}`;

  return `${month} ${day},${year}`;
}


export const getActivePath = (path: string) => {
  return findLinkByUrl(`/${path.split('/').filter(e => Boolean(e)).slice(1).join('/')}`)
}

export default getFormattedDate;
