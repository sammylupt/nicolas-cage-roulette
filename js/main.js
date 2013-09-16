/* This doesn't talk to the Netflix API; blame Netflix and their API 
policies for that. Any broken links, let me know */


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
    
    var movies = ['70135880', '70206627', '1154341', '60000088', '60020812', '70257818'];
    /*seeking justice, trespass, face off, bringing out the dead, windtalkers, stolen */

    /*the "All Movies" link has a data-cage attr. If this link is clicked,
    add those movies */
    
    if (this.getAttribute('data-cage')) {
        movies.push('70044693');
        /* world trade center */

    } 

    var random = Math.floor(Math.random() * movies.length);
    document.location = "https://movies.netflix.com/WiPlayer?movieid=" + movies[random];

}