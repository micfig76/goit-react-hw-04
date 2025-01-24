import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import ImageCard from "../ImageCard/ImageCard";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import "./ImageGallery.module.css";

const UNSPLASH_ACCESS_KEY = "UNSPLASH_API_KEY";

const ImageGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    const fetchImages = async () => {
      if (!searchTerm) return;
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: { query: searchTerm },
            headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
          }
        );
        setImages(response.data.results);
      } catch (error) {
        setError("Error fetching images");
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [searchTerm]);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading && <Loader />} {error && <ErrorMessage message={error} />}
      <ul className="image-list">
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onClick={handleImageClick} />
          </li>
        ))}
      </ul>
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={handleCloseModal} />
      )}
      <LoadMoreBtn onLoadMore={() => {}} />
    </div>
  );
};
export default ImageGallery;
