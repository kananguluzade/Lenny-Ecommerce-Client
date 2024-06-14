import React from "react";
import "src/components/Button/Button.scss";

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.variant === "fill" ? "#1E4C2F" : "transparent",
    border: props.variant === "outline" ? "1px solid #1E4C2F" : "none",
    color: props.variant === "fill" ? "white" : "#1E4C2F",
    borderRadius: props.size === "sm" ? "8px" : "8px",
    width:
      props.size === "xxs"
        ? "112px"
        : props.size === "xs"
          ? "120px"
          : props.size === "sm"
            ? "122px"
            : props.size === "lg"
              ? "260px"
              : props.size === "xl"
                ? "100%"
                : "200px",
    height:
      props.size === "xxs" ? "38px" : "sm" ? "46px" : "lg" ? "53px" : "53px",
    fontSize: props.size === "lg" || "xxs" ? "16px" : "sm" ? "18px" : "18px",
    fontWeight: props.size === "sm" ? "600" : "600",
    transition: "background-color 0.4s, color 0.4s, border 0.4s",
  };

  return (
    <>
      <button
        style={buttonStyle}
        onClick={props.action ? props.action : null}
        className={props.className}
        type={props.type}
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;
