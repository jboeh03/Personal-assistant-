import { getTodos } from "@/lib/deals/store";
import { Card, SectionTitle } from "../ui";
import { TodoBoard } from "./TodoBoard";

export const dynamic = "force-dynamic";

export default async function TodosPage() {
  const todos = await getTodos();
  const open = todos.filter((t) => t.status !== "done").length;
  return (
    <div className="space-y-5">
      <Card className="p-5">
        <SectionTitle hint={`${open} open`}>To-do &amp; assignments</SectionTitle>
        <p className="text-sm text-[#5b6770] dark:text-[#98a4ae]">
          Track what&rsquo;s outstanding, assign it to Jeff, Olivia, or Zach, and
          send a pre-filled email in a click.
        </p>
      </Card>
      <TodoBoard initial={todos} />
    </div>
  );
}
