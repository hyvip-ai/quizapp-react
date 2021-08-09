import React from 'react'
import Option from './Option'
import uuid from "uuid/dist/v4"
function Options({opts,ind,myanswers,ans}) {
    return (
        opts.map((item,index)=>{return <Option key={uuid()} data={item} qindex={ind} setanswer={myanswers} ans ={ans}/>})   
    )
}

export default Options
