import React from "react";

function Wave1() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ WebkitTransition: "0.3s", transition: "0.3s" }}
      version="1.1"
      viewBox="0 0 1440 100"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop offset="00%" stopColor="rgba(255, 194, 61, 1)"></stop>
          <stop offset="100%" stopColor="rgba(255, 194, 61, 1)"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient-0)"
        d="M0 70l10-10c10-10 30-30 50-31.7C80 27 100 43 120 41.7c20-1.7 40-21.7 60-28.4 20-6.3 40-.3 60 3.4 20 3.3 40 3.3 60 8.3 20 5 40 15 60 15s40-10 60-3.3c20 6.3 40 30.3 60 36.6C500 80 520 70 540 60s40-20 60-21.7c20-1.3 40 4.7 60 3.4C680 40 700 30 720 25s40-5 60-5 40 0 60-1.7c20-1.3 40-5.3 60 1.7s40 23 60 30 40 3 60 5 40 8 60 15 40 13 60 13.3c20-.3 40-6.3 60-18.3s40-28 60-38.3c20-9.7 40-13.7 60-13.4 20-.3 40 3.7 60 8.4 20 5.3 40 11.3 50 15l10 3.3v60H0z"
      ></path>
    </svg>
  );
}

export default Wave1;
