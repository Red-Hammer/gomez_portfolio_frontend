import React, {useState} from "react";
// Need to reset file state
export default function Admin() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isFilePicked, setIsFilePicked] = useState(false);


    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        const formData = new FormData();

        formData.append('File', selectedFile);

        fetch(
            'http://127.0.0.1:5000/api/uploadImage',
            {
                method: 'POST',
                body: formData,

            }
        )
            .then((res) => res.json())
            .then((result) => {
                console.log('Success', result);
                setIsFilePicked(false);
                setSelectedFile(null);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <div>

            <div>
                <input type="file" name="file" onChange={changeHandler}/>
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
                    <button onClick={handleSubmission}>Submit</button>
                </div>
            </div>
        </div>
    )
};