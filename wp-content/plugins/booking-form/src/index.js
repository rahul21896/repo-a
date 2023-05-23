import { render } from '@wordpress/element';

/**
 * Import the stylesheet for the plugin.
 */
import './style/main.scss';
import BookingFormMaster from "./Components/BookingFormMaster";


// Render the App component into the DOM
render(<BookingFormMaster />, document.getElementById('booking-form'));