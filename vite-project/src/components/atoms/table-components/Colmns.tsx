import type { ColumnDef } from "@tanstack/react-table"
import type { Todo } from "../../../types/type"


export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: "checkbox",
    header: "",
  },
  {
    accessorKey: "title",
    header: "タイトル",
  },
  {
    accessorKey: "status",
    header: "状態",
  },
  {
    accessorKey: "show",
    header: "詳細",
  },
    {
    accessorKey: "edit",
    header: "編集",
  },
    {
    accessorKey: "destroy",
    header: "削除",
  },
]