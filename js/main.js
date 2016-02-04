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
      60000959, // gone in 60 seconds
      70000207, // kiss of death
      70011206, // national treasure
      70038796, // lord of war
      70135880, // seeking justice
      70257818, // stolen
      80013773, // left behind
      80015345, // outcast
      80074515  // pay the ghost
    ];

    /*the "All Movies" link has a data-cage attr. If this link is clicked,
    add those movies */
    
    if (this.getAttribute('data-cage')) {
      movies.concat([
        70023955, // the weatherman
        80057700  // the runner
      ]);
    } 

    var random = Math.floor(Math.random() * movies.length);
    document.location = "https://movies.netflix.com/WiPlayer?movieid=" + movies[random];
  }
})()
