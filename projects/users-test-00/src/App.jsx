import { useState } from 'react'
import './App.css'
import { UserHeaderColumn } from './UserHeaderColumn'
import { UserRow } from './UserRow'
import { useEffect } from 'react'

const RANDOM_USER_API = 'https://randomuser.me/api/?results=100'

export function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(RANDOM_USER_API)
    .then(res => res.json())
    .then(response => {
      setUsers(response.results)
    })
  }, [])

  return (
    <>
      <div className='main-content'>
        <div className='table-header'>
          <UserHeaderColumn hasRightBorder={true} column='column-name'>
            Name
          </UserHeaderColumn>
          <UserHeaderColumn hasRightBorder={true} column='column-lastName'>
            Last name
          </UserHeaderColumn>
          <UserHeaderColumn hasRightBorder={true} column='column-email'>
            Email
          </UserHeaderColumn>
          <UserHeaderColumn hasRightBorder={true} column='column-phoneNumber'>
            Phone number
          </UserHeaderColumn>
          <UserHeaderColumn column='column-country'>
            Country
          </UserHeaderColumn>
        </div>
        <div className='table-users'>
          {
            users.map((user, index) => (
              <UserRow 
                key={index}
                idx={index}
                name={user.name.first}
                lastName={user.name.last}
                email={user.email}
                phoneNumber={user.cell}
                country={user.location.country}>
              </UserRow>
            ))
          }
        </div>
        <div className='table-footer'>
          <UserHeaderColumn hasRightBorder={true} column='column-name'>
          </UserHeaderColumn>
          <UserHeaderColumn hasRightBorder={true} column='column-lastName'>
          </UserHeaderColumn>
          <UserHeaderColumn hasRightBorder={true} column='column-email'>
          </UserHeaderColumn>
          <UserHeaderColumn hasRightBorder={true} column='column-phoneNumber'>
          </UserHeaderColumn>
          <UserHeaderColumn column='column-country'>
          </UserHeaderColumn>
        </div>
      </div>
    </>
  )
}