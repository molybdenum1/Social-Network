import { connect } from 'react-redux';
import { followAC, setUserAC, unfollowAC } from '../../redux/friendsReducer';
import Friends from './Friends';

let mapStateToProps = (state) => {
    return{
        friends: state.friendsData.friends
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));;
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));;
        },
        setUsers: (users) => {
            dispatch(setUserAC(users)); 
        }
    }
}

const friendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default friendsContainer;