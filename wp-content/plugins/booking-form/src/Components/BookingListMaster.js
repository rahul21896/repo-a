import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/free_hit_logo.png';
import list_logo from '../assets/list.png';
import grid_logo from '../assets/menu.png';
import BookingForm from "./BookingForm";
import BookingList from "./BookingList";
import BookingMonths from "./BookingMonths";
import BookingDates from "./BookingDates";
import BookingCardView from "./BookingCardView";
const BookingListMaster = ({setShowList,showList,showForm,setShowForm,isEdit,editData,setIsEdit,setEditData}) => {

    const [isMonth,setIsMonth] = useState(true);
    const [isDates,setIsDates] = useState(false);
    const [isList,setIsList] = useState(false);
    const [filterData,setFilterData] = useState({});
    const [filterDate,setFilterDate] = useState('');
    const [showGridView,setShowGridView] = useState(true);

    const showEditNewForm = () => {
        if(isMonth){
            setIsEdit(false);
            setEditData({});
            setShowForm(false);
            setShowList(!showList);

            setIsDates(false);
            setIsList(false);
        }
        if(isDates){
            setIsList(false);
            setIsDates(false);
            setIsMonth(true);
        }
        if(isList){
            setIsMonth(false);
            setIsList(false);
            setIsDates(true);
        }
    }

    const handleOnGridView = (e) => {
        setShowGridView(!e.target.checked);
    }

    return (
        <>
            {!showForm && (
                <div className="container">
                    <div className="title">
                        <div className="logo_inner_div">
                            <img className="logo_img" src={logo} alt="Logo"/> Free Hit List
                        </div>
                        <div className="buttons">
                            <button className="add_new_button act" onClick={() => showEditNewForm()}>Back</button>
                            {isList && <div className="toggle">
                                <input type="checkbox" onChange={(e) => handleOnGridView(e)} />
                                <label></label>
                            </div>}
                        </div>
                    </div>
                    {isMonth && <BookingMonths
                        setIsMonth={setIsMonth}
                        isMonth={isMonth}
                        setIsDates={setIsDates}
                        isDates={isDates}
                        setIsList={setIsList}
                        isList={isList}
                        filterData={filterData}
                        setFilterData={setFilterData}
                    /> }

                    {isDates && <BookingDates
                        setIsMonth={setIsMonth}
                        isMonth={isMonth}
                        setIsDates={setIsDates}
                        isDates={isDates}
                        setIsList={setIsList}
                        isList={isList}
                        filterData={filterData}
                        setFilterData={setFilterData}
                        filterDate={filterDate}
                        setFilterDate={setFilterDate}
                    /> }

                    {isList && <BookingList
                        setIsEdit={setIsEdit}
                        setEditData={setEditData}
                        setShowForm={setShowForm}
                        showForm={showForm}
                        setShowList={setShowList}
                        showList={showList}
                        filterDate={filterDate}
                        gridView={showGridView}
                    />}

                </div>
            )}
        </>
    );
}

export default BookingListMaster;