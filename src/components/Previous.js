import React from 'react'

function Previous({indexchange,total}) {
    function goprev(){
        indexchange((prev)=>{
            if(prev===0){
                indexchange(total.length-1)
            }
            else{
                indexchange(prev-1)
            }
        })
    }
    return (
       <button className="btn btn-block" style={{backgroundColor:'red'}} onClick={goprev}>Previous</button>
        
    )
}

export default Previous
