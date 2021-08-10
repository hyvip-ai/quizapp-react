import React from 'react'

function Next({indexchange,total}) {
    function newstate(){
        
        
        indexchange((prev)=>{
            if(prev === total.length - 1 ){
                indexchange(0)
            }
            else{
                indexchange(prev+1)
            }
        })
    }
    return (
       <button className="btn btn-block" style={{backgroundColor:'green'}} onClick={newstate}>Next</button>
    )
}

export default Next
