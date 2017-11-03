var rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'http://api.posttestserver.com/post',
    body: {
        some: 'payload'
    },
    json: true // Automatically stringifies the body to JSON
};

rp(options)
    .then(function (parsedBody) {
        // POST succeeded...
    })
    .catch(function (err) {
        // POST failed...
    });

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
