import path from "node:path";
import fp from "fastify-plugin";
import fastifyStatic from "@fastify/static";

export default fp(async (app, _options) => {
  await app.register(fastifyStatic, {
    // Построит правильный абсолютный путь от корня вашего проекта
    root: path.join(process.cwd(), "node_modules/bootstrap/dist/css"),
    prefix: "/assets/",
  });
})