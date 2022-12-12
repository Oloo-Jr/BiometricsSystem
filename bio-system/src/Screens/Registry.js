import React, {useState} from 'react'
import { citizenInfo } from '../Database/dbmethods';

/**
* @author
* @function Registration
**/

export const Registration = () => {
    const [name, setname] = useState('');
    const [occupation, setOccupation] = useState('');
    const [residence, setResidence] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [numberofChildren, setNumberofChildren] = useState('');
    const [disability, setDisability] = useState('');
    const [nationality, setNationality] = useState('');

    
 const handleSave = (event) => {
  event.preventDefault();

  const serialNumber = Math.floor(100000+Math.random()*9000).toString()

 // Add a new document in collection "cities"
 citizenInfo(
  serialNumber,
  name,
  occupation,
  residence,
  maritalStatus,
  numberofChildren,
  disability,
  nationality)

  //reset
setDisability('');
setMaritalStatus('');
setNationality('');
setNumberofChildren('');
setOccupation('');
setResidence('');
setname('');
}





  return(
     <form onSubmit={handleSave}>
      <label>Name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setname(e.target.value)}
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
          value={numberofChildren}
          onChange={(e) => setNumberofChildren(e.target.value)}
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
      <button>Save</button>
    </form>

       
    
   )

 }