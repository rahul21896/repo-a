import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/free_hit_logo.png';
import BookingForm from "./BookingForm";
import BookingList from "./BookingList";
const BookingListMaster = ({setShowList,showList,showForm,setShowForm,isEdit,editData,setIsEdit,setEditData}) => {

    const showEditNewForm = () => {
        setIsEdit(false);
        setEditData({});
        setShowForm(false);
        setShowList(!showList);
    }

    return (
        <>
            {showForm && <BookingForm
                setShowForm={setShowForm}
                showForm={showForm}
                isEdit={isEdit}
                editData={editData}
            />}
            {!showForm && (
                <div className="container">
                    <div className="title">
                        <div className="logo_inner_div">
                            <img className="logo_img" src={logo} alt="Logo"/> Free Hit List
                        </div>
                        <div className="buttons">
                            <button className="add_new_button act" onClick={() => showEditNewForm()}>Back</button>
                        </div>
                    </div>
                    <BookingList
                        setIsEdit={setIsEdit}
                        setEditData={setEditData}
                        setShowForm={setShowForm}
                        showForm={showForm}
                        setShowList={setShowList}
                        showList={showList}
                    />
                </div>
            )}
        </>
    );
}

export default BookingListMaster;