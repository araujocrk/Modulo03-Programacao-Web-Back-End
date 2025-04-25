const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(expressLayouts);

const mainRoute = require('./routes/main-route');
app.use('/', mainRoute);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
