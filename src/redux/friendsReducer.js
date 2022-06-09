const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_PAGE = 'SET_USERS_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initailState = {
    friends : [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
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
            friends:  action.friends
        }
    }else if(action.type === SET_USERS_PAGE){
        return {
            ...state, currentPage: action.currentPage
        }
    }
    else if(action.type === SET_TOTAL_USER_COUNT){
        return {
            ...state, totalUserCount: action.count
        }
    } 
    else if(action.type === TOGGLE_IS_FETCHING){
        return {
            ...state, isFetching: action.isFetching
        }
    } 
    else {
        return state;
    }
    
}

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUserAC  = (friends) => ({type: SET_USERS, friends});
export const setCurrentPageAC  = (currentPage) => ({type: SET_USERS_PAGE, currentPage});
export const setTotalCountAC  = (count) => ({type: SET_TOTAL_USER_COUNT, count});
export const setSetIsFetchingAC  = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default friendsReducer;
