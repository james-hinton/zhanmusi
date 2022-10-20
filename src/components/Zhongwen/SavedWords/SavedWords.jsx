import { useEffect } from "react";
import { useState, useMemo } from "react";
import "./SavedWords.scss";

import {
  getPinyinOfChar,
  getDefinitionOfChar,
} from "../Translate/TranslateUtils";

import { getSavedWords } from "./SavedWordsUtils";

import WordRow from "./components/WordRow";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import { useTable, usePagination } from "react-table";

const SavedWords = ({ savedWords, setSavedWords }) => {
  useEffect(() => {
    const getSavedWordsFromStorage = async () => {
      const words = await getSavedWords();
      setSavedWords(words);
    };

    getSavedWordsFromStorage();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "English",
        accessor: "english",
      },
      {
        Header: "Pinyin",
        accessor: "pinyin",
      },
      {
        Header: "Hanzi",
        accessor: ({ hanzi }) => {
          const output = [];
          hanzi.split("").map(async (character) => {
            let pinyin = await getPinyinOfChar(character);
            let defintion = await getDefinitionOfChar(character);

            // Set the hover text within the saved words table
            const hoverText = `${character} - ${pinyin} - ${defintion}`;

            output.push(
              <Tippy content={hoverText}>
                <span className="saved-words__character">{character}</span>
              </Tippy>
            );
          });

          return "yo";
        },
      },
      {
        Header: "Date",
        accessor: (row) => {
          // Convert to YY-MM-DD
          const date = new Date(row.date).toLocaleDateString();
          console.log(date);
          return new Date(row.date).toLocaleDateString();
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: savedWords,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <div className="saved-words">
      {/* Table */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      {/* <div className="saved-words-table">
        <div className="saved-words-header">
          {activeColumns.map((column) => (
            <th key={column}>
              {column.charAt(0).toUpperCase() + column.slice(1)}
            </th>
          ))}
        </div>
        <div className="saved-words-body">
          {savedWords &&
            savedWords.length > 0 &&
            savedWords.map((word, index) => {
              return (
                <WordRow
                  key={index}
                  word={word}
                  activeColumns={activeColumns}
                />
              );
            })}
        </div>
      </div> */}
    </div>
  );
};

export default SavedWords;
