const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');



const dbUrl = 'mongodb://localhost/products';

// app setup
var app = express();
app.listen(4000, () => console.log('Express server started listening on port 4000'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

MongoClient.connect(dbUrl, function (err, db) {
    console.log('Mongodb connected');
    app.post('/api/v1/login', (req, res, next) => {
        console.log('Got login');
        const users = [
            {
                email : 'ali@test.com',
                password : '123',
                token: '123123'
            },
            {
                email: 'alex@test.com',
                password: '1234',
                token: '12341234'
            }
        ];

        const { email, password } = req.body.credentials;
        const user = users.find( user => user.email == email && user.password == password);
        if(user) {
            res.json({user});
        } else {
            res.json({message: 'Cannot find user'});
        }
    });

    app.get('/api/v1/products', (req, res, next) => {
        console.log('Request: /api/v1/products');
        db.collection('triggers').find( {}).toArray( (err, triggers) => {
            res.json(triggers);
        });
    });

    app.get('/api/v1/products/:id', (req, res) => {
        console.log('request: ', req.params.id)
        console.log('Request: /api/v1/products/:id');
        db.collection('triggers').find( {_id: req.params.id}).toArray( (err, triggers) => {
            res.json(triggers);
        });
    });

    app.delete('/api/v1/products/:id', (req, res) => {
        var item = db.collection('triggers').findOneAndDelete( {"_id": req.params.id} );
        console.log('Deleting: ', {_id: req.params.id});
        res.send('200', JSON.stringify(item));
    });

    // app.use((req, res) => {
    //     console.log('Request last:', req.url)
    //     res.status(200).json({
    //         errors: {
    //             global: 'Some error, Don\'t worry a group of monkeys has been dispatched to fix it as soon as possible.'
    //         }
    //     })
    // })

});



