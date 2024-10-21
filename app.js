const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public')); // Serve CSS files

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/joke', async (req, res) => {
    const name = req.body.name;
    try {
        const jokeResponse = await axios.get(`https://v2.jokeapi.dev/joke/Any?name=${name}`);
        const joke = jokeResponse.data.joke || `${jokeResponse.data.setup} - ${jokeResponse.data.delivery}`;
        res.render('joke', { joke });
    } catch (error) {
        res.send('Error fetching joke');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
