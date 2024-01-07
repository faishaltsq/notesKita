/* eslint-disable no-unused-vars */
import React from "react";
import SearchBar from "./HeaderSearch";

// eslint-disable-next-line react/prop-types
const Header = ({ onSearch }) => {
    return (
        <div className="note-app__header">
            <h1>Notes Kita</h1>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Header;