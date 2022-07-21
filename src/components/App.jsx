import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from "./FriendsList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from '../base-data/user.json';
import data from '../base-data/data.json';
import friends from '../base-data/friends.json';
import transactions from '../base-data/transactions.json';



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
