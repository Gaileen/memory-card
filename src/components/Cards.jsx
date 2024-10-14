import getDatas from "./Images";
import { useState } from "react";
import { useEffect } from "react";

export default function Cards() {
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

    // function sortImages

    return (
        <div className="cards">
            {images.map((image) => (
                <div className="pkmnCard" key={image.id}>
                    <p>{image.name}</p>
                    <img src={image.img}></img>
                </div>
            ))}
        </div>
    );
}