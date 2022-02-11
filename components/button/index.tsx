import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';
import cx from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button className={cx(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
