const path = require('path');

const express = require('express');

const adminRoutes = require('./routes/admin');

const shopRouter = require('./routes/shop');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

// app.use('/',(req, res, next)=>{
//     console.log('This always runs!');
//     next(); // 계속해서 다음 미들웨어를 실행 시키기위해서는 next()가 필수
// });

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extends: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);

app.use(shopRouter);

app.use(errorController.get404);

app.listen(3000);