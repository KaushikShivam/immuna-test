import React from "react";

interface PaginationButtonProps {
  width: "small" | "large";
  children: React.ReactNode;
  selected?: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  width,
  children,
  selected,
}) => {
  return (
    <button
      className={`paginationButton ${
        selected && "paginationButton--selected"
      } ${width === "large" && "paginationButton--large"}`}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
