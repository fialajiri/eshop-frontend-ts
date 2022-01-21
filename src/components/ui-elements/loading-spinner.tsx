import React from "react";

export interface ILoadingSpinnerProps {
  asOverlay?: boolean;
}

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = (props) => {
  return (
    <div className={`${props.asOverlay && "loading-spinner__as-overlay"}`}>
      <div className="loading-spinner__dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
