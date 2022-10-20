import { useEffect } from "react";
import { useState, useMemo } from "react";
import "./SavedWords.scss";

import {
  getPinyinOfChar,
  getDefinitionOfChar,
} from "../Translate/TranslateUtils";

import { getSavedWords } from "./SavedWordsUtils";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import { useTable, usePagination } from "react-table";
import { useExpanded } from "react-table";

const SavedWords = ({ savedWords, setSavedWords }) => {
  useEffect(() => {
    const getSavedWordsFromStorage = async () => {
      const words = await getSavedWords();
      setSavedWords(words);
    };

    getSavedWordsFromStorage();
  }, []);

  const onHover = (character) => {
    // TODO: Make full list of special characters
    if (character === " " || character === "，" || character === "。") {
      return "Punctuation";
    }

    let pinyin = getPinyinOfChar(character);
    let defintion = getDefinitionOfChar(character);
    const tooltipText = `${character} - ${pinyin} - ${defintion}`;
    return tooltipText;
  };

  const columns = useMemo(
    () => [
      {
        Header: "English",
        accessor: "english",
      },
      {
        Header: "Pinyin",
        accessor: ({ pinyin, hanzi }) => {
          const characters = hanzi.split("");
          return (
            <div className="hanzi-container">
              {characters.map((character, index) => {
                return (
                  <span key={index}>
                    <Tippy content={onHover(character)} placement="bottom">
                      <span>{pinyin.split(" ")[index]} </span>
                    </Tippy>
                  </span>
                );
              })}
            </div>
          );
        },
      },
      {
        Header: "Hanzi",
        accessor: ({ hanzi }) => {
          const characters = hanzi.split("");
          return (
            <div className="hanzi-container">
              {characters.map((character, index) => {
                return (
                  <span key={index}>
                    <Tippy content={onHover(character)} placement="bottom">
                      <span>{character}</span>
                    </Tippy>
                  </span>
                );
              })}
            </div>
          );
        },
      },
      {
        Header: "Date",
        accessor: (row) => {
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
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, expanded },
  } = useTable(
    {
      columns,
      data: savedWords,
      initialState: { pageIndex: 0 },
    },
    useExpanded,
    usePagination
  );

  return (
    <div className="saved-words">
      {/* Table */}
      <table
        {...getTableProps()}
        style={{
          width: "100%",
        }}
      >
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
