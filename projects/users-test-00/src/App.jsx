import { useState } from 'react'
import './App.css'
import { UserHeaderColumn } from './UserHeaderColumn'
import { UserRow } from './UserRow'
import { useEffect } from 'react'

const RANDOM_USER_API = 'https://randomuser.me/api/?results=100'

export function App() {
  const [initialUsers, setInitialUsers] = useState([])
  const [users, setUsers] = useState([])
  const [nameFilter, setNameFilter] = useState("")
  const [lastNameFilter, setLastNameFilter] = useState("")
  const [emailFilter, setEmailFilter] = useState("")
  const [phoneNumberFilter, setPhoneNumberFilter] = useState("")
  const [countryFilter, setCountryFilter] = useState("")

  useEffect(() => {
    fetch(RANDOM_USER_API)
    .then(res => res.json())
    .then(response => {
      setInitialUsers(response.results)
      setUsers(response.results)
    })
  }, [])

  useEffect(() => {
    setUsers(initialUsers.filter((user) => (
                  user.name.first.includes(nameFilter)
                )).filter((user) => (
                  user.name.last.includes(lastNameFilter)
                )).filter((user) => (
                  user.email.includes(emailFilter)
                )).filter((user) => (
                  user.cell.includes(phoneNumberFilter)
                )).filter((user) => (
                  user.location.country.includes(countryFilter)
                ))
            )
  }, [nameFilter, lastNameFilter, emailFilter, phoneNumberFilter, countryFilter])

  return (
    <>
      <div className='main-content'>
        <div className='table-header'>
          <UserHeaderColumn hasRightBorder={true} column='column-name' filterUsers={setNameFilter}>
            Name
          </UserHeaderColumn>
          <UserHeaderColumn hasRightBorder={true} column='column-lastName' filterUsers={setLastNameFilter}>
            Last name
          </UserHeaderColumn>
          <UserHeaderColumn hasRightBorder={true} column='column-email' filterUsers={setEmailFilter}>
            Email
          </UserHeaderColumn>
          <UserHeaderColumn hasRightBorder={true} column='column-phoneNumber' filterUsers={setPhoneNumberFilter}>
            Phone number
          </UserHeaderColumn>
          <UserHeaderColumn column='column-country' filterUsers={setCountryFilter}>
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
        <div className='table-footer hasTopBorder'>
        </div>
      </div>
    </>
  )
}