const path = require('path');

const express = require('express');

const adminData = require('./routes/admin');

const shopRouter = require('./routes/shop');

const bodyParser = require('body-parser');

const app = express();

// app.use('/',(req, res, next)=>{
//     console.log('This always runs!');
//     next(); // 계속해서 다음 미들웨어를 실행 시키기위해서는 next()가 필수
// });

app.use(bodyParser.urlencoded({extends: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.routes);

app.use(shopRouter);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(3000);