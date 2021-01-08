const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";


let initialState = {
  users: [
    { id: 1, followed: true, fullName: "Romko", status: "Me is a boss", location: {city: 'Minsk', country: 'Belarus '}  },
    { id: 2, followed: true, fullName: "Olko", status: "Me is a boss", location: {city: 'Minsk', country: 'Belarus '}  },
    { id: 3, followed: false, fullName: "Dimon", status: "Right there", location: {city: 'Minsk', country: 'Belarus '}  },
  ]
};

const usersReducer = (state = initialState , action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
         users: state.users.map( u => {
           if (u.id === action.userId) {
             return {...u, followed: true}
           }
           return u;
         })
        }


    case UNFOLLOW:
      return {
        ...state,
         users: state.users.map( u => {
           if (u.id === action.userId) {
             return {...u, followed: false}
           }
           return u;
         })
        }



    default:
      return state;

  }
};


export const followActionCreator = (userId) => {
    return { type: FOLLOW, userId};
  };
  
  export const unfollowActionCreator = (userId) => {
    return { type: UNFOLLOW, userId };
  };

export default usersReducer;
