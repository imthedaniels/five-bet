import React from 'react'
import { SectionButtons } from './styles'

const NavMyBets = ({ handleBets, handleFinishedBets }) => {
  return (
    <SectionButtons>
      <button onClick={() => handleBets('open')} className='open'>
        Open Playing
      </button>
      <button onClick={() => {}}>Canceled</button>
      <button onClick={() => handleFinishedBets('finished')}>Finished</button>
    </SectionButtons>
  )
}

export default NavMyBets
