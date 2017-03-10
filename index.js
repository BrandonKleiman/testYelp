var express = require('express');
var bodyParser = require('body-parser')
var request = require('request');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/search', function(req, res) {



})

app.get('/getAll', function(req, res) {

var cb = function(token) {
  console.log(token);
  var options = { method: 'GET',
    url: 'https://api.yelp.com/v3/businesses/search',
    qs: 
    { term: 'coffee',
      location: '90066',
      sort_by: 'rating',
      limit: '50' },
    headers: 
    { 'postman-token': '93676d7e-657a-46fd-71fc-a9b2fcf909a5',
      'cache-control': 'no-cache',
      authorization: 'Bearer '+token.access_token } };
      console.log(options.headers)
  request(options, function (erroddr, response, body) {
    if (error) throw new Error(error);

    res.send(body);
    res.end();
    return;
  });

}

getBearer(cb);

})



var getBearer = function(cb) {
  var options = { method: 'POST',
  url: 'https://api.yelp.com/oauth2/token',
  headers: 
   { 'postman-token': 'c465c84a-3343-1ece-227e-07bd5a1d10b8',
     'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form: 
   { client_id: '',
     client_secret: '',
     grant_type: 'client_credentials' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  cb(body);
});
}


app.listen(8080, function() {
  console.log("listening on port 8080")
})


