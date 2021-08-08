import React from 'react'

function Qcard({data,changeind,activeindex}) {
    function showquestion(index){
        console.log(index)
        changeind(index)
    }
    return (
       

            <button className={activeindex===data?"qdata activebutton":"qdata"} onClick={()=>showquestion(data)}>Question {data+1}</button>
       
    )
}

export default Qcard
