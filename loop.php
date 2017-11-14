<?php 
if ( have_posts() ) {
	while ( have_posts() ) {
		the_post(); ?>
		<article class="post">
			<a href="<?php the_permalink(); ?>"><h2><?php echo the_title();?></h2></a>
			<h4 class="postMeta">By <?php the_author()?> | <?php comments_number( '', '1 comment', '% comments' ); ?></h4>
			<section class="postBody">
				<?php echo the_content(); ?>
			</section>

		</article>
	

	<?php } // end while
} // end if
?>