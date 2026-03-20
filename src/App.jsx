import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GroupCard from './groups/group-card';
import { Link } from 'react-router';

function App() {

  const initialState = {
    searchText: ' ',
  }
  const [state, setState] = useState(initialState);

  const onSearchChange = (text) => {
    setState({ ...state, searchText: text })
  }

  const groupList = ["smart Group", "Stupid Group", "average grou", "Genius group"];
  return (
    <>
      <Link to="/counter" > Got to Counter </Link>
      <input type='text' onChange={({ target: { value } }) => onSearchChange(value)} />
      {state.searchText}
      {
        groupList
          .map((item) => {
            return item.includes(state.searchText) ?
              <GroupCard key={item} name={item} /> :
              undefined;
          })
      }
    </>
  )
}

export default App
