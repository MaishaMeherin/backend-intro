import express from 'express'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'

const app = express()
const PORT = process.env.PORT || 5003

//get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url)

//get the directory name from the file path
const __dirname = dirname(__filename)

//middleware: tell where the server.js is
app.use(express.json())
//serves HTML file from the /public directory
//tells express to serve all the files from the public folder as static asset/files. Any request for css files will be resolved to the public directory
app.use(express.static(path.join(__dirname, '../public')))

//Serving up the HTML File from the /public dir
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//Routes
app.use('/auth', authRoutes) //anything related to authetication use /auth endpoint

app.use('/todos', todoRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

