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

    $booking_form_store_url = get_rest_url(null,'booking-form/v1/store');
    $booking_form_list_url = get_rest_url(null,'booking-form/v1/list');
    $booking_form_delete_url = get_rest_url(null,'booking-form/v1/delete');

    wp_localize_script('booking-form-script','booking_form',array(
        'storeURL' => $booking_form_store_url,
        'listURL' => $booking_form_list_url,
        'deleteURL' => $booking_form_delete_url,
        'nonce' => wp_create_nonce('wp_rest')
    ));

}


add_action( 'rest_api_init', 'booking_form_generate_rest_endpoints' );

function booking_form_generate_rest_endpoints(){
    register_rest_route( 'booking-form/v1', '/store/', array(
        'methods' => 'POST',
        'callback' => 'booking_form_store_data',
    ) );

    register_rest_route( 'booking-form/v1', '/list/', array(
        'methods' => 'GET',
        'callback' => 'booking_form_fetch_list',
    ) );

    register_rest_route( 'booking-form/v1', '/months/', array(
        'methods' => 'GET',
        'callback' => 'booking_form_months_list',
    ) );


    register_rest_route( 'booking-form/v1', '/dates/', array(
        'methods' => 'GET',
        'callback' => 'booking_form_dates_list',
    ) );

    register_rest_route( 'booking-form/v1', '/delete/', array(
        'methods' => 'GET',
        'callback' => 'booking_form_delete_list',
    ) );
}

function booking_form_store_data(WP_REST_Request $request){
    global $wpdb;
    $table_name = $wpdb->prefix . 'bookings';
    $request_params = $request->get_params();

    $boxName = $request_params['boxName'] ?? NULL;
    $shift = $request_params['shift'] ?? NULL;
    $personName = $request_params['personName'] ?? NULL;
    $phoneNumber = $request_params['phoneNumber'] ?? NULL;
    $hours = $request_params['hours'] ?? NULL;
    $hourlyRate = $request_params['hourlyRate'] ?? NULL;
    $totalAmount = $request_params['totalAmount'] ?? NULL;
    $advanceAmount = $request_params['advanceAmount'] ?? NULL;
    $remainAmount = $request_params['remainAmount'] ?? NULL;
    $bookingBy = $request_params['bookingBy'] ?? NULL;
    $dateTime = $request_params['dateTime'] ?? NULL;
    $booking_id = $request_params['booking_id'] ?? NULL;

    $data = [
        'person_name'     => $personName,
        'person_number'   => $phoneNumber,
        'box_name'        => $boxName,
        'shift'           => $shift,
        'date_time'       => date('Y-m-d H:i:s', strtotime($dateTime)),
        'hours'           => $hours,
        'hourly_rate'     => $hourlyRate,
        'total_amount'    => $totalAmount,
        'advanced_amount' => $advanceAmount,
        'remain_amount'   => $remainAmount,
        'booking_by'      => $bookingBy,
    ];

    if(intval($booking_id) > 0){
        $data['updated_at'] = date('Y-m-d H:i:s');
        $data = $wpdb->update($table_name, $data, array('id' => $booking_id));
        $id = $booking_id;
    }else{
        $data['created_at'] = date('Y-m-d H:i:s');
        $wpdb->insert($table_name, $data);
        $id = $wpdb->insert_id;
    }

     return new WP_REST_Response(
         array(
             'status' => 200,
             'response' => 'Booking has been saved successfully.',
             'id' => $id
         )
    );
}

function booking_form_fetch_list(WP_REST_Request $request){
    global $wpdb;
    $table_name = $wpdb->prefix . 'bookings';
    $request_params = $request->get_params();

    $query = "SELECT * FROM $table_name";

    if(isset($request_params['id']) && !empty($request_params['id'])){
        $query .= " WHERE id = ".$request_params['id'];
    }

    if(isset($request_params['date']) && !empty($request_params['date'])){
        $request_params['date'] = date('Y-m-d',strtotime($request_params['date']));
        $query .= " WHERE DATE(date_time) = '".$request_params['date']."'";
    }

    $results = $wpdb->get_results($query);

    if(isset($request_params['id']) && !empty($request_params['id'])){
        $results = reset($results);
    }else{
        if(is_array($results) && count($results) > 0){
            foreach($results as $key => $result){
                $results[$key]->date = date('d-m-Y', strtotime($result->date_time));
                $results[$key]->time = date('H:i A (l)', strtotime($result->date_time));
                $results[$key]->created_at = date('d-m-Y H:i A', strtotime($result->created_at));
                $results[$key]->updated_at = !empty($result->updated_at) ? date('d-m-Y H:i A', strtotime($result->updated_at)) : '';
                $results[$key]->shift = ucwords($result->shift);
                $results[$key]->box_name = ucwords($result->box_name);
            }
        }
    }

    return new WP_REST_Response(
        array(
            'status' => 200,
            'results' => $results
        )
    );
}

function booking_form_delete_list(WP_REST_Request $request){
    global $wpdb;
    $table_name = $wpdb->prefix . 'bookings';
    $request_params = $request->get_params();


    if(isset($request_params['id']) && !empty($request_params['id']) && isset($request_params['action']) && $request_params['action'] == 'delete'){
        $wpdb->delete($table_name, array('id' => $request_params['id']));
    }

    return new WP_REST_Response(
        array(
            'status' => 200,
            'response' => 'Record Deleted Successfully.'
        )
    );
}

function booking_form_months_list(WP_REST_Request $request){
    global $wpdb;
    $table_name = $wpdb->prefix . 'bookings';
    $request_params = $request->get_params();
    $year_query = '';
    if(isset($request_params['year']) && !empty($request_params)){
        $year_query = "WHERE DATE_FORMAT(date_time, '%Y') = '".$request_params['year']."'";
    }

    $query = "SELECT DATE_FORMAT(date_time, '%M') as month,DATE_FORMAT(date_time, '%Y') as year FROM $table_name $year_query ORDER BY date_time DESC";

    $results = $wpdb->get_results($query);

    $final_results = array();
    foreach ($results as $item) {
        $final_results[$item->year][] = $item->month;
        $final_results[$item->year] = array_unique($final_results[$item->year]);
    }

    return new WP_REST_Response(
        array(
            'status' => 200,
            'results' => $final_results
        )
    );
}

function booking_form_dates_list(WP_REST_Request $request){
    global $wpdb;
    $table_name = $wpdb->prefix . 'bookings';
    $request_params = $request->get_params();
    $month_year_query = [];
    if(isset($request_params['year']) && !empty($request_params['year'])){
        $month_year_query[] = " YEAR(date_time) = '".$request_params['year']."'";
    }

    if(isset($request_params['month']) && !empty($request_params['month'])){
        $month_year_query[] = " MONTH(date_time) = '".$request_params['month']."'";
    }

    $month_query = '';
    if(count($month_year_query) > 0){
        $month_year_query = implode(' AND ', $month_year_query);
        $month_query = "WHERE $month_year_query";
    }

    $query = "SELECT DATE_FORMAT(date_time, '%d-%m-%Y') as date FROM $table_name $month_query ORDER BY date_time DESC";

    $results = $wpdb->get_results($query);


    return new WP_REST_Response(
        array(
            'status' => 200,
            'results' => $results
        )
    );
}