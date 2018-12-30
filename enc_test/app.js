const { generateKeyPairSync } = require('crypto');
const { createHash } = require('crypto');
//const crypto = require('crypto');

const bcrypt = require('bcrypt');
const pwd = "myPassword";





var hash = bcrypt.hashSync(pwd, 13);
console.log(hash);

var custom = "myPassword"
if(bcrypt.compareSync(custom, hash)){
    console.log("Success!");
} else {
    console.log("Failure!");
}






// var hashedPwd = 0;

// var hashed = bcrypt.hash("myPassword", 10, function(err, hash){
//     console.log(hash);
    
//     console.log(hash);
//     //console.log(hashedPwd);
//     return hash;
// })


// //console.log(hashedPwd);

// const custom = "myPassword"

// bcrypt.compare(custom, hashed, function(err, res) {
//     if (res == true)
//     {
//         console.log("True");
//     }
//     else
//     {
//         console.log("false");
//     }
//     // res == true
// });

//console.log(bcrypt.compareSync("bacon", hash));



// const {publicKey, privateKey } = generateKeyPairSync('rsa', {
//     modulusLength: 4096,
//     publicKeyEncoding: {
//         type: 'pkcs1',
//         format: 'pem'
//     },
//     privateKeyEncoding: {
//         type: 'pkcs1',
//         format: 'pem',
//         cipher: 'aes-256-cbc',
//         passphrase: 'top secrets'
//     }
// });

//var fs = createHash('bcrypt').update("data").digest('base64');

//console.log(fs);
//console.log("asd");

// console.log(publicKey.toString());
// console.log("a====================a");
// console.log("a====================a");
// console.log("a====================a");
// console.log("a====================a");
// console.log("a====================a");
// console.log("a====================a");
// console.log("a====================a");
// console.log("a====================a");

// console.log(privateKey);
