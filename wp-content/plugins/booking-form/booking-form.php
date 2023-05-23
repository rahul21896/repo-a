<?php

/*
Plugin Name: Booking Form
Plugin URI: http://URI_Of_Page_Describing_Plugin_and_Updates
Description: A brief description of the Plugin.
Version: 1.0
Author: dell
Author URI: http://URI_Of_The_Plugin_Author
License: A "Slug" license name e.g. GPL2
*/



if ( !defined( 'ABSPATH' ) ) exit;

// Act on plugin activation
register_activation_hook( __FILE__, "booking_form_activate_plugin" );


// Activate Plugin
function booking_form_activate_plugin() {

    // Execute tasks on Plugin activation

    // Insert DB Tables
    init_create_db();
}

function init_create_db(){

    // WP Globals
    global $table_prefix, $wpdb;

    // Customer Table
    $booking_table = $table_prefix . 'bookings';

    // Create Customer Table if not exist
    if( $wpdb->get_var( "show tables like '$booking_table'" ) != $booking_table ) {

        // Query - Create Table
        $sql = "CREATE TABLE `$booking_table` (";
        $sql .= " `id` int(11) NOT NULL auto_increment, ";
        $sql .= " `person_name` varchar(500) NULL, ";
        $sql .= " `person_number` varchar(500) NULL, ";
        $sql .= " `box_name` varchar(500) NULL, ";
        $sql .= " `shift` varchar(500) NULL, ";
        $sql .= " `date_time` DATETIME NULL, ";
        $sql .= " `hours` decimal(20,2) NULL, ";
        $sql .= " `hourly_rate` decimal(20,2) NULL, ";
        $sql .= " `total_amount` decimal(20,2) NULL, ";
        $sql .= " `advanced_amount` decimal(20,2) NULL, ";
        $sql .= " `remain_amount` decimal(20,2) NULL, ";
        $sql .= " `booking_by` varchar(500) NULL, ";
        $sql .= " `created_at` DATETIME NULL, ";
        $sql .= " `updated_at` DATETIME NULL, ";
        $sql .= " PRIMARY KEY (`id`) ";
        $sql .= ");";

        // Include Upgrade Script
        require_once( ABSPATH . '/wp-admin/includes/upgrade.php' );

        // Create Table
        dbDelta( $sql );
    }
}

require 'functions.php';

