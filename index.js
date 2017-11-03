var rp = require('request-promise');
var fs = require('fs');

// options to get file
var download_file = {
    method: 'GET',
    uri: 'http://api.posttestserver.com/post',
    body: {
        some: 'payload'
    },
    json: true // Automatically stringifies the body to JSON
};


rp(download_file)
    .then(function (parsedBody) {
        var file = fs.createWriteStream("file.jpg");
    })
    .catch(function (err) {
        // POST failed...
    });

// start a download of a file
app.get('/file/:fileId', function(req, res) {
  res.send("Requesting " + req.params.fileId);
});
