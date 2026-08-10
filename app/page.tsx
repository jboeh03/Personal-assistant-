import { redirect } from "next/navigation";

export default function Home() {
  // This deployment fronts the Stonington deal room.
  redirect("/deals");
}
