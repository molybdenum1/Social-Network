import { connect } from 'react-redux';
import { followAC, setUserAC, unfollowAC, setCurrentPageAC, setTotalCountAC } from '../../redux/friendsReducer';
import FriendsC from './FriendsC';

let mapStateToProps = (state) => {
    return{
        friends: state.friendsData.friends,
        pageSize: state.friendsData.pageSize,
        totalUserCount: state.friendsData.totalUserCount,
        currentPage: state.friendsData.currentPage,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));;
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users)); 
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalCountAC(count));
        }
    }
}

const friendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsC);
export default friendsContainer;