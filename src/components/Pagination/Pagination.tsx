import React, { useEffect } from "react";
import styled from "styled-components";

export interface PaginationInterface {
  nPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  indexOfFirstRecord: number;
}
const Pagination: React.FC<PaginationInterface> = ({
  nPages,
  currentPage,
  setCurrentPage,
  indexOfFirstRecord,
}) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [nPages]);

  return (
    <NavPaginationStyled aria-label="pagination">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={prevPage} href="#">
            Previous
          </a>
        </li>

        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage == pgNumber ? "active" : ""} `}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              aria-hidden="true"
              className="page-link"
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a className="page-link" onClick={nextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </NavPaginationStyled>
  );
};

export default Pagination;

const NavPaginationStyled = styled.nav`
  margin-top: 2rem;
  justify-content: center;
  overflow: hidden;

  .pagination {
    list-style-type: none;
    display: flex;
    padding: 0;
    column-gap: 5px;
    margin-left: 31%;
    &.active {
      color: red;
      font-weight: bold;
    }
    .page-link {
      border: 1px solid white;
      color: black;
      text-decoration: none;
      padding: 5px 10px;
      border-radius: 10px;
    }
  }
  .page-item {
    &.active {
      .page-link {
        background-color: orange;
        font-weight: bold;
        color: black;
      }
    }
  }
`;
