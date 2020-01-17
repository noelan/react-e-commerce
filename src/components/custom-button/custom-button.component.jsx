import React from "react";

import "./custom-button.styles.scss";

const Custombutton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={
        "custom-button " +
        (isGoogleSignIn && "google-sign-in ") +
        (inverted && "inverted")
      }
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Custombutton;
