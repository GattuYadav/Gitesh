import data from '../../mockData/test_units_data.json'

const initialState = data;

export const apartmentReducer = (state = initialState, action) => {
    switch( action.type ){
        case "GETDATA" : 
            return data.filter((content) => content.apartment_id === action.payload)       
        default: 
            return state;
    }
}  