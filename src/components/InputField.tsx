import React, { useState, ChangeEvent } from 'react';

type InputFieldProps = {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const InputField: React.FC<InputFieldProps> = ({ type, value, onChange, placeholder }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="mb-4 relative">
      <input
        type={isPasswordVisible ? 'text' : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 text-sm rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        >
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isPasswordVisible ? (
              <>
              {/* icon when the password is visible */}
                <path
                  d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d="M2.45898 12C3.73218 7.94365 7.36569 5 11.9993 5C16.6329 5 20.2664 7.94365 21.5396 12C20.2664 16.0563 16.6329 19 11.9993 19C7.36569 19 3.73218 16.0563 2.45898 12Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </>
            ) : (
              <>
                {/* icon when the password is hidden */}
                <path
                  d="M19.5 12C19.5 12 16.5 7 12 7C7.49998 7 4.49998 12 4.49998 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d="M12 17C15.3137 17 18 14.3137 18 11H6C6 14.3137 8.68629 17 12 17Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </>
            )}
          </svg>
        </button>
      )}
    </div>
  );
};

export default InputField;