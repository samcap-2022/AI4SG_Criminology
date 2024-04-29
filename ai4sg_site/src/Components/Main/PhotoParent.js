import React, { useEffect, useState } from "react";
import {
  getRandPhoto,
  getAllPhotos,
  updateCorrect,
  updateIncorrect
} from "../../Common/Services/PhotoService";
import PhotoChild from "./PhotoChild";

const PhotoParent = () => {
    const [photos, setPhotos] = useState([]);
    const [photo, setPhoto] = useState([]);
    var [path, setPath] = useState([]);
    var [isFromAI, setIsFromAI] = useState([]);

    // UseEffect to run when the page loads to
    // obtain async data and render
    useEffect(() => {
        getAllPhotos().then((photos) => {
            setPhotos(photos);
        });

        getRandPhoto().then((photo) => {
            setPhoto(photo);

            try {
                path = photo.attributes.path;
                setPath(path);
            } catch (error) {
                console.error('Error:', error);
                return null;
            }

            try {
                isFromAI = photo.attributes.isFromAI;
                setIsFromAI(isFromAI);
            } catch (error) {
                console.error('Error:', error);
                return null;
            }
        });
    }, []);

    // Flag to move to next photo
    const [ai, setAI] = useState(false);
    const [human, setHuman] = useState(false);

    // UseEffect that runs when changes
    // are made to the state variables/flags
    useEffect(() => {
        if (ai && isFromAI) {
            updateCorrect()
            // TODO: display Correct screen + select new photo
            console.log("yippee");
            return (
                <div>
                    <p>yippee</p>
                </div>
            );
        }

        if (ai && !isFromAI) {
            updateIncorrect()
            // TODO: display Incorrect screen + select new photo
        }

        if (human && !isFromAI) {
            updateCorrect()
            // TODO: display Correct screen + select new photo
        }

        if (human && isFromAI) {
            updateIncorrect()
            // TODO: display Incorrect screen + select new photo
        }
    }, [ai, human, isFromAI])

    // Handler to handle event passed from child AI button
    const onClickAIHandler = (e) => {
        e.preventDefault();
        // Trigger AI flag to re-render
        setAI(true);
    };

    // Handler to handle event passed from child Human button
    const onClickHumanHandler = (e) => {
        e.preventDefault();
        // Trigger Human flag to re-render
        setHuman(true);
    };

    // TODO: the render lol
    return (
        <div>
            {path != '' && (
                <img src={require("../../../../data/" + path)} alt="Could not load image." width="250" height="200" />
            )}
            <PhotoChild onClickAI={onClickAIHandler} onClickHuman={onClickHumanHandler} />
        </div>
    );
}

export default PhotoParent;