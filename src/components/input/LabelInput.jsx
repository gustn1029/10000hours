import React from "react";

export default function LabelInput({
  label,
  id,
  inputValue,
  inputOnChange,
  type = "text",
  placeholder,
}) {
  return (
    <>
      <label htmlFor={id} className="hidden">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={inputValue}
        onChange={inputOnChange}
      />
    </>
  );
}
