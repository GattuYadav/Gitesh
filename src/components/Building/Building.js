import React, { useState } from "react";
import filterData from '../../mockData/test_filter_options.json'
import mainData from '../../mockData/test_units_data.json'
import './Building.css'

const Building = (props) => {

const [floorOptions, setFloorOptions] = useState([]);
const [priceOptions, setPriceOptions] = useState([]);
let [filterContent, setFilterContent] = useState(mainData);
let idd = null;
const onChangePriceOptions = (id) => {
    let dummyData = priceOptions;
    if(dummyData.includes(id)){
        let d = id === 0 ? 1 : (id === 1 ? 2 : (id === 2 ? 3 : (id === 3 ? 4 : (id === 4 ? 5 : null ))));
        idd = d;
        let index = dummyData.findIndex((item) => item === id);
        if(index > -1) {
            dummyData.splice(index, 1);
            let dummyCustom = filterContent.filter(priceFilterFunctionDeselect);
            setFilterContent(dummyCustom);
        }
        setPriceOptions(dummyData);
    }
    else{
        priceOptions.push(id);
        setPriceOptions(priceOptions);
        let dummyCustom = mainData.filter(priceFilterFunction);
        filterContent = filterContent.length>0 ? filterContent.concat(dummyCustom) : dummyCustom;
        setFilterContent(filterContent);
    }
}
const onChangeFloorOptions = (id) => {
    let dummyData = floorOptions;
    if(dummyData.includes(id)){
        let d = id === 0 ? 1 : (id === 1 ? 2 : (id === 2 ? 3 : (id === 3 ? 4 : (id === 4 ? 5 : (id === 5 ? 6 : null )))));
        idd = d;
        let index = dummyData.findIndex((item) => item === id);
        if(index > -1) {
            dummyData.splice(index, 1);
            let dummyCustom = filterContent.filter(floorFilterFunctionDeselect);
            setFilterContent(dummyCustom);
        }
        setFloorOptions(dummyData);
    }
    else{
        floorOptions.push(id);
        setFloorOptions(floorOptions);
        let dummyCustom = mainData.filter(floorFilterFunction);
        setFilterContent(dummyCustom);
    }
}
const PriceOptions = () => {
return(
    <div className="price-options">{
    filterData.prices.map((data, key) => (
            <div>
                <input type="checkbox" autocomplete="off" onChange={ () => onChangePriceOptions(key) } />
                <label>{data}</label>
            </div>
        ))
    }
    </div>
    )        
}

const FloorOptions = () => {
    return(
        <div className="floor-options">{
        filterData.floor.map((data, key) => (
                <div>
                    <input type="checkbox" autocomplete="off" onChange={ () => onChangeFloorOptions(key) } />
                    <label>{data}</label>
                </div>
            ))
        }
        </div>
        )        
    }

    const BedroomOptions = () => {
        return(
            <div className="bedroom-options">{
            filterData.bedroom.map((data, key) => (
                    <div>
                        <input type="checkbox" value={data} name={data} />
                        <label>{data}</label>
                    </div>
                ))
            }
            </div>
            )           
        }

    const GrossOptions = () => {
        return(
            <div className="gross-options">{
            filterData.grossm2.map((data, key) => (
                    <div>
                        <input type="checkbox" value={data} name={data} />
                        <label>{data}</label>
                    </div>
                ))
            }
            </div>
            )        
        }

    const priceFilterFunctionDeselect = (data) => {
        if(idd === 1){
            if(!(data.price>=0 && data.price<=10000000)){
                return true;
            }
        }
        else if(idd === 2){
            if(!(data.price>=10000001 && data.price<=20000000)){
                return true;
            }
        }
        else if(idd === 3){
            if(!(data.price>=20000001 && data.price<=30000000)){
                return true;
            }
        }
        else if(idd === 4){
            if(!(data.price>=30000001 && data.price<=40000000)){
                return data;
            }
        }
        else if(idd === 5){
            if(!(data.price>=40000001 && data.price<=50000000)){
                return data;
            }
        }
    }

    const priceFilterFunction = (data) => {
        if(priceOptions.includes(0)){
            if(data.price>=0 && data.price<=10000000){
                return true;
            }
        }
        else if(priceOptions.includes(1)){
            if(data.price>=10000001 && data.price<=20000000){
                return true;
            }
        }
        else if(priceOptions.includes(2)){
            if(data.price>=20000001 && data.price<=30000000){
                return true;
            }
        }
        else if(priceOptions.includes(3)){
            if(data.price>=30000001 && data.price<=40000000){
                return true;
            }
        }
        else if(priceOptions.includes(4)){
            if(data.price>=40000001 && data.price<=50000000){
                return true;
            }
        }
    }
    const floorFilterFunctionDeselect = (data) => {
        let matches = data.floor.match(/(\d+)/);
        if(matches[0] != (idd)){
            return true;
        }
    } 
    const floorFilterFunction = (data) => {
        if(floorOptions.includes(0)){
            let matches = data.floor.match(/(\d+)/);
            if(matches[0] == 1){
                return data;
            }
        } 
        if(floorOptions.includes(1)){
            let matches = data.floor.match(/(\d+)/);
            if(matches[0] == 2){
                return data;
            }
        } 
        if(floorOptions.includes(2)){
            let matches = data.floor.match(/(\d+)/);
            if(matches[0] == 3){
                return data;
            }
        } 
        if(floorOptions.includes(3)){
            let matches = data.floor.match(/(\d+)/);
            if(matches[0] == 4){
                return data;
            }
        }
        if(floorOptions.includes(4)){
            let matches = data.floor.match(/(\d+)/);
            if(matches[0] == 5){
                return data;
            }
        }  
        if(floorOptions.includes(5)){
            let matches = data.floor.match(/(\d+)/);
            if(matches[0] == 6){
                return data;
            }
        }
    }

    const setApartmentPath = (e, data) => {
        e.preventDefault();
        // eslint-disable-next-line no-restricted-globals
        location.href=`${data.apartment_id}/details`
    }
    const showContent = () => {
        return (
            <div className = "filterContent">
                {
                    filterContent.length > 0 ? 
                    filterContent.map((data,key) => (
                        <div onClick={ (e) => setApartmentPath(e,data) }>
                            <p>Bedroom : {data.bedroom}</p>
                            <p>Floor: {data.floor}</p>
                            <p>Price: {data.price}</p>
                        </div>
                    )) : null
                }
            </div>
        )
    }

    return(
        <div className="buildingWrapper">
            <div className = "top-filter">
                <div className="filter-head">Filter :</div>
                <div className="filter-options">
                    <div className="prices"><div className="filter-option-head-price">Prices</div><div className="filter-option-price">{PriceOptions()}</div></div>
                    <div className="floor"><div className="filter-option-head-floor">Floor</div><div className="filter-option-floor">{FloorOptions()}</div></div>
                </div>
            </div>
            <div className = "content">
                { showContent() }
            </div>
        </div>      
    )
}

export default Building;