const initState = [
    {id: 1, content: "Nguyễn Thiên Phúc", link:"http://localhost:3000/", 
    permission: 'Everyone', tagFriends: ['Khoa']},
    {id: 2, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
    permission: 'Everyone', tagFriends: ['Tín']},
    {id: 3, content: "Thiên Phúc Nguyễn ", link:"http://localhost:3000/", 
    permission: 'Everyone', tagFriends: ['Trung']},
];

const listPostReducer = (state = initState, action) => {
    switch(action.type) {
        case 'listPost/addPost':        
            return {
                ...state, 
                listPost: [
                    ...state.listPost, 
                    action.payload          
                ]
            }
        default:
            return state;
    }
}

export default listPostReducer;