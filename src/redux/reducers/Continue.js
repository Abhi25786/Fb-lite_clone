import React from 'react';
const initialState = false;
const Continue = (state = initialState, action) => {
    switch (action.type) {
        case 'login': return state = true;
        default: return state;
    }

}
export default Continue