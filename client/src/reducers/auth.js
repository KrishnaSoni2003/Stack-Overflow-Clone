const authReducer = (state= {data: null}, action) => {
    switch (action.type) {
        case 'AUTH':
            // console.log(action.data)
            localStorage.setItem('Profile', JSON.stringify({...action?.data}))
            return {...state, data: action?.data}
        case 'LOGOUT':
            localStorage.clear();
            return { ...state, data: null};
    
        default:
            return state;
    }
}

export default authReducer

// there types of data storage where browser can store data inside the browser.
// we can store data in cookie, in session or in local storage

// action?.data is a conditional statement. If data exists than show the data.
// action.data would led to an error if data did not exists.