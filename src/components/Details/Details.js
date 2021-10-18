import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApartmentData } from '../../redux/actions/index'
import './Details.css'

const Details = (props) => {
    let state = useSelector((state) => state.apartmentReducer)
    let dispatch = useDispatch();
    let [apartmentId, setId] = useState("");

    console.log(state, "sgtate");
    useEffect(()=>{
        setId(window.location.pathname.split('/')[2]);
        console.log(apartmentId, "sppppp")
        if(apartmentId !== "")dispatch(getApartmentData(apartmentId));
    },[apartmentId, dispatch]);

    return (
        <div className="Wrapper">
            <div className="Container">
                <div className="Upper">
                    <p>Details for ApartmentId : {state[0].apartment_id ? state[0].apartment_id : "nothing"}</p>
                </div>
                <div className="Lower">
                    <div>
                        <div><span>Bedroom : </span><span>  {state[0].bedroom}</span></div>
                        <div><span>Floor : </span><span>  {state[0].floor}</span></div>
                        <div><span>Gross : </span><span>  {state[0].grossm2}</span></div>
                        <div><span>Price : </span><span> {state[0].price}</span></div>
                        <div><span>Block : </span><span>  {state[0].blockNew}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;