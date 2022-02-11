import React from 'react';
import { UserBalance } from '../../types';
import { shortenString } from '../../utils/string';
import Button from '../button';
import styles from './list-item.module.scss';

interface Props {
  userBalance: UserBalance;
}

const ListItem: React.FC<Props> = ({ userBalance }) => {
  return (
    <div className={styles.listItem}>
      <span onClick={() => navigator.clipboard.writeText(userBalance.user_id)}>
        {shortenString(userBalance.user_id)} <Button className={styles.copyButton}>Copy</Button>
      </span>
      <span> {userBalance.EUR ?? '--'}</span>
      <span> {userBalance.GBP ?? '--'}</span>
      <span> {userBalance.USD ?? '--'}</span>
      <span>{userBalance.lastActivity.split('T')[0]}</span>
    </div>
  );
};

export default ListItem;
