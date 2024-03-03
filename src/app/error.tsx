'use client';
import React from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const ErrorBoundary = ({ error, reset }: ErrorProps) => {
  return (
    <section>
      error - {error.message}
      <button onClick={reset}> Reset</button>
    </section>
  );
};

export default ErrorBoundary;
