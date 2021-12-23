import React, {useEffect} from "react";
import Gallery from 'react-grid-gallery';
import {useState} from "react";
import './Portfolio.css'


export default function Portfolio() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5003/api/gallery-photos') //TODO: Change this to the actual api route when productionized
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setImages(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <div className='App'>
                </div>
                <div className="title"><p>Digital Portfolio</p></div>
                <div className="gallery">
                    <Gallery images={images} enableImageSelection={false} margin={25} rowHeight={375}/>
                </div>
            </div>

        );
    }
};