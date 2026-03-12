
export type Todo = {
id: number;
title: string;
body?: string;
status: "完了" | "未完了" ;
created_at?: Date;
updated_at?: Date;
deadline?: Date;
}