import express from 'express'
const app = express()

import pkg from 'body-parser';
const { json } = pkg; 

import {
    getAllStoredTopics,
    storeTopic,
    deleteTopic,
} from './data-storage.js'

export {
    home,
    getAdminConsoleTopics,
    putAdminConsoleTopic,
    deleteAdminConsoleTopic,
}

app.use(json())

async function home(req, res) {
    console.log("home function called");
    res.contentType('application/json');
    res.status(200);
    res.send('Home Page');
}

async function getAdminConsoleTopics(req, res) {
    let allStoredTopics = await getAllStoredTopics();
    res.contentType('application/json');
    res.status(200);
    res.json(allStoredTopics);
}

async function putAdminConsoleTopic(req, res) {
    const topicName = req.params['topic'];
    storeTopic(topicName);
    res.status(200);
    res.json([topicName]);
}

async function deleteAdminConsoleTopic(req, res) {
    const topicName = req.params['topic'];
    deleteTopic(topicName);
    res.status(200);
    res.json([topicName])
}

// import { testExport, getLessons } from './data-storage.js'

// app.get('/', (req, res) => {
//     res.contentType('application/json')
//     res.send('Home page')
//     testExport()
//     res.status(200)
// });

// app.post('/', (req, res) => {
//     res.json(req.body)
// });



// app.get('/login', (req, res) => {
//      var options = {
//          root: ".",
//          dotfiles: 'deny'
//      }
//     var fileName = "./html-docs/login.html"
//     res.sendFile(fileName, options)
// });


// // retrieves a lesson
// app.get('/lessons', (req, res) => {
//     const lessons = getLessons();
//     res.json({ lessons: lessons });
//     const recursiveTest = {
//         test1 : "level1A",
//         test2 : "level1B",
//         r1 : {
//             test1 : "level2A",
//             test2: "level2B",
//             r1 : {
//                 test1: "level3A",
//                 test2: "level3B"
//             }
//         }
//     }
//     recursiveTraversal(recursiveTest) 
// })

// function recursiveTraversal(arg) {
//     for (const property in arg) {
//         if (typeof (arg[property]) == 'string') {
//             console.log("is string type: " + arg[property])
//         } else {
//             recursiveTraversal(arg[property])
//         }
//     }
// }



// // adds a lesson
// app.post('/lessons', (req, res) => {
//     res.json(req.body);
// });

// // updates a lesson
// app.put('/lessons/:id', (req, res) => {
// //    const { id } = req.params;
//     res.json(req.body);
// });

// app.delete('/lessons/:id', (req, res) => {
//     const { id } = req.params;
//     res.json({ deleted: id });
// });

// app.get('/lessons/:topic1/:topic2/:topic3', (req, res) => {
//     res.send(req.params)
// });

// app.listen(port, () => {
//     console.log(`Application listening on port ${port}`)
// }) 