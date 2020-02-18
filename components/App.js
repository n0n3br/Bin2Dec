import React, { useState } from 'react';

const App = () => {

  const [bin, setBin]  = useState('')
  const 

  const handleKeyDown = event => {
    const { keyCode } = event
    if (![48,49,46,37,39].find(keyCode)) event.preventDefault()
  }

  const handleChange = event => {
    setBin(event.target.value)
  }

  return (
    <div className='hero is-primary is-fullheight'>
      <div className='hero-body'>
        <div className='container has-text-centered is-one-third-desktop'>
        <div className='columns'>
          <div className='column is-one-third-desktop is-offset-one-third-desktop'>
            <div className='title'>Bin2Dec</div>
            <div className='subtitle'>Enter the bin number to convert do decimal</div>
            <form>
              <div className='field'>
                <div className='control'>
                  <input className='input' value={bin} onChange={handleChange} onKeyDown={handleKeyDown} maxlength="8"/>
                </div>
              </div>
            </form>
            </div>
        </div>
        </div>
      </div>
    </div> 
  )

}

export default App