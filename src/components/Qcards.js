import React from 'react'
import Qcard from './Qcard'
function Qcards({data,setind,active}) {
    return (
        data.map((item,index)=>{
            return <Qcard key={index} data={index} changeind={setind} activeindex={active}/>
        })
    )
}

export default Qcards
