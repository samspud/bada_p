const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const multer = require('multer');
const upload = multer({dest: './upload'});

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect();

app.get('/api/bada', (req, res) => {
    connection.query(
        'SELECT * FROM userInfo',
        (err, rows, fields) => {
        res.send(rows);
        }
    )
});

app.use('/image', express.static('./upload'));

app.post('/api/bada', upload.single('image'), (req, res) => {
    console.log('post');
    let sql = 'INSERT INTO userInfo VALUES (null, ?, ?, ?, ?)';
    let name = req.body.name;
    let phone = req.body.phone;
    let url = req.body.url;
    let image = '/image/' + req.file.filename;
    let params = [name, phone, url, image];

    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`));