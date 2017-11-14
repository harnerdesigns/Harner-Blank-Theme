<?php 
if ( have_posts() ) {
	while ( have_posts() ) {
		the_post(); 
echo the_title();
	} // end while
} // end if
?>