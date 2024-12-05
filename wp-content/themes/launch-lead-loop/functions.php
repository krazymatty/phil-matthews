<?php
/**
 * Enqueue scripts and styles for the child theme.
 */
function twentytwentyfive_child_enqueue_styles() {
    // Enqueue parent theme styles
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');

    // Enqueue child theme styles
    wp_enqueue_style('child-style', get_stylesheet_uri(), array('parent-style'), wp_get_theme()->get('Version'));
}
add_action('wp_enqueue_scripts', 'twentytwentyfive_child_enqueue_styles');
