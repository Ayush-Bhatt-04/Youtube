import React from "react";

import { FaSearch } from "react-icons/fa";

import "./searchList.css";
function SearchList({ titleList, setSearchQuery }) {
  return (
    <>
      {titleList && (
        <div className="container_SearchList2">
          {titleList.map((m) => {
            return (
              <p
                key={m}
                className="titleItem"
                onClick={(e) => setSearchQuery(m)}
              >
                <FaSearch /> {m}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
}

export default SearchList;
