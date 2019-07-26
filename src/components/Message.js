import React from "react";
import { PropTypes } from "prop-types";

const Message = ({ errorMessage }) => {
  return (
    <div>
      <h3 className="text-center message error">
        {errorMessage === ""
          ? null
          : errorMessage
          ? "Form is complete!"
          : "Form is incomplete"}
      </h3>
    </div>
  );
};

Message.propTypes = {
  errorMessage: PropTypes.string.isRequired
};

export default Message;
