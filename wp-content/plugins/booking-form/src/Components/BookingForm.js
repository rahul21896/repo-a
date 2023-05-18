import React, { useState, useEffect } from 'react';

const BookingForm = () => {
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

    const [errBoxName,setErrBoxName] = useState(false);
    const [errShift,setErrShift] = useState(false);
    const [errPersonName,setErrPersonName] = useState(false);
    const [errPhoneNumber,setErrPhoneNumber] = useState(false);
    const [errHours,setErrHours] = useState(false);
    const [errHourlyRate,setErrHourlyRate] = useState(false);
    const [errAdvanceAmount,setErrAdvanceAmount] = useState(false);
    const [errBookingBy,setErrBookingBy] = useState(false);
    const [errDateTime,setErrDateTime] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
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
        alert('rock');
    }

    return (
        <div className="container">
            <div className="title">Booking</div>
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