import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div
      className="flex items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/aligno.png')" }}
    >
      <div className="flex items-center justify-center w-full max-w-md p-6">
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-md w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
