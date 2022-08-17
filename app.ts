import { Router, Application } from "./deps.ts";
import todos from "./routes/todo.ts";

const app = new Application();
const router = new Router();

app.use(async( ctx, next) => {
    await next();
    console.log(`${ctx.request.method}: ${ctx.request.url.pathname}`);
});

router.get("/", (ctx) => {
    ctx.response.body = "Hello World!";
});

app.use(router.routes()).use(todos.routes());

await app.listen({ port: 8088 });
