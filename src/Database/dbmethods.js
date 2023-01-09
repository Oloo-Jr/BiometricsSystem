import {db} from './config';


export const citizenInfo = async (
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
  nationality,
  singleParent,
  widow,
  education,
  originality,
  ageIndividualChild
  ) => {
    try {
    await db.collection("Citizens").doc(serialNumber).set({
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
      nationality,
      singleParent,
      widow,
      education,
      originality,
      ageIndividualChild
    });
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
}