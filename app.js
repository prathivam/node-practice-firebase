const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');

const app = express();

app.engine(
    'hbs',
    engine({
        layoutsDir: 'views/layouts/',
        defaultLayout: 'main-layout',
        extname: 'hbs',
    })
);
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errors = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errors.get404);

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});
