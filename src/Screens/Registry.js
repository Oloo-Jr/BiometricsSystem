import React, {useState} from 'react'
import { citizenInfo } from '../Database/dbmethods';
import {
  Company,
  Blues,
  StyledTitle,
  CopyrightText,
  StyledFormButton
} from '../Components/style';
import './style.css';

/**
* @author
* @function Registration
**/

export const Registration = () => {
    const [Fname, setFname] = useState('');
    const [Mname, setMname] = useState('');
    const [Sname, setSname] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [county, setCounty] = useState('');
    const [constituency, setConstituency] = useState('');
    const [ward, setWard] = useState('');
    const [occupation, setOccupation] = useState('');
    const [residence, setResidence] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [numOfChildren, setNumOfChildren] = useState('');
    const [disability, setDisability] = useState('');
    const [nationality, setNationality] = useState('');
    const [singleParent, setSingleParent] = useState('');
    const [widow, setWidow] = useState('');
    const [education, setEducation] = useState('');
    const [originality, setOriginality] = useState('');
    const [ageIndividualChild, setAgeIndividualChild] = useState('');

    
 const handleSave = (event) => {
  event.preventDefault();

  const serialNumber = Math.floor(100000+Math.random()*9000).toString()

 // Add a new document in collection "cities"
 citizenInfo(
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
  )

  //reset
setDisability('');
setMaritalStatus('');
setNationality('');
setNumOfChildren('');
setOccupation('');
setResidence('');
setFname('');
setMname('');
setSname('');
setDateOfBirth('');
setEthnicity('');
setGender('');
setCounty('');
setConstituency('');
setWard('');
setAgeIndividualChild('');
setSingleParent('');
setWidow('');
setEducation('');
setOriginality('');
}
  return(
    <>
      <Company width={30}>
        <StyledTitle size={48}>
          COMPANY NAME
        </StyledTitle>
        <CopyrightText>
          SLOGAN
        </CopyrightText>
      </Company>
      <Blues>
        <form onSubmit={handleSave}>
          <label>First Name:
            <input 
              type="text" 
              value={Fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="First Name"
            />
          </label>

          <label>Middle Name:
            <input 
              type="text" 
              value={Mname}
              onChange={(e) => setMname(e.target.value)}
              placeholder="Middle Name"
            />
          </label>

          <label>Surname:
            <input 
              type="text" 
              value={Sname}
              onChange={(e) => setSname(e.target.value)}
              placeholder="Surname"
            />
          </label>

          <label>Date Of Birth:
            <input 
              type="date" 
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </label>

          <label>Gender:
            <input 
              type="text" 
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="Gender"
            />
          </label>

          <label>Ethnicity:
            <input 
              type="text" 
              value={ethnicity}
              onChange={(e) => setEthnicity(e.target.value)}
              placeholder="Ethnicity"
            />
          </label>

          <label>County:
            <input 
              type="text" 
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              placeholder="County"
            />
          </label>

          <label>Constituency:
            <input 
              type="text" 
              value={constituency}
              onChange={(e) => setConstituency(e.target.value)}
              placeholder="Constituency"
            />
          </label>

          <label>Ward:
            <input 
              type="text" 
              value={ward}
              onChange={(e) => setWard(e.target.value)}
              placeholder="Ward"
            />
          </label>

          <label>Occupation:
            <input 
              type="text" 
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              placeholder="occupation"
            />
          </label>

          <label>Residence:
            <input 
              type="text" 
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
              placeholder="Residence"
            />
          </label>

          <label>Marital Status:
            <input 
              type="text" 
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              placeholder="Marital Status"
            />
          </label>

          <label>Number of Children:
            <input 
              type="number" 
              value={numOfChildren}
              onChange={(e) => setNumOfChildren(e.target.value)}
            />
          </label>

          <label>Disability:
            <input 
              type="text" 
              value={disability}
              onChange={(e) => setDisability( e.target.value)}
              placeholder="Disability"
            />
          </label>

          <label>Nationality:
            <input 
              type="text" 
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              placeholder="Nationality"
            />
          </label>

          <label>Education Standard:
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Education Standard"
            />
          </label>

          <label>Single Parent:
            <input
              type="text"
              value={singleParent}
              onChange={(e) => setSingleParent(e.target.value)}
            />
          </label>

          <label>Widow:
            <input
              type="text"
              value={widow}
              onChange={(e) => setWidow(e.target.value)}
              placeholder="Widow"
            />
          </label>

          <label>Nation Of Originality:
            <input
              type="text"
              value={originality}
              onChange={(e) => setOriginality(e.target.value)}
            />
          </label>

          <label>Age Of Individual Child:
            <input
              type="number"
              value={ageIndividualChild}
              onChange={(e) => setAgeIndividualChild(e.target.value)}
            />
          </label>

          <StyledFormButton>
            Register
          </StyledFormButton>
        </form>
      </Blues>
    </>  
  )
 }