import React from 'react'
import Navbar from '../navbar/Navbar'
import CurrentAffairs from './CurrentAffairsArchive/CurrentAffairsArchives'
import CurrentAffairsTable from './CurrentAffairsTable.js/CurrentAffairsTable'

const Main = () => {
  return (
    <>
        <Navbar/>
        <CurrentAffairs/>
        <CurrentAffairsTable/>
    </>
  )
}

export default Main