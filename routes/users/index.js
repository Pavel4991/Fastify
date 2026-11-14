export default async function (fastify, opts) {
  fastify.get('/', (request, reply) => {
      return reply.send(users)
  })

  fastify.get('/:id', (request, reply) => {
    const id = request.params.id 
    const currentUser = users.find(user => user.id === id)
    return reply.send(currentUser)
  })
  
  fastify.get('/:id/posts', (request, reply) => {
    const id = request.params.id
    const currentUser = users.find(user => user.id === id)
    return reply.send(currentUser.posts)

  })

  fastify.get('/:id/posts/:postId', (request, reply) => {
    const id = request.params.id 
    const postId = request.params.postId
    const currentUser = users.find(user => user.id === id)
    const currentPost = currentUser.posts.filter(post => post.postId === postId)
    return reply.send(currentPost)
  })

  fastify.post('/', (request, reply) => {
    reply.send('POST /users')
  })
}