export default async function (fastify, opts) {
  fastify.get('/hello', (request, reply) => {
    const name = request.query.name
    const responce = name ? `Hello, ${name}!` : 'Hello, World!'
    reply.send(responce)
  })
}