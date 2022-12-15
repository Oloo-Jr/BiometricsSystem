import db from './config';


export const citizenInfo = (
  serialNumber,
  Fname,
  Mname,
  Sname,
  dateOfBirth,
  gender,
  ethnicity,
  county,
  constituency,
  ward,
  occupation,
  residence,
  maritalStatus,
  numOfChildren,
  disability,
  nationality
  ) => {
    return db.collection("Citizens").doc(serialNumber).set({
        Fname,
        Mname,
        Sname,
        dateOfBirth,
        gender,
        ethnicity,
        county,
        constituency,
        ward,
        occupation,
        residence,
        maritalStatus,
        numOfChildren,
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