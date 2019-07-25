import React from "react";

const Message = ({ errorMessage }) => {
  return (
    <div>
      <h3 className="text-center message error" >
        {errorMessage ? "Form is complete!" : "Form is incomplete" }
      </h3>
    </div>
  );
};

export default Message;
