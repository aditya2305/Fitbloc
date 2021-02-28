import React from "react";
import "./Button.css";

const STYLES = ["btn-primary", "btn--outline"];

const SIZES = ["btn-medium", "btn--large", "btn--mobile", "btn--wide"];

const COLOR = ["primary", "blue", "red", "green"];

const FONT = ["metropolis"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  buttonfont,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  const checkButtonFont = FONT.includes(buttonfont) ? buttonfont : FONT[0];
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor} ${checkButtonFont}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
