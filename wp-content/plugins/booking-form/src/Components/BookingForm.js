import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../assets/free_hit_logo.png';
const BookingForm = ({setShowForm,showForm,isEdit,editData}) => {
    const [boxName,setBoxName] = useState('');
    const [shift,setShift] = useState('');
    const [personName,setPersonName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [hours,setHours] = useState('');
    const [hourlyRate,setHourlyRate] = useState('');
    const [totalAmount,setTotalAmount] = useState(0);
    const [advanceAmount,setAdvanceAmount] = useState('');
    const [remainAmount,setRemainAmount] = useState('');
    const [bookingBy,setBookingBy] = useState('');
    const [dateTime,setDateTime] = useState('');
    const [loading,setLoading] = useState(false);
    const [showSuccess,setShowSuccess] = useState(false);
    const [successMessage,setSuccessMessage] = useState('');
    const [bookingId,setBookingId] = useState(0);
    const [isEditDataSet,setIsEditDataSet] = useState(false);

    const [errBoxName,setErrBoxName] = useState(false);
    const [errShift,setErrShift] = useState(false);
    const [errPersonName,setErrPersonName] = useState(false);
    const [errPhoneNumber,setErrPhoneNumber] = useState(false);
    const [errHours,setErrHours] = useState(false);
    const [errHourlyRate,setErrHourlyRate] = useState(false);
    const [errAdvanceAmount,setErrAdvanceAmount] = useState(false);
    const [errBookingBy,setErrBookingBy] = useState(false);
    const [errDateTime,setErrDateTime] = useState(false);

    const bookingFillEditData = () => {
        if(isEdit){
            setBoxName(editData.box_name);
            setShift(editData.shift);
            setPersonName(editData.person_name);
            setPhoneNumber(editData.person_number);
            setHours(editData.hours);
            setHourlyRate(editData.hourly_rate);
            setTotalAmount(editData.total_amount);
            setAdvanceAmount(editData.advanced_amount);
            setRemainAmount(editData.remain_amount);
            setBookingBy(editData.booking_by);
            setDateTime(editData.date_time);
            setBookingId(editData.id);
        }else{
            resetForm();
        }
    };

    useEffect(() => {
        if(!isEditDataSet){
            bookingFillEditData();
            setIsEditDataSet(true);
        }
    },isEditDataSet);

    const boxList = [
        {
            label: 'Dhoni',
            value: 'dhoni'
        },
        {
            label: 'Kohli',
            value: 'kohli'
        }
    ];

    const shiftList = [
        {
            label: 'Morning',
            value: 'morning'
        },
        {
            label: 'Night',
            value: 'night'
        }
    ];

    const handleHours = (value) =>
    {
        setHours(value);
        if(!isNaN(value) && !isNaN(hourlyRate)) {
            setTotalAmount(value * hourlyRate);
        }else{
            setTotalAmount(0);
        }
    }

    const handleHourlyRate = (value) => {
        setHourlyRate(value);
        if(!isNaN(value) && !isNaN(hours)) {
            setTotalAmount(value * hours);
        }else{
            setTotalAmount(0);
        }
    }

    const handleAdvanceAmount = (value) => {
        setAdvanceAmount(value);
        if(!isNaN(value) && !isNaN(totalAmount)) {
            setRemainAmount(totalAmount - value)
        }else{
            setRemainAmount(0);
        }
    }

    const checkTextValidation = (value,filedFunction) => {
        if(value === '' || value === null || value === undefined) {
            filedFunction(true);
            return true;
        }else{
            filedFunction(false);
            return false;
        }
    }

    const resetForm = () => {
        setBoxName('');
        setShift('');
        setPersonName('');
        setPhoneNumber('');
        setHours('');
        setHourlyRate('');
        setTotalAmount(0);
        setAdvanceAmount('');
        setRemainAmount('');
        setBookingBy('');
        setDateTime('');
        setBookingId(0);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { storeURL } = booking_form;
        const field1 = checkTextValidation(personName,setErrPersonName)
        const field2 = checkTextValidation(phoneNumber,setErrPhoneNumber)
        const field3 = checkTextValidation(boxName,setErrBoxName)
        const field4 = checkTextValidation(shift,setErrShift)
        const field5 = checkTextValidation(dateTime,setErrDateTime)
        const field6 = checkTextValidation(hours,setErrHours)
        const field7 = checkTextValidation(hourlyRate,setErrHourlyRate)
        const field8 = checkTextValidation(advanceAmount,setErrAdvanceAmount)
        const field9 = checkTextValidation(bookingBy,setErrBookingBy)
        if(field1 || field2 || field3 || field4 || field5 || field6 || field7 || field8 || field9) {
            return false;
        }

        let data = {
            boxName: boxName,
            shift: shift,
            personName: personName,
            phoneNumber: phoneNumber,
            hours: hours,
            hourlyRate: hourlyRate,
            totalAmount: totalAmount,
            advanceAmount: advanceAmount,
            remainAmount: remainAmount,
            bookingBy: bookingBy,
            dateTime: dateTime,
            booking_id: bookingId
        }

        setLoading(true);
        axios.post(storeURL, data)
            .then(response => {
                setSuccessMessage(response.data.response);
                setLoading(false);
                setShowSuccess(true);
                resetForm();
                setShowForm(!showForm);
            })
            .catch(error => {
                console.log('Error Message : ',error.message);
                console.error('There was an error!', error);
            });
    }

    const closeSuccessMessage = () => {
        setSuccessMessage('');
        setShowSuccess(false);
    }

    return (
        <div className="container">
            { loading && (
                <div className="loader_div">
                    <div className="lds-dual-ring"></div>
                </div>
            )
            }
            <div className="title">
                <div className="logo_inner_div">
                    <img className="logo_img" src={logo} alt="Logo"/> Free Hit Booking
                </div>
                <button className="add_new_button" onClick={() => setShowForm(!showForm)}>Back</button>
            </div>
            {showSuccess && (
                <div className="success_messsage">
                    <h4>{successMessage}</h4>
                    <span onClick={() => closeSuccessMessage()}>✖</span>
                </div>
            )
            }
            <div className="content">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Person Name</span>
                            <input type="text" placeholder="Enter Person Name" value={personName} onInput={(e) => setPersonName(e.target.value)} />
                            {errPersonName && <span className="error">Person Name is Mandatory</span>}
                        </div>
                        <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input type="text" placeholder="Enter Person number" value={phoneNumber} onInput={(e) => setPhoneNumber(e.target.value)} />
                            {errPhoneNumber && <span className="error">Phone Number is Mandatory</span>}
                        </div>

                        <div className="input-box">
                            <span className="details">Box Name</span>
                            <select onChange={(e) => setBoxName(e.target.value)}>
                                <option value="">Select Box</option>
                                {boxList.map((item, index) => {
                                    const selected = item.value === boxName ? 'selected' : '';
                                    return (
                                        <option key={index} value={item.value} selected={selected}>{item.label}</option>
                                    );
                                })}
                            </select>
                            {errBoxName && <span className="error">Box Name is Mandatory</span>}
                        </div>
                        <div className="input-box">
                            <span className="details">Shift</span>
                            <select onChange={(e) => setShift(e.target.value)}>
                                <option value="">Select Box</option>
                                {shiftList.map((item, index) => {
                                    const selected = item.value === shift ? 'selected' : '';
                                    return (
                                        <option key={index} value={item.value} selected={selected}>{item.label}</option>
                                    );
                                })}
                            </select>
                            {errShift && <span className="error">Shift is Mandatory</span>}
                        </div>

                        <div className="input-box">
                            <span className="details">Date Time</span>
                            <input type="datetime-local" placeholder="Date Time" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
                            {errDateTime && <span className="error">Date Time is Mandatory</span>}
                        </div>

                        <div className="input-box">
                            <span className="details">Hours</span>
                            <input type="number" placeholder="Enter Hours" min={0} value={hours} onInput={(e) => handleHours(e.target.value)} />
                            {errHours && <span className="error">Hours is Mandatory</span>}
                        </div>
                        <div className="input-box">
                            <span className="details">Hourly Rate</span>
                            <input type="number" placeholder="Enter Hourly Rate" min={0} value={hourlyRate} onInput={(e) => handleHourlyRate(e.target.value)} />
                            {errHourlyRate && <span className="error">Hourly Rate is Mandatory</span>}
                        </div>
                        <div className="input-box">
                            <span className="details">Total Amount</span>
                            <input type="number" placeholder="Total Amount" min={0} value={totalAmount} readOnly={true} />
                        </div>
                        <div className="input-box">
                            <span className="details">Advance Amount</span>
                            <input type="number" placeholder="Advanced Amount" min={0} value={advanceAmount} onInput={(e) => handleAdvanceAmount(e.target.value)} />
                            {errAdvanceAmount && <span className="error">Advance Amount is Mandatory</span>}
                        </div>
                        <div className="input-box">
                            <span className="details">Remain Amount</span>
                            <input type="number" placeholder="Remain Amount" min={0} value={remainAmount} readOnly={true} />
                        </div>

                        <div className="input-box">
                            <span className="details">Booking By</span>
                            <input type="text" placeholder="Enter Booking By Name" value={bookingBy} onInput={(e) => setBookingBy(e.target.value)} />
                            {errBookingBy && <span className="error">Booking By is Mandatory</span>}
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BookingForm;