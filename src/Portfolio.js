import React from "react";
import Gallery from 'react-grid-gallery';


export default function Portfolio() {
    const IMAGES = [{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },

        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        }]

    return (
        <div>
            <div className='App'>
                <h1>Gallery</h1>
                <p>Eat My Shiny Metal Ass</p>
            </div>
            <div style={{
                // display: 'flex', // This is causing pictures to disappear
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <Gallery images={IMAGES} enableImageSelection={false} margin={0}/>
            </div>
        </div>

    );
};