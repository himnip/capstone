const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static('public'));

let books = [
    {id: 1, name: 'The Giver', desc: 'This book should be required reading for everyone with the emotional maturity to handle it!', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/The_Giver_first_edition_1993.jpg/220px-The_Giver_first_edition_1993.jpg'}, 
    {id: 2, name: 'To Kill a Mocking Bird', desc: 'When I first finished it, I was so overwhelmed by how much I related to it, I read it nearly 8 times before the year ended.', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg'},  
    {id: 3, name: 'Deathnote', desc: 'What a journey into the mind of a person given god like power.', img: 'https://images-na.ssl-images-amazon.com/images/I/11VifEVxMlL._SX333_BO1,204,203,200_.jpg'}, 
    {id: 4, name: 'Throne of Glass', desc: 'This book has plenty of mystery, magic, humor and romance -- a perfect brew for fans of good YA fantasy.', img: 'https://images-na.ssl-images-amazon.com/images/I/81DW1r3CIwL.jpg'},  
]

app.get("/api/books", (req,res) => {
    res.json(books)
});

app.post("/api/books", (req, res) => {
    console.log(req.body)
    books.push(req.body)
    res.status(200).end();
});



app.listen(65436, () => console.log("Server running on 65436"));