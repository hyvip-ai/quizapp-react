import React from 'react'

function Option({ data, qindex,setanswer,ans}) {
   

    
function savedata(data){
    setanswer((prev)=>{
        console.log(prev);
        var newarr = [...prev];
        newarr[qindex] = data;
        setanswer(newarr)
        console.log(prev)
    })
}
    return (

        <div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" checked={ans[qindex]===data?true:false} value={data} id={data} onChange={()=>savedata(data)}/>
                <label className="form-check-label" htmlFor={data}>
                    {data}
                </label>
            </div>
        </div>

    )
}

export default Option
