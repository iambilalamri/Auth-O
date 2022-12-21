import React, { useState } from "react";
import "./PasswordInput.scss";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const PasswordInput = ({ placeholder, name, value, onChange, onPaste }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password">
      <input
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onPaste={onPaste}
        required
      />
      <div className="icon" onClick={togglePassword}>
        {showPassword ? (
          <AiOutlineEyeInvisible size={20} />
        ) : (
          <AiOutlineEye size={20} />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
