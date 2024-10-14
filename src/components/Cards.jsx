import getDatas from "./Images";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Cards({ highScore, setHighScore, 
                                clicked, setClicked }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // console.log("Using Effect");
        let ignore = false;
        getDatas().then(json => {
            if (!ignore){
                setImages(json);
            }
        });
        return () => {
            ignore = true; // Ignore stale responses.
        };
    }, []); // Fetch data once on init render.

    function shuffleImages(newArr) {
        // const newArr = [...images];
        for (let i = newArr.length - 1; i > 0; i--) {
            // Generate rdm index from 0-1.
            const rdm = Math.floor(Math.random() * (i + 1));
            // Swap elms at the 2 indices.
            [newArr[i], newArr[rdm]] = [newArr[rdm], newArr[i]];
        }
        setImages(newArr);
    }
    
    function handleClick(image) {
        const newArr = [...images];

        // If img has alr been clicked, reset game.
        if (image.clicked) {
            // Check if curr score > high score.
            // If so, set new high score.
            if (clicked.length > highScore) {
                setHighScore(clicked.length);
            }
            // Set clicked prop = false for all imgs.
            newArr.map((img) => {
                img.clicked = false;
            });
            setClicked([]); // Reset clicked.

        } else {
            // If img hasn't been clicked.
            image.clicked = true;
            setClicked((prevClicked) => [...prevClicked, image]);
        }
        shuffleImages(newArr);
    }

    return (
        <div className="cards">
            {images.map((image) => (
                <div className="pkmnCard" key={image.id} onClick={() => handleClick(image)}>
                    <p>{image.name}</p>
                    <img src={image.img}></img>
                </div>
            ))}
        </div>
    );
}

Cards.propTypes = {
    highScore: PropTypes.number.isRequired,
    clicked: PropTypes.array.isRequired,
    setHighScore: PropTypes.func.isRequired,
    setClicked: PropTypes.func.isRequired,
};