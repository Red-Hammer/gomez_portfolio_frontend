import React, {useState} from "react";
// Need to reset file state
export default function Admin() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [isFileHomepage, setIsFileHomepage] = useState(false);


    const fileChangeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const homeChangeHandler = () => {
        setIsFileHomepage(!isFileHomepage);
    }

    const handleSubmission = () => {
        const formData = new FormData();

        formData.append('File', selectedFile);
        formData.append('isHomepage', JSON.stringify(isFileHomepage))
        console.log(formData)

        fetch(
            'http://127.0.0.1:5003/api/uploadImage',
            {
                method: 'POST',
                body: formData,
                // isHomepage: JSON.stringify(isFileHomepage)
            }
        )
            .then((res) => res.json())
            .then((result) => {
                console.log('Success', result);
                setIsFilePicked(false);
                setSelectedFile(null);
                setIsFileHomepage(false);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <div>

            <div>
                <input type="file" name="file" onChange={fileChangeHandler}/>
                {isFilePicked ? (
                    <div>
                        <p>Filename: {selectedFile.name}</p>
                        <p>Filetype: {selectedFile.type}</p>
                        <p>Size in bytes: {selectedFile.size}</p>
                        <p>
                            lastModifiedDate:{' '}
                            {selectedFile.lastModifiedDate.toLocaleDateString()}
                        </p>
                    </div>
                ) : (
                    <p>Select a file to show details</p>
                )}
                <div>
                    Put image on homepage?
                    <input type="checkbox" name="homepage" checked={isFileHomepage} onChange={homeChangeHandler}/>
                </div>
                <div>
                    <button onClick={handleSubmission}>Submit</button>
                </div>
            </div>
        </div>
    )
};