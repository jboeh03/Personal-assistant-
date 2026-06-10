import { redirect } from "next/navigation";

export default function Home() {
  // The middleware gates auth; send everyone to the chat surface.
  redirect("/chat");
}
