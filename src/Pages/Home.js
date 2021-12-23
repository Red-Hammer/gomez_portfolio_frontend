import React, {useEffect} from "react";
import Gallery from 'react-grid-gallery';
import {useState} from "react";
import "./Home.css"


export default function Homepage() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5003/api/home-photos') //TODO: Change this to the actual api route when productionized
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
                   <span style={{fontFamily: "Bookman"}}> <h1>Gomez Adams</h1>
                    <p>Welcome to my site!</p>
                       </span>
                </div>
                <div style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '100px',
                    marginLeft: '100px'
                }}
                >
                    <Gallery images={images} enableImageSelection={false} margin={10} rowHeight={450} maxRows={1}/>
                </div>
                {/*<div className="home-footer" id="footer">Contact Me</div>*/}
            </div>

        );
    }
};