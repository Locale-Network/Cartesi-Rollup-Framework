import React from 'react';

const CircularProgress = ({ completed, total }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const progress = ((total - completed) / total) * circumference;

  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="lightgrey"
        strokeWidth="5"
        fill="none"
      />
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="black"
        strokeWidth="5"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={progress}
        transform="rotate(-90 25 25)"
        style={{
          transition: 'stroke-dashoffset 0.5s ease-in-out',
        }}
      />
      <text x="25" y="28" textAnchor="middle" fontSize="10px">
        {completed}/{total}
      </text>
    </svg>
  );
};

export default CircularProgress;
