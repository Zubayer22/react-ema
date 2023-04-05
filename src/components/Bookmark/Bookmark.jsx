import React, { useState, useEffect } from "react";
import './Bookmark.css'


function Bookmark({ productId }) {
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        // Check local storage for bookmark state
        const storedIsBookmarked = localStorage.getItem(`product-${productId}-isBookmarked`);
        if (storedIsBookmarked !== null) {
          setIsBookmarked(JSON.parse(storedIsBookmarked));
        }
      }, [productId]);

    function toggleBookmark() {
        if (isBookmarked) {
            setIsBookmarked(false);
            localStorage.setItem(`product-${productId}-isBookmarked`, JSON.stringify(false));
        } else {
            setIsBookmarked(true);
            localStorage.setItem(`product-${productId}-isBookmarked`, JSON.stringify(true));
        }
    }

    return (
        <div className="bookmark-sec" onClick={toggleBookmark}>
            {isBookmarked ? (
                <i className="fa-solid fa-bookmark"></i>
            ) : (
                <i className="fa-regular fa-bookmark"></i>
            )}
        </div>
    );
}

export default Bookmark;
