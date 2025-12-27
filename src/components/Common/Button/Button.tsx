import React from 'react';
import classes from './button.module.css'; // Import the external CSS file

interface ButtonProps {
  backgroundColor: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ backgroundColor, children }) => {
  return (
    <button className={classes.customButton} style={{ backgroundColor }}>
      {children}
    </button>
  );
};

export default Button;
