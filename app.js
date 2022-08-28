const express = require('express');

const bodyParser = require('body-parser');

const app = express();

// app.use('/',(req, res, next)=>{
//     console.log('This always runs!');
//     next(); // 계속해서 다음 미들웨어를 실행 시키기위해서는 next()가 필수
// });

app.use(bodyParser.urlencoded({extends: false}));

app.use('/add-product',(req, res, next)=>{
    console.log('In the middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>');
});

app.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next)=>{
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);