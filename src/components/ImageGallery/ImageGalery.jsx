import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "../ImageCard/ImageCard";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import "./ImageGallery.module.css";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const ImageGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      if (!searchTerm) return;
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: { query: searchTerm, page, per_page: 12 },
            headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
          }
        );

        const { results, total_pages } = response.data;

        setImages((prevImages) =>
          page === 1 ? results : [...prevImages, ...results]
        );
        setTotalPages(total_pages);
      } catch (err) {
        setError("Failed to fetch images. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm, page]);

  const handleSearchSubmit = (term) => {
    if (term !== searchTerm) {
      setSearchTerm(term);
      setPage(1);
      setImages([]);
    }
  };

  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />

      {images.length > 0 && (
        <ul className={styles["image-grid"]}>
          {images.map((image) => (
            <li key={image.id}>
              <ImageCard image={image} />
            </li>
          ))}
        </ul>
      )}

      {loading && <Loader />}

      {!loading && images.length > 0 && page < totalPages && (
        <button
          className={styles["load-more-btn"]}
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load More
        </button>
      )}
    </>
  );
};

export default ImageGallery;
