const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;
app.use(cors())
app.use(express.json());
app.get('/', (req, res)=>{
  res.send('Hello from users world!')
})

const users=[
  {
    "id": 1,
    "name": "Arif Hossain",
    "description": "Full-stack developer from Dhaka, loves coding in Python.",
    "email": "arif.hossain@example.com",
    "password": "$2a$12$Kze7t9M7H5jX8Z..."
  },
  {
    "id": 2,
    "name": "Nusrat Jahan",
    "description": "Graphic designer with 5 years of experience in UI/UX.",
    "email": "nusrat.j@example.com",
    "password": "$2a$12$pL9vR1qW3zB5m..."
  },
  {
    "id": 3,
    "name": "Rakib Ahmed",
    "description": "Digital marketing expert specializing in SEO and SEM.",
    "email": "rakib.ahmed@example.com",
    "password": "$2a$12$Gk8nL2mP0xR4y..."
  },
  {
    "id": 4,
    "name": "Sumaiya Akter",
    "description": "Content writer and avid reader of historical fiction.",
    "email": "sumaiya.akter@example.com",
    "password": "$2a$12$vN4mX9pQ1zL3w..."
  },
  {
    "id": 5,
    "name": "Tanvir Rahman",
    "description": "Mobile app developer focusing on Flutter and React Native.",
    "email": "tanvir.r@example.com",
    "password": "$2a$12$jF6kH2sT8uO1n..."
  }
]

app.get('/users', (req, res)=>{
  res.send(users)
})

app.post ('/users', (req, res)=>{
  console.log('Data method is working', req.body);
  const newUser = req.body
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send({success: true, data:  newUser, message: 'Post method is working'})
})

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
  
})
