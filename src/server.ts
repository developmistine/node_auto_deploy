import express from 'express'

const app = express()
const PORT = 8080

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World, This is github action demo project.'
  })
})

app.listen(PORT, () => {
  console.info(`Server is ready on http://localhost:${PORT}`)
})