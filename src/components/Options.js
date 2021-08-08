import React from 'react'
import Option from './Option'
function Options({opts}) {
    return (
        opts.map((item,index)=>{return <Option key={index} data={item} ind={index}/>})   
    )
}

export default Options
