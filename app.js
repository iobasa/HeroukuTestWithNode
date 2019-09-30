const express = require('express');
const path = require('path');
const hbs = require('hbs');

// herouku assigns a port when it deploys win the process (environmentvariables - coming)
// locally this will run @ port 3000; remotely it'll run whenever herouku tells it to run
const port = process.env.PORT || 3000; // a double pipe => || means "or"

const app = express();

app.use(express.static('public'));

// tell express to use the handlebars engine to render data
app.set('view engine', 'hbs');

// tell express to use the views folder to find its templates
app.set('views', __dirname + '/views');

// a forward slash is the home route (same as index.html)
app.get('/', (req, res) => {
  console.log('at the home route');

  //res.sendFile(path.join(__dirname + '/views/index.html'));

  res.render('home', { message: "hi there!", anothermessage: "This is easy!" } );
  //this builds localhost:3000/views/index.html
})

app.get('/contact', (req, res) => {
  console.log('at the contact route');

  //res.sendFile(path.join(__dirname + '/views/contact.html'));

  res.render('contact', { message: "what is your name?" } );
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});