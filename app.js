const express = require('express');

const app = express();

app.use('/',(req, res, next)=>{
    console.log('This always runs!');
    next(); // 계속해서 다음 미들웨어를 실행 시키기위해서는 next()가 필수
});

app.use('/add-product',(req, res, next)=>{
    console.log('In the middleware!');
    res.send('<h1>The "Add Product" Page</h1>');
});

app.use('/',(req, res, next)=>{
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);