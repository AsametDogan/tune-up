require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI
const SECRET = process.env.SECRET
const EMAIL_NAME = process.env.EMAIL_NAME
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD


module.exports = {
  MONGODB_URI,
  SECRET,
  EMAIL_NAME,
  EMAIL_PASSWORD,
}