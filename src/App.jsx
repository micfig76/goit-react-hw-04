import React, { useState } from "react";
import ImageGallery from "../src/components/ImageGallery/ImageGalery";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Toaster position="top-right" />

      <ImageGallery searchTerm={searchTerm} />
    </div>
  );
};

export default App;
