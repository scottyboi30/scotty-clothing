import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, extraClasses = '', ...otherProps }) => (
  <button className={`${extraClasses} custom-button`} {...otherProps}>
    {children}
  </button >
);

export default CustomButton;
