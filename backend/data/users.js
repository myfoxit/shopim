import bcrypt from 'bcryptjs'

const users=[
    {
        name: 'Admin User',
        email: 'info@myfoxit.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Alex Doe',
        email: 'info@defaultt.com',
        password: bcrypt.hashSync('123456', 10),
       
    },
    {
        name: 'John Doe',
        email: 'john@myfoxit.com',
        password: bcrypt.hashSync('123456', 10),
       
    },
]


export default users;