import React from 'react'
import '../index.css'
import Detail from './Detail'
import Submit from "./Submit";
import Next from './Next';
import Previous from './Previous';
function Question({totaldata,index,chnage,myanswers,ans,finish,cheks,qsatet}) {
  
   
  
    return (
        <div className="question container" style={{border:"none"}}>
            <h3 className="singleques">Question {index+1}</h3>
            <Detail question={totaldata[index]} index = {index} myanswers={myanswers} ans={ans}/>
            <div className="buttons">
            <Previous indexchange={chnage} total={totaldata}/>
            <Next indexchange={chnage} total={totaldata}/>
            </div> 
            <Submit sub = {finish} check={cheks} qstate={qsatet}/>
            
        </div>
    )
}

export default Question
