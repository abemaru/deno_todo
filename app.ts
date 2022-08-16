import { Application } from "./deps.ts";
import todos from "./routes/todo.ts";

const app = new Application();

app.use(todos.routes());

await app.listen({ port: 8080 });
