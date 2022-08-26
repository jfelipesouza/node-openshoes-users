import { app } from './config/server'

const port = process.env.PORT || 3001

const server = app.listen(port, () => {
  console.log(`the server is online in port ${port}`)
})

process.on('SIGINT', () => {
  server.close()
  console.log('The server has been closed')
}) // Verifica se o servidor foi fechado e fecha a porta
