import React, {useState} from 'react'
import { citizenInfo } from '../Database/dbmethods';
import {
  Company,
  Blues,
  StyledTitle,
  CopyrightText,
  StyledFormButton,
  StyledFormArea
} from '../Components/style';
import './style.css';
import '../Components/County.json'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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
          Slogan
        </CopyrightText>
      </Company>
      <Blues>
        <StyledFormArea>
          <form onSubmit={handleSave}>
            <label>FIRST NAME:
              <input 
                type="text" 
                value={Fname}
                onChange={(e) => setFname(e.target.value)}
                placeholder="First Name"
                required
              />
            </label>

            <label>MIDDLE NAME:
              <input 
                type="text" 
                value={Mname}
                onChange={(e) => setMname(e.target.value)}
                placeholder="Middle Name"
                required
              />
            </label>

            <label>SURNAME:
              <input 
                type="text" 
                value={Sname}
                onChange={(e) => setSname(e.target.value)}
                placeholder="Surname"
                required
              />
            </label>

            <label>DATE OF BIRTH:
              <input 
                type="date" 
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </label>

            <label>GENDER:
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </label>

            <label>ETHNICITY:
              <input 
                type="text" 
                value={ethnicity}
                onChange={(e) => setEthnicity(e.target.value)}
                placeholder="Ethnicity"
              />
            </label>

            <label>COUNTY:
              <select
                value={county}
                onChange={(e) => setCounty(e.target.value)}
              >
                <option>...</option>              
              </select>
            </label>

            <label>CONSTITUENCY:
              <select
                value={constituency}
                onChange={(e) => setConstituency(e.target.value)}
              >
                <option>...</option>
              </select>
            </label>

            <label>WARD:
              <select
                value={ward}
                onChange={(e) => setWard(e.target.value)}
              >
                <option>...</option>
              </select>
            </label>

            <label>OCCUPATION:
              <input 
                type="text" 
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                placeholder="occupation"
                required
              />
            </label>

            <label>RESIDENCE:
              <input 
                type="text" 
                value={residence}
                onChange={(e) => setResidence(e.target.value)}
                placeholder="Residence"
                required
              />
            </label>

            <label>MARITAL STATUS:
              <select
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
              >
                <option>...</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widow</option>
                <option>Widower</option>
              </select>
            </label>

            <label>NUMBER OF CHILDREN:
              <input 
                type="number" 
                value={numOfChildren}
                onChange={(e) => setNumOfChildren(e.target.value)}
              />
            </label>

            <label>DISABILITY:
              <input 
                type="text" 
                value={disability}
                onChange={(e) => setDisability( e.target.value)}
                placeholder="Disability"
                required
              />
            </label>

            <label>NATIONALITY:
              <select
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              >
              
                <option>...</option>
                <option>Afghanistan</option>
                <option>Albania</option>
                <option>Algeria</option>
                <option>Andorra</option>
                <option>Angola</option>
                <option>Antigua and Barbuda</option>
                <option>Argentina</option>
                <option>Armenia</option>
                <option>Austria</option>
                <option>Azerbaijan</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
                <option>Belarus</option>
                <option>Belgium</option>
                <option>Belize</option>
                <option>Benin</option>
                <option>Bhutan</option>
                <option>Bolivia</option>
                <option>Bosnia and Herzegovina</option>
                <option>Botswana</option>
                <option>Brazil</option>
                <option>Brunei</option>
                <option>Bulgaria</option>
                <option>Burkina Faso</option>
                <option>Burundi</option>
                <option>Cabo Verde</option>
                <option>Cambodia</option>
                <option>Cameroon</option>
                <option>Canada</option>
                <option>Central African Republic</option>
                <option>Chad</option>
                <option>Channel Islands</option>
                <option>Chile</option>
                <option>China</option>
                <option>Colombia</option>
                <option>Comoros</option>
                <option>Congo</option>
                <option>Costa Rica</option>
                <option>Côte d\'Ivoire</option>
                <option>Croatia</option>
                <option>Cuba</option>
                <option>Cyprus</option>
                <option>Czech Republic</option>
                <option>Denmark</option>
                <option>Djibouti</option>
                <option>Dominica</option>
                <option>Dominican Republic</option>
                <option>DR Congo</option>
                <option>Ecuador</option>
                <option>Egypt</option>
                <option>El Salvador</option>
                <option>Equatorial Guinea</option>
                <option>Eritrea</option>
                <option>Estonia</option>
                <option>Eswatini</option>
                <option>Ethiopia</option>
                <option>Faeroe Islands</option>
                <option>Finland</option>
                <option>France</option>
                <option>French Guiana</option>
                <option>Gabon</option>
                <option>Gambia</option>
                <option>Georgia</option>
                <option>Germany</option>
                <option>Ghana</option>
                <option>Gibraltar</option>
                <option>Greece</option>
                <option>Grenada</option>
                <option>Guatemala</option>
                <option>Guinea</option>
                <option>Guinea-Bissau</option>
                <option>Guyana</option>
                <option>Haiti</option>
                <option>Holy See</option>
                <option>Honduras</option>
                <option>Hong Kong</option>
                <option>Hungary</option>
                <option>Iceland</option>
                <option>India</option>
                <option>Indonesia</option>
                <option>Iran</option>
                <option>Iraq</option>
                <option>Ireland</option>
                <option>Isle of Man</option>
                <option>Israel</option>
                <option>Italy</option>
                <option>Jamaica</option>
                <option>Japan</option>
                <option>Jordan</option>
                <option>Kazakhstan</option>
                <option>Kenya</option>
                <option>Kuwait</option>
                <option>Kyrgyzstan</option>
                <option>Laos</option>
                <option>Latvia</option>
                <option>Lebanon</option>
                <option>Lesotho</option>
                <option>Liberia</option>
                <option>Libya</option>
                <option>Liechtenstein</option>
                <option>Lithuania</option>
                <option>Luxembourg</option>
                <option>Macao</option>
                <option>Madagascar</option>
                <option>Malawi</option>
                <option>Malaysia</option>
                <option>Maldives</option>
                <option>Mali</option>
                <option>Malta</option>
                <option>Mauritania</option>
                <option>Mauritius</option>
                <option>Mayotte</option>
                <option>Mexico</option>
                <option>Moldova</option>
                <option>Monaco</option>
                <option>Mongolia</option>
                <option>Montenegro</option>
                <option>Morocco</option>
                <option>Mozambique</option>
                <option>Myanmar</option>
                <option>Namibia</option>
                <option>Nepal</option>
                <option>Netherlands</option>
                <option>Nicaragua</option>
                <option>Niger</option>
                <option>Nigeria</option>
                <option>North Korea</option>
                <option>North Macedonia</option>
                <option>Norway</option>
                <option>Oman</option>
                <option>Pakistan</option>
                <option>Panama</option>
                <option>Paraguay</option>
                <option>Peru</option>
                <option>Philippines</option>
                <option>Poland</option>
                <option>Portugal</option>
                <option>Qatar</option>
                <option>Réunion</option>
                <option>Romania</option>
                <option>Russia</option>
                <option>Rwanda</option>
                <option>Saint Helena</option>
                <option>Saint Kitts and Nevis</option>
                <option>Saint Lucia</option>
                <option>Saint Vincent and the Grenadines</option>
                <option>San Marino</option>
                <option>Sao Tome & Principe</option>
                <option>Saudi Arabia</option>
                <option>Senegal</option>
                <option>Serbia</option>
                <option>Seychelles</option>
                <option>Sierra Leone</option>
                <option>Singapore</option>
                <option>Slovakia</option>
                <option>Slovenia</option>
                <option>Somalia</option>
                <option>South Africa</option>
                <option>South Korea</option>
                <option>South Sudan</option>
                <option>Spain</option>
                <option>Sri Lanka</option>
                <option>State of Palestine</option>
                <option>Sudan</option>
                <option>Suriname</option>
                <option>Sweden</option>
                <option>Switzerland</option>
                <option>Syria</option>
                <option>Taiwan</option>
                <option>Tajikistan</option>
                <option>Tanzania</option>
                <option>Thailand</option>
                <option>The Bahamas</option>
                <option>Timor-Leste</option>
                <option>Togo</option>
                <option>Trinidad and Tobago</option>
                <option>Tunisia</option>
                <option>Turkey</option>
                <option>Turkmenistan</option>
                <option>Uganda</option>
                <option>Ukraine</option>
                <option>United Arab Emirates</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Uruguay</option>
                <option>Uzbekistan</option>
                <option>Venezuela</option>
                <option>Vietnam</option>
                <option>Western Sahara</option>
                <option>Yemen</option>
                <option>Zambia</option>
                <option>Zimbabwe</option>
              </select>
            </label>

            <label>EDUCATION STANDARD:
              <select
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              >
                <option>...</option>
                <option>Primary</option>
                <option>High School</option>
                <option>Certificate</option>
                <option>Degree</option>
                <option>Diploma</option>
              </select>
            </label>

            <label>SINGLE PARENT:
              <select
                value={singleParent}
                onChange={(e) => setSingleParent(e.target.value)}
              >
                <option>...</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </label>

            {/* <label>WIDOW:
              <select
                value={widow}
                onChange={(e) => setWidow(e.target.value)}
              >
                <option>...</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </label> */}

            <label>NATION OF ORIGINALITY:
              <select
                value={originality}
                onChange={(e) => setOriginality(e.target.value)}
              >
                <option>...</option>
                <option>Afghanistan</option>
                <option>Albania</option>
                <option>Algeria</option>
                <option>Andorra</option>
                <option>Angola</option>
                <option>Antigua and Barbuda</option>
                <option>Argentina</option>
                <option>Armenia</option>
                <option>Austria</option>
                <option>Azerbaijan</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
                <option>Belarus</option>
                <option>Belgium</option>
                <option>Belize</option>
                <option>Benin</option>
                <option>Bhutan</option>
                <option>Bolivia</option>
                <option>Bosnia and Herzegovina</option>
                <option>Botswana</option>
                <option>Brazil</option>
                <option>Brunei</option>
                <option>Bulgaria</option>
                <option>Burkina Faso</option>
                <option>Burundi</option>
                <option>Cabo Verde</option>
                <option>Cambodia</option>
                <option>Cameroon</option>
                <option>Canada</option>
                <option>Central African Republic</option>
                <option>Chad</option>
                <option>Channel Islands</option>
                <option>Chile</option>
                <option>China</option>
                <option>Colombia</option>
                <option>Comoros</option>
                <option>Congo</option>
                <option>Costa Rica</option>
                <option>Côte d\'Ivoire</option>
                <option>Croatia</option>
                <option>Cuba</option>
                <option>Cyprus</option>
                <option>Czech Republic</option>
                <option>Denmark</option>
                <option>Djibouti</option>
                <option>Dominica</option>
                <option>Dominican Republic</option>
                <option>DR Congo</option>
                <option>Ecuador</option>
                <option>Egypt</option>
                <option>El Salvador</option>
                <option>Equatorial Guinea</option>
                <option>Eritrea</option>
                <option>Estonia</option>
                <option>Eswatini</option>
                <option>Ethiopia</option>
                <option>Faeroe Islands</option>
                <option>Finland</option>
                <option>France</option>
                <option>French Guiana</option>
                <option>Gabon</option>
                <option>Gambia</option>
                <option>Georgia</option>
                <option>Germany</option>
                <option>Ghana</option>
                <option>Gibraltar</option>
                <option>Greece</option>
                <option>Grenada</option>
                <option>Guatemala</option>
                <option>Guinea</option>
                <option>Guinea-Bissau</option>
                <option>Guyana</option>
                <option>Haiti</option>
                <option>Holy See</option>
                <option>Honduras</option>
                <option>Hong Kong</option>
                <option>Hungary</option>
                <option>Iceland</option>
                <option>India</option>
                <option>Indonesia</option>
                <option>Iran</option>
                <option>Iraq</option>
                <option>Ireland</option>
                <option>Isle of Man</option>
                <option>Israel</option>
                <option>Italy</option>
                <option>Jamaica</option>
                <option>Japan</option>
                <option>Jordan</option>
                <option>Kazakhstan</option>
                <option>Kenya</option>
                <option>Kuwait</option>
                <option>Kyrgyzstan</option>
                <option>Laos</option>
                <option>Latvia</option>
                <option>Lebanon</option>
                <option>Lesotho</option>
                <option>Liberia</option>
                <option>Libya</option>
                <option>Liechtenstein</option>
                <option>Lithuania</option>
                <option>Luxembourg</option>
                <option>Macao</option>
                <option>Madagascar</option>
                <option>Malawi</option>
                <option>Malaysia</option>
                <option>Maldives</option>
                <option>Mali</option>
                <option>Malta</option>
                <option>Mauritania</option>
                <option>Mauritius</option>
                <option>Mayotte</option>
                <option>Mexico</option>
                <option>Moldova</option>
                <option>Monaco</option>
                <option>Mongolia</option>
                <option>Montenegro</option>
                <option>Morocco</option>
                <option>Mozambique</option>
                <option>Myanmar</option>
                <option>Namibia</option>
                <option>Nepal</option>
                <option>Netherlands</option>
                <option>Nicaragua</option>
                <option>Niger</option>
                <option>Nigeria</option>
                <option>North Korea</option>
                <option>North Macedonia</option>
                <option>Norway</option>
                <option>Oman</option>
                <option>Pakistan</option>
                <option>Panama</option>
                <option>Paraguay</option>
                <option>Peru</option>
                <option>Philippines</option>
                <option>Poland</option>
                <option>Portugal</option>
                <option>Qatar</option>
                <option>Réunion</option>
                <option>Romania</option>
                <option>Russia</option>
                <option>Rwanda</option>
                <option>Saint Helena</option>
                <option>Saint Kitts and Nevis</option>
                <option>Saint Lucia</option>
                <option>Saint Vincent and the Grenadines</option>
                <option>San Marino</option>
                <option>Sao Tome & Principe</option>
                <option>Saudi Arabia</option>
                <option>Senegal</option>
                <option>Serbia</option>
                <option>Seychelles</option>
                <option>Sierra Leone</option>
                <option>Singapore</option>
                <option>Slovakia</option>
                <option>Slovenia</option>
                <option>Somalia</option>
                <option>South Africa</option>
                <option>South Korea</option>
                <option>South Sudan</option>
                <option>Spain</option>
                <option>Sri Lanka</option>
                <option>State of Palestine</option>
                <option>Sudan</option>
                <option>Suriname</option>
                <option>Sweden</option>
                <option>Switzerland</option>
                <option>Syria</option>
                <option>Taiwan</option>
                <option>Tajikistan</option>
                <option>Tanzania</option>
                <option>Thailand</option>
                <option>The Bahamas</option>
                <option>Timor-Leste</option>
                <option>Togo</option>
                <option>Trinidad and Tobago</option>
                <option>Tunisia</option>
                <option>Turkey</option>
                <option>Turkmenistan</option>
                <option>Uganda</option>
                <option>Ukraine</option>
                <option>United Arab Emirates</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Uruguay</option>
                <option>Uzbekistan</option>
                <option>Venezuela</option>
                <option>Vietnam</option>
                <option>Western Sahara</option>
                <option>Yemen</option>
                <option>Zambia</option>
                <option>Zimbabwe</option>
              </select>
            </label>

            {/* <label>AGE OF INDIVIDUAL CHILD:
              <input
                type="number"
                value={ageIndividualChild}
                onChange={(e) => setAgeIndividualChild(e.target.value)}
              />
            </label> */}
            <Link to='/Pic'>
              <Button>
                Picture
              </Button>
            </Link>

            <StyledFormButton>
              Register
            </StyledFormButton>
          </form>
        </StyledFormArea>
      </Blues>
    </>  
  )
 }