import React, {useEffect, useState} from 'react';
import axios from 'axios';
import logo from '../assets/free_hit_logo.png';
import BookingForm from "./BookingForm";
import BookingList from "./BookingList";
const BookingMonths = ({setIsMonth,setIsDates,setIsList,setFilterData}) => {

    const [loadMonths,setLoadMonths] = useState(true);
    const [loading,setLoading] = useState(false);
    const [monthData,setMonthData] = useState([]);

    const handleMonthClick = (month,year) => {
        const filterData = {
            month: month,
            year : year
        };
        setFilterData(filterData);
        setIsMonth(false);
        setIsDates(true);
        setIsList(false);
    }

    useEffect(() => {
        if(loadMonths){
            getList();
        }
    },[loadMonths]);

    const getList = () => {
        const { monthURL } = booking_form;
        let finalURL =`${monthURL}`;
        setLoading(true);
        axios.get(finalURL)
            .then(response => {
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
                        <h4>Choose Month</h4>
                        <div className="divider"></div>
                        <ul className="booking_months">
                            {monthData.map((month,index) => {
                                return (
                                    <li onClick={() => handleMonthClick(month.month_num,month.year)} key={index}>{month.month_string} - {month.year} </li>
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

export default BookingMonths;