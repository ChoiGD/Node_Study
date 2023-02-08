const fs = require('fs');

const delectFile = (filePath) =>{
    fs.unlink(filePath, (err)=>{
        if(err) {
            throw err;
        }
    })
}

exports.delectFile = delectFile;