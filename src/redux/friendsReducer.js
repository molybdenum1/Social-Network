const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initailState = {
    friends : [
        {id: 1, followed: true, fullName: 'Denis', status: 'Losing my religion', location: {city: 'gde-to', country: 'no in ukr '}},
        {id: 2, followed: true, fullName: 'Jayson T', status: 'Let it be', location: {city: 'Boston', country: 'USA'}},
        {id: 3, followed: false, fullName: 'Jimmy B', status: 'All my friends are heathens, take it slow', location: {city: 'Miami', country: 'USA'}},
        {id: 4, followed: true, fullName: 'James L', status: 'Another brich in the wall', location: {city: 'Los-Angeles', country: 'USA'}},
        {id: 5, followed: false, fullName: 'Ja M', status: 'Sunday morning is everyday, for all I care', location: {city: 'Mephis', country: 'USA'}},
        {id: 6, followed: true, fullName: 'Kevin D', status: "I've risen from the bottom", location: {city: 'New-York', country: 'USA'}},
        {id: 7, followed: false, fullName: 'Mitchel D', status: 'dust in the wind', location: {city: 'Utah', country: 'USA'}},
        {id: 8, followed: true, fullName: 'Tray Y', status: 'Heart made of glass, my mind of stone', location: {city: 'Atlanta', country: 'USA'}},
        {id: 9, followed: false, fullName: 'Demar D', status: 'So, Annie, are you okay?', location: {city: 'Chicago', country: ''}},
    ]
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
            friends: [...state.friends, action.friends]
        }
    } else {
        return state;
    }
    
}

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUserAC  = (friends) => ({type: SET_USERS, friends});

export default friendsReducer;
