import React, {useState} from "react";
import { Blues, Company, CopyrightText, StyledTitle, Label, ButtonGroup, StyledFormArea, Test, StyledButton, StyledFormButton} from "../Components/style";
import Table from "react-bootstrap/Table"
import { Button } from "react-bootstrap";
import { Tp } from "../Components/State";
import './style.css';
import { CountyData } from '../Components/County';
import { db , storage } from '../Database/config';

export const View = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [surName, setSurName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [residence, setResidence] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [numberofChildren, setNumberofChildren] = useState('');
    const [disability, setDisability] = useState('');
    const [nationality, setNationality] = useState('');
    const [county, setCounty] = useState('');
    const [gender, setGender] = useState('');
    const [dateofbirth, setDateofBirth] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [educationstandard, setEducationStandard] = useState('');
    const [constituency, setConstituency] = useState('');
    const [ward, setWard] = useState('');
    const [fingerprint, setFingerPrint] = useState(null);
    const [image, setImage] = useState(null);

    
    const handleImageChange =(e) => {
        e.preventDefault();
        let pickedfile;
        if(e.target.files && e.target.files.length>0){
          pickedfile=e.target.files[0];
          setImage(pickedfile);
        }
      }

      const Fingerprint = async (e) => {
        e.preventDefault();
        
        const res = await fetch('http://localhost:15896/api/CloudABISV10Standalone/Capture', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
           OperationName : "Identify",  
            CaptureTimeout: 0, 
            CaptureId: "",  
            CaptureMode: "TemplateOnly",
            TemplateFormat: "ISO",
            CaptureType: "SingleCapture", 
            TenPrintCaptureMode: "Two_Fingers" 
          }),
        });
        const json = await res.json();
        setFingerPrint(json);
      };
  
      const SaveForm = (e) => {
        e.preventDefault();
        
        const serialNumber = Math.floor(100000+Math.random()*9000).toString()
  
        const uploadTask=storage.ref("ProfilePicture")
        .child(serialNumber)
        .put(image);
        uploadTask.on(
          "state_changed",
          (snapshot)=> {
            let progress=((snapshot.bytesTransferred/snapshot.totalBytes)*100);
            console.log(progress);
          },
          (err)=>{
            console.log(err);
          },
          ()=>{
            storage.ref("ProfilePicture")
            .child(serialNumber)
            .getDownloadURL()
            .then((imageUrl)=>{
              db.collection('Citizen')
              .add({
                firstName: firstName,
                middleName: middleName,
                surName: surName,
                occupation: occupation,
                gender:gender,
                residence: residence,
                maritalStatus: maritalStatus,
                numberofChildren: numberofChildren,
                disability: disability,
                nationality: nationality,
                fingerprint: fingerprint,
                county: county,
                constituency: constituency,
                ward: ward,
                residence: residence,
                ethnicity: ethnicity,
                educationStandard: educationstandard,
                dateofbirth: dateofbirth,
                imgUrl: imageUrl,
              })
            })
  
              //reset
                setDisability('');
                setMaritalStatus('');
                setNationality('');
                setNumberofChildren('');
                setOccupation('');
                setResidence('');
                setFirstName('');
                setMiddleName('');
                setSurName('');
                setConstituency('');
                setDateofBirth('');
                setEducationStandard('');
                setResidence('');
                setEthnicity('');
                setWard('');
                setImage(null);
                setFingerPrint(null);
          }
        )
      }
      
  
    return (
        <>
            <Company width={30}>
                <StyledTitle size={48}>
                    COMPANY NAME
                </StyledTitle>

                <ButtonGroup>
                    {/* <Tp></Tp> */}
                </ButtonGroup>

                <CopyrightText>
                    SLOGAN
                </CopyrightText>
            </Company>
            <Blues>
                <>
                    <div className="view">
                        <div className="one"> 
                            <Test>
                                <input 
                                    placeholder="First name"
                                    value={firstName}
                                      onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Test>
                            <Test>
                                <input 
                                    placeholder="Middle Name"
                                    value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
                                />
                            </Test>
                            <Test>
                                <input 
                                    placeholder="Surname"
                                    value={surName}
          onChange={(e) => setSurName(e.target.value)}
                                />
                            </Test>
                                                        <Test>
                                                        <input 
                    type="date" 
                    value={dateofbirth}
                    onChange={(e) => setDateofBirth(e.target.value)}
                    required
                  />
                            </Test>
                                                        <Test>
                                <input 
                                    placeholder="Gender"
                                    value={gender}
          onChange={(e) => setGender(e.target.value)}
                                />
                            </Test>
                                                                                    <Test>
                                <input 
                                    placeholder="Ethnicity"
                                    value={ethnicity}
          onChange={(e) => setEthnicity(e.target.value)}
                                />
                            </Test>
                                                                                    <Test>
                                <input 
                                    placeholder="Number of children"
                                    value={numberofChildren}
          onChange={(e) => setNumberofChildren(e.target.value)}
                                />
                            </Test>

                            <Test>
                                <div><label> Marital Status</label></div>
                                <div>                                
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
                                </div>
                            </Test>
                            <Test className="drop">
                                <div>
                                    <label> Disability</label>
                                </div>
                                <div>                                
                                    <select
                                    value={disability}
                                    onChange={(e) => setDisability(e.target.value)}
                                    >
                                        <option>...</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select> 
                                </div>

                            </Test>
                            <Test>
                                <div>
                                    <label>EDUCATION STANDARD</label>
                                </div>
                                <div>
                                    <select
                                    value={educationstandard}
                                    onChange={(e) => setEducationStandard(e.target.value)}
                                    >
                                        <option>...</option>
                                        <option>Primary</option>
                                        <option>High School</option>
                                        <option>Certificate</option>
                                        <option>Degree</option>
                                        <option>Diploma</option>
                                    </select>
                                </div>
                            
                            </Test>
                        </div>
                        <div className="two">
                        <Test className="drop">
                                <div>
                                    <label> Nationality</label>
                                </div>
                                <div>                                
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
                                </div>

                            </Test>
                                                        <Test>
                                <input 
                                    placeholder="Residence"
                                    value={residence}
                                    onChange={(e) => setResidence(e.target.value)}
                                />
                            </Test>
                            <Test className="drop">
                                <div>
                                    <label> County</label>
                                </div>
                                <div>                                
                                    <select
                                    value={county}
                                    onChange={(e) => setCounty(e.target.value)}
                                    >
                                        <option>...</option>
                                        {CountyData.map((county) => <option key={county.name} value={county.value}>{county.county}</option>)}
                                    </select> 
                                </div>

                            </Test>
                                                        <Test>
                                <input 
                                    placeholder="Constituency"
                                    value={constituency}
          onChange={(e) => setConstituency(e.target.value)}
                                />
                            </Test>
                                                        <Test>
                                <input 
                                    placeholder="Ward"
                                    value={ward}
          onChange={(e) => setWard(e.target.value)}
                                />
                            </Test>
                                                        <Test>
                                <input 
                                    placeholder="Occupation"
                                    value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
                                />
                            </Test>
                            <div className="three">
                                  <input type='file' onChange={handleImageChange} />
                            </div>
                            <div className="three">
                                <StyledFormButton onClick={Fingerprint}>
                                    Fingerprint
                                </StyledFormButton>
                            </div>
                        </div>
                        <div className="button">
                            <StyledFormButton onClick={SaveForm}>
                                Register
                            </StyledFormButton>
                        </div>
                    </div>
                </>
            </Blues>
        </>
    )
}
