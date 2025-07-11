import jwt from 'jsonwebtoken'

function authMiddleware (req, res, next) {
    const token = req.headers['authorization']

    if (!token) {
        return res.status(401).json( {message: 'No token provided'} )
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {return res.status(401).json({message: 'Invalid token'})} //if token is invalid, send back invalid token

        req.userId = decoded.id
        next() //you passed the security checkpoint now you can reach that endpoint
    })
}

export default authMiddleware