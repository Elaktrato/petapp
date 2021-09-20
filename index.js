const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`
<h1>Adopt a pet!</h1>
<p>Browse through the links below to find your new furry friend:</p>
<ul>
    <li>Dogs</li>
    <li>Cats</li>
    <li>Rabbits</li>
</ul>
`));

app.get('/animals', (req, res) => res.send(`
<h1>List of pets</h1>
<p>Browse through the links below to find your new furry friend:</p>
<ul>
    <li>pet 42</li>
    <li>Pet 24</li>
    <li>Pet 3</li>
</ul>
`));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})