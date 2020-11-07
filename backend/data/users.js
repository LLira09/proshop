import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Jake',
    email: 'jake@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Brielle',
    email: 'brille@example.com',
    password: bcrypt.hashSync('123456', 10)
  }
]

export default users
