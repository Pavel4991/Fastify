export default async function (fastify, opts) {
  fastify.get('/', (request, reply) => {
    reply.send('GET /users')
  })

  fastify.post('/', (request, reply) => {
    reply.send('POST /users')
  })
}