import { useState } from "react";
import { previewData } from "../Data/previewData";
import styles from "./PreviewProduct.module.css";

const PreviewProduct = () => {
  const [previewSrc, setPreviewSrc] = useState(
    require("../images/preview1.jpg")
  );

  function handleHoverImage(e) {
    if (previewSrc === e.target.src) return;
    setPreviewSrc(e.target.src);
  }

  return (
    <div className="container">
      <div className={styles.previewContainer}>
        <div className={styles.images}>
          {previewData.map(({ img, id }) => (
            <img
              src={img}
              alt="small preview"
              key={id}
              onMouseEnter={(e) => handleHoverImage(e)}
            />
          ))}
        </div>

        <div className={styles.preview}>
          <img src={previewSrc} alt="preview" />
        </div>
      </div>
    </div>
  );
};

export default PreviewProduct;
