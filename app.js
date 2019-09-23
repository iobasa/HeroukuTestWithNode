const express = require('express');
const path = require('path');

// herouku assigns a port when it deploys win the process (environmentvariables - coming)
// locally this will run @ port 3000; remotely it'll run whenever herouku tells it to run
const port = process.env.PORT || 3000; // a double pipe => || means "or"

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log('at the contact route')
  res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/contact.html'));
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});