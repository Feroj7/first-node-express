const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('WOW. I am Excited to Learn Node and Express.Auto restarting with nodemon');
});


const users = [
    {id:0, name:'Shabana', email:'shabana@gmail.com', phone:017000000},
    {id:1, name:'Shabnoor', email:'Shabnoor@gmail.com', phone:017000000},
    {id:2, name:'Shuchorita', email:'Shuchorita@gmail.com', phone:017000000},
    {id:3, name:'Susmita', email:'Susmita@gmail.com', phone:017000000},
    {id:4, name:'Srabonti', email:'Srabonti@gmail.com', phone:017000000}
]

app.get('/users', (req, res) => {

    //use query parameter
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
});

app.post('/users', (req, res) => {
    const newUser =  req.body;
    newUser.id = users.length;
    users.push(newUser);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['bannana', 'mango', 'orange', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli')
})

app.listen(port, () => {
    console.log('Listening to port', port);
})