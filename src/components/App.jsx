import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from "./FriendsList/FriendsList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';



export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        fontSize: 16,
        color: '#010101'
      }}
    > 
      React homework template
      <Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>

      <Statistics stats={data} title="Upload data"/>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

    </div>
  );
};
