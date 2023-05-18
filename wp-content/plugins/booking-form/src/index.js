import BookingForm from "./Components/BookingForm";
import { render } from '@wordpress/element';

/**
 * Import the stylesheet for the plugin.
 */
import './style/main.scss';


// Render the App component into the DOM
render(<BookingForm />, document.getElementById('booking-form'));