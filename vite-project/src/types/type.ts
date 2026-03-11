
export type Todo = {
id: number;
title: string;
body?: string;
status: "completed" | "proceeded" | "new";
created_at?: Date;
updated_at?: Date;
deadline?: Date;
}