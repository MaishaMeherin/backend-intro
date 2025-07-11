//authetication functionalities
import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'
import prisma from './prismaClient.js'

const router = express.Router()

//Register a new user endpoiunt /auth/register
router.post('/register', async (req, res) => {
    const {username, password} = req.body

    //encrypt password
    const hashedPassword = bcrypt.hashSync(password, 8)

    //save the new user and save the password to the db
    try {
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        }); //since database is third party now, we need to make sure our endpoints are asynchronous

        //now that we have a user, i want to add their first todo for them
        const defaultTodo = 'Hello :) Add your first todo!'

        await prisma.todo.create({
            data: {
                task: defaultTodo,
                userId: user.id
            }
        });

        //create a token, since this is a secret key it will be thrown into the environment variables
        const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({token})
    } catch (err) {
        console.log(err.message)
        res.status(503)
    }
})

router.post('/login', async (req, res) => {
    //when user signs up with a password, a encrypted version is saved in the database
    //so to match the encrypted password saved in the database with the password user inputs, we assign a key to the encrypted password and the input password is then encrypted according to the key using the same algorithm.
    //finally both encrypted password is matched

    const {username, password} = req.body

    try{
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })

        if (!user) {
            return res.status(404).send({ message: 'User not found' })
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password) //hash our password and then compare it to hashed password

        if (!passwordIsValid) {
            return res.status(401).send({ message: 'Invalid password' })
        }

        //finally a successful authentication
        //give them token for all their crud operations
        const token = jwt.sign( {id: user.id}, process.env.JWT_SECRET,  {expiresIn: '24h'})
        res.json({ token }) //send back the token
    }catch (err) {
        console.log(err.message)
        res.status(503)
    }
})
export default router