import React from 'react';
import { UserBalance } from '../../types';
import ListItem from '../list-item';
import styles from './transactions.module.scss';

interface Props {
  userBalances: Record<string, UserBalance>;
}

const Transactions: React.FC<Props> = ({ userBalances }) => {
  return (
    <div className={styles.transactions}>
      <div className={styles.transactions__head}>
        <span>Userid</span>
        <span>GBP</span>
        <span>EUR</span>
        <span>USD</span>
        <span>Last Activity</span>
      </div>
      <div className={styles.transactions__body}>
        {Object.values(userBalances).map((user, idx) => (
          <ListItem userBalance={user} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
