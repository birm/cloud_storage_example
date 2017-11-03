var rp = require('request-promise');
var fs = require('fs');

// code to get file
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

// render the picker
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

// start a download of a file
app.get('/file/:fileId', function(req, res) {
  res.send("Requesting " + req.params.fileId);
});
