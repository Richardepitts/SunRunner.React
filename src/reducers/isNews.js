const isNews = (state = false, action) => {
    switch (action.type) {
        case 'MOUSED_OVER':
            return state = true;
        case 'MOUSED_OFF':
            return state = false;
        default: 
            return state = false;
    }
};

export default isNews;