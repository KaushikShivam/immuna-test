import Image from "next/image";
import React from "react";
import PaginationButton from "../PaginationButton/PaginationButton";

interface PaginationFooterProps {
  defaultItems: 12 | 24 | 50 | 100;
  total: number;
}

const PaginationFooter: React.FC<PaginationFooterProps> = ({
  defaultItems,
  total,
}) => {
  return (
    <div className="paginationFooter">
      <div className="paginationFooter__left">
        Show
        <select id="cars">
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        results of {total} entries
      </div>

      <div className="paginationFooter__right">
        <PaginationButton width="large">
          <Image
            src="/icons/left-caret.svg"
            width={6}
            height={10}
            alt="Left pagination icon"
          />
        </PaginationButton>

        <PaginationButton selected width="small">
          1
        </PaginationButton>

        <PaginationButton width="small">2</PaginationButton>

        <PaginationButton width="small">3</PaginationButton>

        <PaginationButton width="small">...</PaginationButton>

        <PaginationButton width="small">50</PaginationButton>

        <PaginationButton width="large">
          <Image
            src="/icons/right-caret.svg"
            width={6}
            height={10}
            alt="Right pagination icon"
          />
        </PaginationButton>
      </div>
    </div>
  );
};

export default PaginationFooter;
