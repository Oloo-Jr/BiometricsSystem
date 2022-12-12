import db from './config';


export const citizenInfo = (serialNumber,name, occupation, residence,
    maritalStatus, numberofChildren, disability, nationality) => {
    return db.collection("Citizens").doc(serialNumber).set({
        name,
        occupation,
        residence,
        maritalStatus,
        numberofChildren,
        disability,
        nationality
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
}