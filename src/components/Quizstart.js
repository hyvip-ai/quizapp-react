import React from 'react'
import Qcards from './Qcards'

function quizstart({quizdata,changeindex,acin}) {
    
    return (
        <div className="container" style={{border:'none'}}>
            <h1>Best Of Luck For Your Quiz</h1>
            <div className="ques">
            <Qcards data={quizdata} setind={changeindex} active={acin}/>
            </div>
          
        </div>
    )
}

export default quizstart
