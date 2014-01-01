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
    
    var movies = ['70135880', '70206627', '1154341', '70257818'];
    /*seeking justice, trespass, face off, stolen */

    /*the "All Movies" link has a data-cage attr. If this link is clicked,
    add those movies */
    
    if (this.getAttribute('data-cage')) {
        movies.push('70017836');
        /* racing with the moon */

    } 

    var random = Math.floor(Math.random() * movies.length);
    document.location = "https://movies.netflix.com/WiPlayer?movieid=" + movies[random];

}