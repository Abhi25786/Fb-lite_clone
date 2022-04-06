import React from 'react';
const initialState = false;
const Continue = (state = initialState, action) => {
    switch (action.type) {
        case 'login': return state = true;
        case 'logout': return state = false;
        default: return state;
    }

}
export default Continue