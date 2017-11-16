<?php 
if ( have_posts() ) {
	while ( have_posts() ) {
		the_post(); ?>
		<article class="post">
				<h2>
			<a href="<?php the_permalink(); ?>">
					<?php echo the_title();?>
					
			</a>
				</h2>
			<h4 class="postMeta">By <?php the_author()?> | <a href="<?php the_permalink(); ?>#comments"><?php comments_number( '', '1 comment', '% comments' ); ?></a></h4>
			<section class="postBody">
				<?php echo the_content(); ?>
			</section>

		</article>
	

	<?php } // end while
} // end if
?>