<?php

define("THEME_DIR", get_template_directory_uri());


// Scripts and Styles

// wp_enqueue_script("jquery");
wp_enqueue_style( 'style', get_stylesheet_uri() );

function enqueue_my_scripts(){
    foreach( glob( get_template_directory_uri(). '/js/*.js' ) as $file ) {
        // $file contains the name and extension of the file
        wp_enqueue_script( $file, get_template_directory_uri().'/js/'.$file);
    }
}
add_action('wp_enqueue_scripts', 'enqueue_my_scripts');



// Theme Features

add_theme_support( 'custom-logo' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'custom-background' );
remove_action('welcome_panel', 'wp_welcome_panel');


// Admin Styling

add_action('admin_head', 'my_custom_fonts');

function my_custom_fonts() {
  echo '<style>
  #wpwrap{background:#D1C4E9;}
    body, td, textarea, input, select {
      font-family: "Roboto";
    } 
  </style>';
}



//Menus

function register_my_menu() {
  register_nav_menu('header-menu',__( 'Header Menu' ));
}
add_action( 'init', 'register_my_menu' );


function remove_footer_admin () {
 
echo 'Fueled by <a href="http://www.wordpress.org" target="_blank">WordPress</a> | Theme By <a href="http://www.harnerdesigns.com" target="_blank">Harner Designs</a></p>';
 
}
 
add_filter('admin_footer_text', 'remove_footer_admin');

function no_wordpress_errors(){
  return 'Oops. Please Try Again';
}
add_filter( 'login_errors', 'no_wordpress_errors' );


function wpb_author_info_box( $content ) {
 
global $post;
 
// Detect if it is a single post with a post author
if ( is_single() && isset( $post->post_author ) ) {
 
// Get author's display name 
$display_name = get_the_author_meta( 'display_name', $post->post_author );
 
// If display name is not available then use nickname as display name
if ( empty( $display_name ) )
$display_name = get_the_author_meta( 'nickname', $post->post_author );
 
// Get author's biographical information or description
$user_description = get_the_author_meta( 'user_description', $post->post_author );
 
// Get author's website URL 
$user_website = get_the_author_meta('url', $post->post_author);
 
// Get link to the author archive page
$user_posts = get_author_posts_url( get_the_author_meta( 'ID' , $post->post_author));
  
if ( ! empty( $display_name ) )
 
$author_details = '<p class="author_name">About ' . $display_name . '</p>';
 
if ( ! empty( $user_description ) )
// Author avatar and bio
 
$author_details .= '<p class="author_details">' . get_avatar( get_the_author_meta('user_email') , 90 ) . nl2br( $user_description ). '</p>';
 
$author_details .= '<p class="author_links"><a href="'. $user_posts .'">View all posts by ' . $display_name . '</a>';  
 
// Check if author has a website in their profile
if ( ! empty( $user_website ) ) {
 
// Display author website link
$author_details .= ' | <a href="' . $user_website .'" target="_blank" rel="nofollow">Website</a></p>';
 
} else { 
// if there is no author website then just close the paragraph
$author_details .= '</p>';
}
 
// Pass all this info to post content  
$content = $content . '<section class="author_bio_section" >' . $author_details . '</section>';
}
return $content;
}
 
// Add our function to the post content filter 
add_action( 'the_content', 'wpb_author_info_box' );
 
// Allow HTML in author bio section 
remove_filter('pre_user_description', 'wp_filter_kses');

?>