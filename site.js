console.log("This will be the js used by the project.")

var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
url += '?' + $.param({
  'api-key': "f1395379075342c8b7427f391dad83b2",
  'critics-pick': "Y"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});