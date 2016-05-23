console.log("This will be the js used by the project.")

var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
url += '?' + $.param({
  'api-key': "f1395379075342c8b7427f391dad83b2",
  'critics-pick': "Y"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(data) {
  console.log(data);

// our script maybe?

// gets the button
var button = document.getElementById("pickmovie");
console.log(button);


// clicking button returns random movie information
button.onclick = function pick(){ 
// gets a random movie and puts it into a variable x
var x = Math.floor(Math.random() * data.num_results);
console.log(x);

//to make the url work
var str = "Read NYT's review";
var finallink = str.link(data.results[x].link.url)
console.log(this);

document.getElementById("title").innerHTML = data.results[x].display_title;
document.getElementById("rating").innerHTML = data.results[x].mpaa_rating;
document.getElementById("summary").innerHTML = data.results[x].summary_short;
document.getElementById("url").innerHTML = finallink;
};


// end of our script maybe?

}).fail(function(err) {
  throw err;
});