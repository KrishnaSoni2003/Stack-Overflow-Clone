const postsReducer = (post = {data: null}, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...post, action.payload];
    
        default:
            return post;
    }
} 

export default postsReducer;