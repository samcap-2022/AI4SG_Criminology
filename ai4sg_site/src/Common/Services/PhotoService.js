import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS - PHOTOS */

// READ operation - get a random photo
export const getRandPhoto = () => {
  /*const Photo = Parse.Object.extend("Photo");
  const query = new Parse.Query(Photo);
  return query.find({$rand: {} }); */

  try {
    const Photo = Parse.Object.extend("Photo");
    const query = new Parse.Query(Photo);
    var total = 0;
    query.find().then((results) => {
        total = results.length;
        console.log(total);
        // need to find a way to access total out here
    });
    const randomIndex = Math.floor(Math.random() * total);
    query.skip(randomIndex);
    const randomPhoto = query.first();
    return randomPhoto;
  } catch (error) {
        console.error('Error:', error);
        return null;
  }

};

// READ operation - get all photos in Parse class Photo
export const getAllPhotos = () => {
  const Photo = Parse.Object.extend("Photo");
  const query = new Parse.Query(Photo);
  return query.find().then((results) => {
    // returns array of Photo objects
    return results;
  });
};

// UPDATE operation - update user correct guesses
export const updateCorrect = () => {
    // TODO
    console.log("correct");
}

// UPDATE operation - update user incorrect guesses - TODO
export const updateIncorrect = () => {
    // TODO
    console.log("incorrect");
}
