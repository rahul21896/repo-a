import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable, {createTheme} from 'react-data-table-component';
import delete_logo from '../assets/delete.png';
import edit_logo from '../assets/pencil.png';
import CardItem from "./CardItem";

const BookingCardView = ({setIsEdit,setEditData,setShowForm,showForm,filterDate}) => {

    const [data,setData] = useState([]);
    const [loadData,setLoadData] = useState(true);
    const [loading,setLoading] = useState(false);
    const ExpandedComponent = ({ data }) => {
        return (
            <div className="expanded_detail">
                <table cellPadding="4" cellSpacing="0" border="1">
                    <tr>
                        <th width="50%">Person Name</th>
                        <td width="50%">{data.person_name}</td>
                    </tr>
                    <tr>
                        <th>Box Name</th>
                        <td>{data.box_name}</td>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <td>{data.date}</td>
                    </tr>
                    <tr>
                        <th>Hours</th>
                        <td>{data.hours}</td>
                    </tr>
                    <tr>
                        <th>Total Amount</th>
                        <td>₹ {data.total_amount}</td>
                    </tr>
                    <tr>
                        <th>Rem. Amount</th>
                        <td>₹ {data.remain_amount}</td>
                    </tr>
                    <tr>
                        <th>Added At</th>
                        <td>{data.created_at}</td>
                    </tr>
                </table>
                <table cellPadding="4" cellSpacing="0" border="1">
                    <tr>
                        <th width="50%">Person Number</th>
                        <td width="50%">{data.person_number}</td>
                    </tr>
                    <tr>
                        <th>Shift</th>
                        <td>{data.shift}</td>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <td>{data.time}</td>
                    </tr>
                    <tr>
                        <th>Hourly Rate</th>
                        <td>{data.hourly_rate}</td>
                    </tr>
                    <tr>
                        <th>Adv. Amount</th>
                        <td>₹ {data.advanced_amount}</td>
                    </tr>
                    <tr>
                        <th>Booking By</th>
                        <td>{data.booking_by}</td>
                    </tr>
                    <tr>
                        <th>Updated At</th>
                        <td>{data.updated_at}</td>
                    </tr>
                </table>
            </div>
        )
    };

    const handleDeleteClick = (e) => {
        if(confirm("Are you sure you want to delete this booking?")){
            const editID = e.target.attributes.dataRowId.nodeValue
            setLoading(true);
            const { deleteURL } = booking_form;
            let finalURL =`${deleteURL}?id=${editID}&action=delete`;
            axios.get(finalURL)
                .then(response => {
                    setLoading(false);
                    getList();
                })
                .catch(error => {
                    console.log('Error Message : ',error.message);
                    console.error('There was an error!', error);
                });
        }else{
            return false;
        }
    }

    const handleButtonClick = (e) => {
        console.log(e);
        const editID = e.target.attributes.dataRowId.nodeValue
        setLoading(true);
        const { listURL } = booking_form;
        let finalURL =`${listURL}?id=${editID}`;
        axios.get(finalURL)
            .then(response => {
                setLoading(false);
                setEditData(response.data.results);
                setIsEdit(true);
                setShowForm(!showForm);
            })
            .catch(error => {
                console.log('Error Message : ',error.message);
                console.error('There was an error!', error);
            });
    }

    const columns = [
        {
            name: 'Person Name',
            selector: row => row.person_name,
            sortable: true,
            sortField: 'person_name',
        },
        {
            name: 'Box',
            selector: row => row.box_name,
            sortable: true,
            sortField: 'box_name',
        },
        {
            name: 'Date',
            selector: row => row.date,
            sortable: true,
            sortField: 'date',
        },
        {
            name: 'Time',
            selector: row => row.time,
            sortable: true,
            sortField: 'time',
        },
        {

            cell: (row) => {
                return (
                    <>
                        <button className={`add_new_button icon`} dataRowId={row.id} onClick={handleButtonClick}>
                            <img className="action_icon" src={edit_logo} alt=""/>
                        </button>
                        <button className={`add_new_button icon`} dataRowId={row.id} onClick={handleDeleteClick}>
                            <img className="action_icon" src={delete_logo} alt=""/>
                        </button>

                    </>
                )
            },
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    useEffect(() => {
        if(loadData){
            getList();
            setLoadData(false);
        }
        getList();
    },[loadData,filterDate]);

    const getList = () => {
        const { listURL } = booking_form;
        let finalURL =`${listURL}?date=${filterDate}`;
        setLoading(true);
        axios.get(finalURL)
            .then(response => {
                setData(response.data.results);
                setLoading(false);
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
            <div className="card">
                <CardItem cardData={data} />
            </div>
        </>
    )
}

export default BookingCardView;