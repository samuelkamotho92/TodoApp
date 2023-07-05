import express from 'express';
import bodyParser from 'body-parser';
import config from './src/db/config.js';
import routes from './src/routes/routes.js';
import jsonwebtoken from 'jsonwebtoken';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
//setup cors
app.use(cors());

//JWT setup
// app.use((req, res, next) => {
//     console.log('sdad');
//     console.log(req.headers,req.headers.authorization,req.headers.authorization.split(' ')[0] === 'JWT',);
//     if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
//         jsonwebtoken.verify(req.headers.authorization.split(' ')[1], `${process.env.JWT_SECRET}`, (err, decode) => {
//             console.log(decode.email,decode.username);
//           if (err){
//             req.user = undefined;
//         } else{
//             console.log('decode exists')
//             req.user = decode;
//             next();
//         }         
//         });
//     } else {
//         req.user = undefined;
//         next();
//     }
// });

// my-routes
routes(app);

app.get('/', (req, res) => {
    res.send("Hello😁 Welcome todo API!");
});

app.listen(config.port, () => {
    console.log(`Server is running on ${config.url}`);
});