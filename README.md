#Nicolas Cage Roulette

Nicolas Cage Roulette is a website that lets users stream random Nicolas Cage movies from Netflix. Users must be Netflix subscribers to stream movies.

I rewrote NCR in Javascript (from PHP) so I could take advantage of static web hosting on Amazon S3. For this version I also wanted to ensure compatibility with IE8 without relying on a JS library.

NCR doesn't talk to the Netflix API because Netflix no longer offers API keys. That means NCR is a hard-coded glorified random link generator, but it's better than nothing. If Netflix updates their catalog, some of the links may break. Let me know if that happens.

I claim no ownership for any of the graphics included in this repo.