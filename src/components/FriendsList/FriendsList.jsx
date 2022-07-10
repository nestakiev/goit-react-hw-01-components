import PropTypes from 'prop-types';
import { Container, Friend, Status, Avatar, Name } from './FriendsList.styled';

export const FriendList = ({friends}) => {
    return (
        <Container>
            {friends.map(friend => {
                return <Friend key={friend.id}>
                    <Status online={friend.isOnline}></Status>
                    <Avatar src={friend.avatar} width="48" alt="User avatar"/>
                    <Name>{friend.name}</Name>
                </Friend>
            })
            }
        </Container>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }))
}