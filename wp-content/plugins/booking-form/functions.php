<?php

function booking_form_add_page_template ($templates) {
    $templates['booking-form.php'] = 'Booking Form Template';
    return $templates;
}
add_filter ('theme_page_templates', 'booking_form_add_page_template');

function booking_form_load_plugin_template( $template ) {

    if(  get_page_template_slug() === 'booking-form.php' ) {

        if ( $theme_file = locate_template( array( 'booking-form.php' ) ) ) {
            $template = $theme_file;
        } else {
            $template = plugin_dir_path( __FILE__ ) . 'templates/booking-form.php';
        }
    }

    if($template == '') {
        throw new \Exception('No template found');
    }

    return $template;
}

add_filter ('page_template', 'booking_form_load_plugin_template');


add_action( 'wp_enqueue_scripts', 'booking_form_enqueue_scripts' );

/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function booking_form_enqueue_scripts() {
    wp_enqueue_style( 'booking-form-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
    wp_enqueue_script( 'booking-form-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );
}