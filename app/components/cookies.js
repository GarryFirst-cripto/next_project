import { cookies } from "next/headers";

export default function getCookies() {
  const cookiesList = cookies();
  const cookieKeys = cookiesList.getAll().map(cookie => cookie.name);
  return cookieKeys;
}