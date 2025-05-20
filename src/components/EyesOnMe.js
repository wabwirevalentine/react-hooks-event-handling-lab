import React from "react";

function EyesOnMe() {
  const handleFocus = () => {
    console.log("Good!");
  };
  const handleBlur = () => {
    console.log("Hey! Eyes on me!");
  };

  return (
    <div>
      <button onBlur={handleBlur} onFocus={handleFocus}>
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
