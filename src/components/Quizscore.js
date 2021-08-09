import React from 'react'
import '../index.css'
function QuizScore({msg}) {
    return (
        <div className="container" style={{border:'none'}}>
            <h3 className="bor" style={{textAlign:'center'}}>{msg}</h3>
        </div>
    )
}

export default QuizScore
