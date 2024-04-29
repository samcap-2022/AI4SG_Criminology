import React from "react";

/* STATELESS CHILD COMPONENT */
const PhotoChild = ({ onClickAI, onClickHuman }) => {
  return (
    <div>
      <hr />
      <form>
        <button type="submit" onChange={onClickAI}>
          AI
        </button>
        <button type="submit" onChange={onClickHuman}>
          Human
        </button>
      </form>
    </div>
  );
};

export default PhotoChild;
