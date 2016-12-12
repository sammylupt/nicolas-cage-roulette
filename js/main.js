/* This doesn't talk to the Netflix API; blame Netflix and their API 
policies for that. Any broken links, let me know */

(function(){
  var buttons = document.getElementsByClassName('buttons');

  for (var i in buttons) {
    if (buttons[i].addEventListener) { 
      buttons[i].addEventListener('click', cageMe);
    } 
    else {
      buttons[i].attachEvent('onclick', cageMe);
    }
  }

  function cageMe(event) {
    event.preventDefault();
    
    var movies = [
      70066433, // next
      70206627, // trespass
      80005641, // rage
      16915411, // snake eyes
      70257818, // stolen
      80015345, // outcast
      80063773, // the trust
      70135880, // seeking justice
      914950 // the rock
    ];

    /*the "All Movies" link has a data-cage attr. If this link is clicked,
    add those movies */
    if (this.getAttribute('data-cage')) {
      movies.concat([
        70048301, // the wicker man
        80074515, // pay the ghost
        80057700  // the runner
      ]);
    } 

    var random = Math.floor(Math.random() * movies.length);
    document.location = "http://www.netflix.com/watch/" + movies[random];
  }
})()
