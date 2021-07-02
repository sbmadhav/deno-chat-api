import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World Third try!";
});

addEventListener("fetch", app.fetchEventHandler());