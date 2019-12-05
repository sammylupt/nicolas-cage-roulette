/* This doesn't talk to the Netflix API; blame Netflix and their API 
policies for that. Any broken links, let me know */

(function() {
  var buttons = document.getElementsByClassName("buttons");

  for (var i in buttons) {
    if (buttons[i].addEventListener) {
      buttons[i].addEventListener("click", cageMe);
    } else {
      buttons[i].attachEvent("onclick", cageMe);
    }
  }

  function cageMe(event) {
    event.preventDefault();

    var movies = [
      70011206, // national treasure
      70044693, // world trade center
      70066433, // next
      70095135, // knowing
      70126573, // season of the witch
      80013773, // left behind
      80057700, // the runner
      80063773, // the trust
      80108976, // uss indianapolis men of courage
      80115134, // dog eat dog
      80218939, // the humanity bureau
      80188099, // inconceivable
      80989339 // between worlds
    ];

    /*the "All Movies" link has a data-cage attr. If this link is clicked,
    add those movies */
    if (this.getAttribute("data-cage")) {
      movies.concat([
        // there are no non-action Cage movies no netflix at this time
      ]);
    }

    var random = Math.floor(Math.random() * movies.length);
    document.location = "http://www.netflix.com/watch/" + movies[random];
  }
})();
