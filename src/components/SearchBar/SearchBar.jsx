import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(searchTerm);
    setSearchTerm("");
  };

  return (
    <header className={styles["search-bar-container"]}>
      <form className={styles["search-form"]} onSubmit={handleSubmit}>
        <button type="submit" className={styles["search-button"]}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          className={styles["search-input"]}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </header>
  );
};

export default SearchBar;
