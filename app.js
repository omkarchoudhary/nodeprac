


// For modules learn


// const names = require('./4_names');
// const sayHi = require('./5_utils');
// const persons = require('./6-alternative-flavour');
// const sum = require('./7-mind-grenade');

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);
// console.log(names.john);
// console.log(names.peter);

// console.log(persons);


// 11-dec-2024

//Asynchronous non blocking

// const {readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt', 'utf8');

// writeFileSync('./content/result-sync.txt', `here is result ${first} ${second}`, {flag:'a'});

// console.log(first);
// console.log(second);

//Synchronous blocking

// const {readFile, writeFile} = require('fs');

// readFile('./content/first.txt','utf8', (err, result) => {
// if(err){
//     console.log(err);
//     return;
// }
// const first = result;
// console.log(first)
// readFile('./content/second.txt','utf8', (err, result) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     const second = result;
//     console.log(second);
// writeFile('./content/result-sync-new.txt',`here is result ${first} ${second}`, (err, result) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result);
// });
// });
// });


//http module

// const http= require('http');

// const server = http.createServer((req, res) =>  {
//     if(req.url === '/'){
//         res.write('welcome to home page');
//     }

//     if(req.url === '/about'){
//         res.write('welcome to acout page');
//     }
    
//     res.end(`<h1>oops wrong page</h1><a href="/"> Back home</a>`)

// })

// server.listen(5001)

// Usage of package

const _ = require('lodash')

const item = [1,[2,[3,4]]];

const newItem = _.flattenDeep(item);

console.log(newItem);