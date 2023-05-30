import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable, {createTheme} from 'react-data-table-component';
import delete_logo from '../assets/delete.png';
import edit_logo from '../assets/pencil.png';

const CardItem = ({cardData}) => {

    return (
        <>
            {cardData && cardData.length > 0 && cardData.map((item,index) => {
                return (
                    <div className="card_item">
                        <table>
                            <tr>
                                <th>Box</th>
                                <td>: {item.box_name}</td>
                            </tr>
                            <tr>
                                <th>Person Name</th>
                                <td>: {item.person_name}</td>
                            </tr>
                            <tr>
                                <th>Date</th>
                                <td>: {item.date}</td>
                            </tr>
                            <tr>
                                <th>Time</th>
                                <td>: {item.time}</td>
                            </tr>
                            <tr>
                                <th>Hours</th>
                                <td>: {item.hours}</td>
                            </tr>
                            <tr>
                                <th>Amount</th>
                                <td>: ₹ {item.total_amount}</td>
                            </tr>
                            <tr>
                                <th>Advanced</th>
                                <td>: ₹ {item.advanced_amount}</td>
                            </tr>

                            <tr>
                                <th>Booking By</th>
                                <td>: {item.booking_by}</td>
                            </tr>
                        </table>
                    </div>
                )})
            }
        </>
    )
}

export default CardItem;