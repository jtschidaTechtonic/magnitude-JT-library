const fastify = require('fastify')()
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../app/dist')
})

fastify.get('/', (req, res) => {
  return res.sendFile('index.html')
})

fastify.listen(3000, function (err, address) {
  if (err) process.exit(1)
})