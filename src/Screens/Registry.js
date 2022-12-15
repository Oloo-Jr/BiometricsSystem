import React, {useState} from 'react'
import { citizenInfo } from '../Database/dbmethods';
import {
  Company,
  Blues,
  StyledTitle,
  CopyrightText,
  StyledFormButton
} from '../Components/style';

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
  nationality)

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
            />
          </label>

          <label>Middle Name:
            <input 
              type="text" 
              value={Mname}
              onChange={(e) => setMname(e.target.value)}
            />
          </label>

          <label>Surname:
            <input 
              type="text" 
              value={Sname}
              onChange={(e) => setSname(e.target.value)}
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
            />
          </label>

          <label>Ethnicity:
            <input 
              type="text" 
              value={ethnicity}
              onChange={(e) => setEthnicity(e.target.value)}
            />
          </label>

          <label>County:
            <input 
              type="text" 
              value={county}
              onChange={(e) => setCounty(e.target.value)}
            />
          </label>

          <label>Constituency:
            <input 
              type="text" 
              value={constituency}
              onChange={(e) => setConstituency(e.target.value)}
            />
          </label>

          <label>Ward:
            <input 
              type="text" 
              value={ward}
              onChange={(e) => setWard(e.target.value)}
            />
          </label>

          <label>Occupation:
            <input 
              type="text" 
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </label>

          <label>Residence:
            <input 
              type="text" 
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
            />
          </label>

          <label>Marital Status:
            <input 
              type="text" 
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
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
            />
          </label>

          <label>Nationality:
            <input 
              type="text" 
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
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