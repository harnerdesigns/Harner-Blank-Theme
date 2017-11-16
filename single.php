<?php get_header();?>

<?php include('loop.php');?>

<?php if ( comments_open() || get_comments_number() ) :
     comments_template();
 endif; ?>

 <?php get_footer();?>