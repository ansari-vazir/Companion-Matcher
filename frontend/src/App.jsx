import React, {useState} from 'react'
import UserForm from './components/userForm'
import CompanionList from './components/CompanionList'

export default function App () {

  const [matches, setMatches] = useState([]);

  return (
    <div className="w-full p-4 bg-gray-700 min-h-screen text-white">
      <h1 className='font-bold text-3xl text-center mb-16'>Companion Matcher</h1>
      <div className='flex justify-around gap-4'>
        <UserForm setMatches={setMatches} />
        <CompanionList matches={matches} />
      </div>
      
    </div>
  )
}
