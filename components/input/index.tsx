import React, { InputHTMLAttributes } from 'react';
import cx from 'classnames';
import styles from './input-group.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<Props> = ({ className, ...props }) => {
  return <input className={cx(styles.input, className)} type="text" {...props} />;
};

export default Input;
