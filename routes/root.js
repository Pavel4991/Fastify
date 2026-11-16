export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return reply.view("./src/views/index", {pageTitle: "Main page"})
  })
}
