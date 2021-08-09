import React from 'react'

function Submit({sub,check,qstate}) {
    function finshquiz(){
        check();
        qstate([])
        sub((prev)=>{

            sub(!prev);
        })
    }
    return (
        <button className="btn btn-block" onClick={finshquiz}>Finish Quiz</button>
    )
}

export default Submit
