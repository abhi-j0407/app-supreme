"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong.</h2>
      {/* Try to rerender */}
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
};