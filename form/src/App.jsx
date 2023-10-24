import { useState } from 'react'

import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name: '',
    gender: 'Male',
    role: 'Teacher',
    maritalStatus: false,
  })
  const handleAdd = (e) => {
    e.preventDefault();

  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue })
  }
  console.log(formData);
  return (
    <div>
      <form onSubmit={handleAdd} >
        <input
          type="text"
          name='name'
          placeholder='Name..'
          value={formData.name}
          onChange={handleChange}
        />
        <select onChange={handleChange} value={formData.gender} name='gender'>
          <option value="Male" >Male</option>
          <option value="Female">Female</option>
        </select  >
        <select onChange={handleChange} value={formData.role} name='role'>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </select>
        <label >
          <input type="checkbox" name="maritalStatus"
            checked={formData.maritalStatus}
            onChange={handleChange} />

          Marital Status
        </label>

        <button type="submit">Submit</button>
      </form>
    </div >
  )
}






export default App
