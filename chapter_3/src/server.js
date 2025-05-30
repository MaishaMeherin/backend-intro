import express from 'express'

const app = express()
const PORT = process.env.PORT || 5003

console.log('hellow world')
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

