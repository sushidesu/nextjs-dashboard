'use client';

import { notFound } from 'next/navigation';

export const Hoge = () => {
  return (
    <div>
      <p>not found!</p>
      <button
        onClick={() => {
          console.log('RUN');
          notFound();
          console.log('RUN2');
        }}
      >
        RUN
      </button>
    </div>
  );
};
