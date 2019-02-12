const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('The best way to manage your node app using docker\n');
});

app.listen(3000, () => {
    console.log(`Running on http://localhost:3000`);
});
