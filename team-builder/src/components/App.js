import React, { useState} from 'react';
import TeamMemberForm from './TeamMemberForm.js'
import TeamMate from './TeamMate.js'
import '../App.css';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teamList, setTeamList] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  
  const updateForm = (inputKey, inputValue) => {
    setFormValues({...formValues, [inputKey]: inputValue})
  }
  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role ) return

    setTeamList([newTeamMember, ...teamList])
    console.log(teamList)
  }

  return (
    <div className="App">
      <h1>My Friggin' Sweet Team</h1>
      <TeamMemberForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {teamList.map(teamMate => {
        return (
          <TeamMate key={teamMate.id} details={teamMate} />
        )
      })}
    </div>
  );
}

export default App;
