const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_PAGE = 'SET_USERS_PAGE';

let initailState = {
    friends : [],
    pageSize: 10,
    totalUserCount: 84,
    currentPage: 4
}

const friendsReducer = (state = initailState, action) => {
    if(action.type === FOLLOW){
        let stateCopy = {
            ...state,
            friends: state.friends.map(user => {
                 if(user.id === action.userID){
                    return {...user, followed: true}
                 }
                 return user 
                })
            };
        

        return stateCopy;
    }else if(action.type === UNFOLLOW){
        let stateCopy = {
            ...state,
            friends: state.friends.map(user => {
                 if(user.id === action.userID){
                    return {...user, followed: false}
                 }
                 return user 
                })
            };

        return stateCopy;
    } else if (action.type === SET_USERS){
        return {
            ...state,
            friends: [ action.friends]
        }
    }else if(action.type === SET_USERS_PAGE){
        return {
            ...state, currentPage: action.currentPage
        }
    } 
    else {
        return state;
    }
    
}

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUserAC  = (friends) => ({type: SET_USERS, friends});

export default friendsReducer;
