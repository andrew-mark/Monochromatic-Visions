import React, { Component } from 'react';
import './svgButton.scss';

const SvgButton = ({
  children,
  passClick,
  disabled = false,
  label = 'button',
  type = 'button',
  classes = '',
}) => {
  const handleClick = () => {
    if (passClick) passClick();
  };

  return (
    <button
      type={type}
      onClick={() => {
        handleClick();
      }}
      className={'svgButton ' + classes}
      aria-label={label}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SvgButton;
