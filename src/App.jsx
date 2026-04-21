import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GroupCard from './groups/group-card';
import { Link } from 'react-router';
import Layout from './nav-bar/Layout';
import { UserProvider } from './user-context/UserProvider';

function App() {

  const initialState = {
    searchText: ' ',
    clickedId: undefined

  }
  const [state, setState] = useState(initialState);

  const onSearchChange = (text) => {
    setState({ ...state, searchText: text })
  }

  const groupList = [
    { id: 1, name: "smart Group" },
    { id: 2, name: "Stupid Group" },
    { id: 3, name: "average grou" },
    { id: 4, name: "Genius group" }];

  const user = {
    name: 'Nina'
  }
  return (
    <>
      <UserProvider user={user} >
        <Layout />
      </UserProvider>

      <Link to="/counter" > Got to Counter </Link>
      <br />
      <Link to='/promise-demo'>Go to promise-demo</Link>
      <br />
      <input type='text' onChange={({ target: { value } }) => onSearchChange(value)} />
      {state.searchText}
      {
        groupList
          .map(({ id: itemId, name }) => {
            return name.includes(state.searchText) &&
              <GroupCard key={itemId}
                id={itemId}
                name={name}
                onCardClick={(id) => {
                  console.log('clicked', id);
                  setState({ ...state, clickedId: id })
                }}
                isActive={state.clickedId === itemId} />
          })
      }
    </>
  )
}

export default App
