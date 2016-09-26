var express = require('express');

// Create our app
var app = express();

const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    console.log('req='+req);
    console.log('get='+req.get('x-forwarded-proto'));
    console.log('headers='+req.headers['x-forwarded-proto']);
    if (typeof req.get('x-forwarded-proto') === 'undefined') {
        console.log('it is undefined');
        next();
    } else if (req.get('x-forwarded-proto') === 'http') {
        console.log('http so doing next');
        next();
    } else {
        console.log('https so doing redirect - '+req.get('x-forwarded-proto'));
        console.log('http://' + req.hostname + req.url);
        res.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
});