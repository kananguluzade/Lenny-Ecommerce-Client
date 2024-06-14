import React from "react";
import './Form.scss';

const Form = (props) => {
  return (
    <div className="input-form-container">
      <label className="input-heading">{props.label}</label>
      <input
        className="form-input"
        type={props.type}
        placeholder={props.holder}
        name={props.name}
        value={props.value}
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        ref={props.ref}
      />
    </div>
  );
};

export default Form;
