import React, { useState } from 'react'
import LoginDetails from './components/LoginDetails'
import PersonalDetails from './components/PersonalDetails'
import Confirmation from './components/Confirmation'

const App = () => {
    const [step, setStep] = useState(1)
    const [data, setData] = useState({
        username: '',
        password: '',
        age: ''
    })

    return (
        <div className='app'>
            {step === 1 && (<LoginDetails data = {data} setData = {setData} />)}
            {step === 2 && (<PersonalDetails data = {data} setData = {setData} />)}
            {step === 3 && (<Confirmation data = {data} />)}
            <div className='prev-next'>
                {step > 1 && <button className='prev' onClick={() => {setStep(step - 1)}}>Prev</button>}
                {step < 3 && <button className='next' onClick={() => {setStep(step + 1)}}>Next</button>}
            </div>
        </div>
    )
}

export default App