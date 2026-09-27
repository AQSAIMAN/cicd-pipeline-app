import { NextResponse } from "next/server";

type Todo = {
  id: number;
  title: string;
  done: boolean;
};

let todos: Todo[] = [
  { id: 1, title: "Learn CI/CD security", done: false },
];

// READ - GET /api/todos
export async function GET() {
  return NextResponse.json(todos);
}

// CREATE - POST /api/todos
export async function POST(request: Request) {
  const body = await request.json();
  const newTodo: Todo = {
    id: todos.length + 1,
    title: body.title,
    done: false,
  };
  todos.push(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
}