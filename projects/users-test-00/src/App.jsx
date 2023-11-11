import { useState } from 'react'
import './App.css'
import { UserHeaderColumn } from './UserHeaderColumn'
import { UserRow } from './UserRow'
import { useEffect } from 'react'
import { EmptyHeaderColumn } from './EmptyHeaderColumn'

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
                  user.name.first.toLowerCase().includes(nameFilter.toLowerCase())
                )).filter((user) => (
                  user.name.last.toLowerCase().includes(lastNameFilter.toLowerCase())
                )).filter((user) => (
                  user.email.toLowerCase().includes(emailFilter.toLowerCase())
                )).filter((user) => (
                  user.cell.toLowerCase().includes(phoneNumberFilter.toLowerCase())
                )).filter((user) => (
                  user.location.country.toLowerCase().includes(countryFilter.toLowerCase())
                ))
            )
  }, [nameFilter, lastNameFilter, emailFilter, phoneNumberFilter, countryFilter])

  const deleteUser = ((idx) => {
    console.log("[App] Deleting user with nº " + idx)
    console.log(users)
    const newUsers = [...users]
    newUsers.splice(idx, 1)
    setUsers(newUsers)
    console.log(newUsers)
  })

  return (
    <>
      <div className='main-content'>
        <div className='table-header'>
          <UserHeaderColumn hasRightBorder={true} column='column-name' setFilter={setNameFilter}>
            Name
          </UserHeaderColumn>
          <UserHeaderColumn hasRightBorder={true} column='column-lastName' setFilter={setLastNameFilter}>
            Last name
          </UserHeaderColumn>
          <UserHeaderColumn hasRightBorder={true} column='column-email' setFilter={setEmailFilter}>
            Email
          </UserHeaderColumn>
          <UserHeaderColumn hasRightBorder={true} column='column-phoneNumber' setFilter={setPhoneNumberFilter}>
            Phone number
          </UserHeaderColumn>
          <UserHeaderColumn hasRightBorder={true} column='column-country' setFilter={setCountryFilter}>
            Country
          </UserHeaderColumn>
          <EmptyHeaderColumn></EmptyHeaderColumn>
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
                country={user.location.country}
                deleteUser={deleteUser}>
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