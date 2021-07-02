import { Application, Router } from "https://deno.land/x/oak/mod.ts";

app.use((ctx) => {
  ctx.response.body = "Hello World Third try!";
});


const messages = [];

const router = new Router();
router
  .get("/", ({response}) => {
    response.body = "Chat Server";
  })
  .get("/messages", ({response}) => {
    response.body = messsages;
  })
  .post("/message", async({request}) => {
    const message = await request.body().value;
    messages.push(message);
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
addEventListener("fetch", app.fetchEventHandler());