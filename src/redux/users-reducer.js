const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl: "https://tinyurl.com/y44qb46d",
    //   followed: true,
    //   fullName: "Romko",
    //   status: "Me is a boss",
    //   location: { city: "Minsk", country: "Belarus " },
    // },
    // {
    //   id: 2,
    //   photoUrl: "https://tinyurl.com/y44qb46d",
    //   followed: true,
    //   fullName: "Olko",
    //   status: "Me is a boss",
    //   location: { city: "Minsk", country: "Belarus " },
    // },
    // {
    //   id: 3,
    //   photoUrl: "https://tinyurl.com/y44qb46d",
    //   followed: false,
    //   fullName: "Dimon",
    //   status: "Right there",
    //   location: { city: "Minsk", country: "Belarus " },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map( (u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };


      case SET_USERS: {
        return {...state, users: [...state.users, ...action.users]}
      }

    default:
      return state;
  }
};

export const followActionCreator = (userId) => {
  return { type: FOLLOW, userId };
};

export const unfollowActionCreator = (userId) => {
  return { type: UNFOLLOW, userId };
};

export const setUsersActionCreator = (users) => {
  return { type: SET_USERS, users };
};


export default usersReducer;
