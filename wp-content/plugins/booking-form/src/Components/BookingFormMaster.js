import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/free_hit_logo.png';
import BookingForm from "./BookingForm";
import BookingList from "./BookingList";
import BookingListMaster from "./BookingListMaster";
const BookingFormMaster = () => {
    const [showForm, setShowForm] = useState(false);
    const [isEdit,setIsEdit] = useState(false);
    const [editData,setEditData] = useState({});
    const [showList,setShowList] = useState(false);

    const showEditNewForm = () => {
        setIsEdit(false);
        setEditData({});
        setShowForm(!showForm);
    }

    const showListForm = () => {
        setShowList(true);
        setShowForm(false);
    }

    return (
        <>
            {showForm && <BookingForm
                setShowForm={setShowForm}
                showForm={showForm}
                isEdit={isEdit}
                editData={editData}
            />}
            {!showForm && !showList && (
                <div className="container">
                    <div className="title">
                        <div className="logo_inner_div">
                            <img className="logo_img" src={logo} alt="Logo"/> Free Hit List
                        </div>
                    </div>
                    <div className="booking_buttons">
                        <div className="buttons">
                            <button className="add_new_button act" onClick={() => showEditNewForm()}>Add New Booking</button>
                            <button className="add_new_button act" onClick={() => showListForm()}>Show Bookings</button>
                        </div>
                    </div>
                </div>
            )}

            {showList && <BookingListMaster
                setShowForm={setShowForm}
                showForm={showForm}
                setShowList={setShowList}
                showList={showList}
                isEdit={isEdit}
                editData={editData}
                setIsEdit={setIsEdit}
                setEditData={setEditData}
            />}

        </>
    );
}

export default BookingFormMaster;