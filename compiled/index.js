'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.send('index');
});

app.get('/search', function (req, res) {});

app.get('/getAll', function (req, res) {

  var cb = function cb(token) {
    var bearer = JSON.parse(token).access_token;
    var options = { method: 'GET',
      url: 'https://api.yelp.com/v3/businesses/search',
      qs: { term: 'coffee',
        location: '90066',
        sort_by: 'rating',
        limit: '50' },
      headers: { 'postman-token': '93676d7e-657a-46fd-71fc-a9b2fcf909a5',
        'cache-control': 'no-cache',
        authorization: 'Bearer ' + bearer } };
    console.log(options.headers);
    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      res.send(body);
      res.end();
      return;
    });
  };

  getBearer(cb);
});

var getBearer = function getBearer(cb) {
  var options = { method: 'POST',
    url: 'https://api.yelp.com/oauth2/token',
    headers: { 'postman-token': 'c465c84a-3343-1ece-227e-07bd5a1d10b8',
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded' },
    form: { client_id: '',
      client_secret: '',
      grant_type: 'client_credentials' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    cb(body);
  });
};

app.listen(8080, function () {
  console.log("listening on port 8080");
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwiYm9keVBhcnNlciIsInJlcXVlc3QiLCJhcHAiLCJ1c2UiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJqc29uIiwic3RhdGljIiwiX19kaXJuYW1lIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsImNiIiwidG9rZW4iLCJiZWFyZXIiLCJKU09OIiwicGFyc2UiLCJhY2Nlc3NfdG9rZW4iLCJvcHRpb25zIiwibWV0aG9kIiwidXJsIiwicXMiLCJ0ZXJtIiwibG9jYXRpb24iLCJzb3J0X2J5IiwibGltaXQiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlc3BvbnNlIiwiYm9keSIsIkVycm9yIiwiZW5kIiwiZ2V0QmVhcmVyIiwiZm9ybSIsImNsaWVudF9pZCIsImNsaWVudF9zZWNyZXQiLCJncmFudF90eXBlIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVVDLFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUMsYUFBYUQsUUFBUSxhQUFSLENBQWpCO0FBQ0EsSUFBSUUsVUFBVUYsUUFBUSxTQUFSLENBQWQ7O0FBRUEsSUFBSUcsTUFBTUosU0FBVjtBQUNBSSxJQUFJQyxHQUFKLENBQVFILFdBQVdJLFVBQVgsQ0FBc0IsRUFBRUMsVUFBVSxJQUFaLEVBQXRCLENBQVI7QUFDQUgsSUFBSUMsR0FBSixDQUFRSCxXQUFXTSxJQUFYLEVBQVI7QUFDQUosSUFBSUMsR0FBSixDQUFRTCxRQUFRUyxNQUFSLENBQWVDLFNBQWYsQ0FBUjs7QUFFQU4sSUFBSU8sR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFTQyxHQUFULEVBQWNDLEdBQWQsRUFBbUI7QUFDOUJBLE1BQUlDLElBQUosQ0FBUyxPQUFUO0FBQ0QsQ0FGRDs7QUFJQVYsSUFBSU8sR0FBSixDQUFRLFNBQVIsRUFBbUIsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CLENBSXJDLENBSkQ7O0FBTUFULElBQUlPLEdBQUosQ0FBUSxTQUFSLEVBQW1CLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjs7QUFFdEMsTUFBSUUsS0FBSyxTQUFMQSxFQUFLLENBQVNDLEtBQVQsRUFBZ0I7QUFDdkIsUUFBSUMsU0FBU0MsS0FBS0MsS0FBTCxDQUFXSCxLQUFYLEVBQWtCSSxZQUEvQjtBQUNDLFFBQUlDLFVBQVUsRUFBRUMsUUFBUSxLQUFWO0FBQ2JDLFdBQUssMkNBRFE7QUFFYkMsVUFDQSxFQUFFQyxNQUFNLFFBQVI7QUFDRUMsa0JBQVUsT0FEWjtBQUVFQyxpQkFBUyxRQUZYO0FBR0VDLGVBQU8sSUFIVCxFQUhhO0FBT2JDLGVBQ0EsRUFBRSxpQkFBaUIsc0NBQW5CO0FBQ0UseUJBQWlCLFVBRG5CO0FBRUVDLHVCQUFlLFlBQVViLE1BRjNCLEVBUmEsRUFBZDtBQVdHYyxZQUFRQyxHQUFSLENBQVlYLFFBQVFRLE9BQXBCO0FBQ0oxQixZQUFRa0IsT0FBUixFQUFpQixVQUFVWSxLQUFWLEVBQWlCQyxRQUFqQixFQUEyQkMsSUFBM0IsRUFBaUM7QUFDaEQsVUFBSUYsS0FBSixFQUFXLE1BQU0sSUFBSUcsS0FBSixDQUFVSCxLQUFWLENBQU47O0FBRVhwQixVQUFJQyxJQUFKLENBQVNxQixJQUFUO0FBQ0F0QixVQUFJd0IsR0FBSjtBQUNBO0FBQ0QsS0FORDtBQVFELEdBdEJEOztBQXdCQUMsWUFBVXZCLEVBQVY7QUFFQyxDQTVCRDs7QUFnQ0EsSUFBSXVCLFlBQVksU0FBWkEsU0FBWSxDQUFTdkIsRUFBVCxFQUFhO0FBQzNCLE1BQUlNLFVBQVUsRUFBRUMsUUFBUSxNQUFWO0FBQ2RDLFNBQUssbUNBRFM7QUFFZE0sYUFDQyxFQUFFLGlCQUFpQixzQ0FBbkI7QUFDRSx1QkFBaUIsVUFEbkI7QUFFRSxzQkFBZ0IsbUNBRmxCLEVBSGE7QUFNZFUsVUFDQyxFQUFFQyxXQUFXLEVBQWI7QUFDRUMscUJBQWUsRUFEakI7QUFFRUMsa0JBQVksb0JBRmQsRUFQYSxFQUFkOztBQVdGdkMsVUFBUWtCLE9BQVIsRUFBaUIsVUFBVVksS0FBVixFQUFpQkMsUUFBakIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQ2hELFFBQUlGLEtBQUosRUFBVyxNQUFNLElBQUlHLEtBQUosQ0FBVUgsS0FBVixDQUFOOztBQUVYbEIsT0FBR29CLElBQUg7QUFDRCxHQUpEO0FBS0MsQ0FqQkQ7O0FBb0JBL0IsSUFBSXVDLE1BQUosQ0FBVyxJQUFYLEVBQWlCLFlBQVc7QUFDMUJaLFVBQVFDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELENBRkQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKVxudmFyIHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG5cbnZhciBhcHAgPSBleHByZXNzKCk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lKSk7XG5cbmFwcC5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICByZXMuc2VuZCgnaW5kZXgnKTtcbn0pXG5cbmFwcC5nZXQoJy9zZWFyY2gnLCBmdW5jdGlvbihyZXEsIHJlcykge1xuXG5cblxufSlcblxuYXBwLmdldCgnL2dldEFsbCcsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG5cbnZhciBjYiA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHZhciBiZWFyZXIgPSBKU09OLnBhcnNlKHRva2VuKS5hY2Nlc3NfdG9rZW47XG4gICB2YXIgb3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJyxcbiAgICB1cmw6ICdodHRwczovL2FwaS55ZWxwLmNvbS92My9idXNpbmVzc2VzL3NlYXJjaCcsXG4gICAgcXM6IFxuICAgIHsgdGVybTogJ2NvZmZlZScsXG4gICAgICBsb2NhdGlvbjogJzkwMDY2JyxcbiAgICAgIHNvcnRfYnk6ICdyYXRpbmcnLFxuICAgICAgbGltaXQ6ICc1MCcgfSxcbiAgICBoZWFkZXJzOiBcbiAgICB7ICdwb3N0bWFuLXRva2VuJzogJzkzNjc2ZDdlLTY1N2EtNDZmZC03MWZjLWE5YjJmY2Y5MDlhNScsXG4gICAgICAnY2FjaGUtY29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICBhdXRob3JpemF0aW9uOiAnQmVhcmVyICcrYmVhcmVyIH0gfTtcbiAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMuaGVhZGVycylcbiAgcmVxdWVzdChvcHRpb25zLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgaWYgKGVycm9yKSB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuXG4gICAgcmVzLnNlbmQoYm9keSk7XG4gICAgcmVzLmVuZCgpO1xuICAgIHJldHVybjtcbiAgfSk7XG5cbn1cblxuZ2V0QmVhcmVyKGNiKTtcblxufSlcblxuXG5cbnZhciBnZXRCZWFyZXIgPSBmdW5jdGlvbihjYikge1xuICB2YXIgb3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsXG4gIHVybDogJ2h0dHBzOi8vYXBpLnllbHAuY29tL29hdXRoMi90b2tlbicsXG4gIGhlYWRlcnM6IFxuICAgeyAncG9zdG1hbi10b2tlbic6ICdjNDY1Yzg0YS0zMzQzLTFlY2UtMjI3ZS0wN2JkNWExZDEwYjgnLFxuICAgICAnY2FjaGUtY29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxuICBmb3JtOiBcbiAgIHsgY2xpZW50X2lkOiAnJyxcbiAgICAgY2xpZW50X3NlY3JldDogJycsXG4gICAgIGdyYW50X3R5cGU6ICdjbGllbnRfY3JlZGVudGlhbHMnIH0gfTtcblxucmVxdWVzdChvcHRpb25zLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XG4gIGlmIChlcnJvcikgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcblxuICBjYihib2R5KTtcbn0pO1xufVxuXG5cbmFwcC5saXN0ZW4oODA4MCwgZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKFwibGlzdGVuaW5nIG9uIHBvcnQgODA4MFwiKVxufSlcblxuXG4iXX0=