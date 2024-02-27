import React from 'react';

type LoginButtonProps = {
  children: React.ReactNode;
};

const LoginButton: React.FC<LoginButtonProps> = ({ children }) => {
  return (
    <button
      type="submit"
      className="w-full px-4 py-2 text-sm font-medium text-white bg-[#686fed] rounded-md hover:bg-[#5858d6] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-pink-500"
    >
      {children}
    </button>
  );
};

export default LoginButton;