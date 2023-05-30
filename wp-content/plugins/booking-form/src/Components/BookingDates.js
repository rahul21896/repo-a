import React, {useEffect, useState} from 'react';
import axios from 'axios';
import logo from '../assets/free_hit_logo.png';
import BookingForm from "./BookingForm";
import BookingList from "./BookingList";
const BookingDates = ({setIsMonth,setIsDates,setIsList,setFilterData,setFilterDate,filterData}) => {

    const [loadMonths,setLoadMonths] = useState(true);
    const [loading,setLoading] = useState(false);
    const [monthData,setMonthData] = useState([]);

    useEffect(() => {
        if(loadMonths){
            getList();
        }
    },[loadMonths]);

    const handleDateClick = (date) => {
        setFilterDate(date);
        setIsMonth(false);
        setIsDates(false);
        setIsList(true);
    }

    const getList = () => {
        const { dateURL } = booking_form;
        let finalURL =`${dateURL}?month=${filterData.month}&year=${filterData.year}`;
        setLoading(true);
        axios.get(finalURL)
            .then(response => {
                console.log(response);
                setMonthData(response.data.results);
                setLoading(false);
                setLoadMonths(false);
            })
            .catch(error => {
                console.log('Error Message : ',error.message);
                console.error('There was an error!', error);
            });
    }

    return (
        <>
            { loading && (
                <div className="loader_div">
                    <div className="lds-dual-ring"></div>
                </div>
            )
            }
            { monthData && monthData.length > 0 && (
                <>
                    <div className="months_section">
                        <h4>Choose Date</h4>
                        <div className="divider"></div>
                        <ul className="booking_months">
                            {monthData.map((month,index) => {
                                return (
                                    <li onClick={() => handleDateClick(month.date)} key={index}>{month.date} </li>
                                );
                            })}
                        </ul>
                    </div>
                </>
            )
            }
        </>
    );
}

export default BookingDates;