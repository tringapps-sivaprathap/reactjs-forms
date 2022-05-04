import React, { useState } from 'react';
import LoginDetails from './components/LoginDetails';
import PersonalDetails from './components/PersonalDetails';
import Confirmation from './components/Confirmation';

const App = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({});

    return (
        <div className='app'>
            {step === 1 && (<LoginDetails data = {data} setData = {setData} step = {step} setStep = {setStep} />)}
            {step === 2 && (<PersonalDetails data = {data} setData = {setData} step = {step} setStep = {setStep} />)}
            {step === 3 && (<Confirmation data = {data} />)}
        </div>
    );
}

export default App;