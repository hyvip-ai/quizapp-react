
import { useState,useEffect } from "react";
import Generate from "./components/Generate";
import Quizstart from "./components/Quizstart";
import Question from "./components/Question";
import Quizscore from "./components/Quizscore";
import Spinner from "./components/Spinner";
function App() {
  const [qstate, qupdatestate] = useState([])
  const [myanswer, setmyanswer] = useState([])
  const [genvis, setgenvis] = useState(true)
  const [qindex, setindex] = useState(0)
  const [showscore, setscore] = useState('')
  const [correctanswers, setcorrectanswers] = useState([])
  const [spinner, setspinner] = useState(false)
  var score = 0 

  var final = ''
  useEffect(() => {
    console.log('asche')
  }, [qstate,genvis,qindex]) 
  // var myanswers = []
 

  async function callurl(url) {
    setspinner(true)
    console.log(url)
    var data = await fetch(url);
    var res = await data.json();
    setspinner(false)
    var newArray = [...res.results]
    
    qupdatestate(newArray)
    var copy = []
    for(let item of newArray) {
      console.log(item.correct_answer)
      copy.push(item.correct_answer);
   
      // myanswers.push(false)
    }
    setcorrectanswers(copy)
 
  
  }
  function checkscore(){
    console.log(correctanswers)
    console.log(myanswer)
    console.log("score chgeck hocche")
    for(let i=0;i<correctanswers.length;i++){
      if(correctanswers[i]===myanswer[i]){
        score++;
      }
    }
    final = `Your Score is ${score} out of ${correctanswers.length}`

    setscore(`Your Score is ${score} out of ${correctanswers.length}`)
     console.log(final)
  }

  return (
    <div>
      {genvis ? <Generate setvis={setgenvis} updateurl={callurl} /> : null}
      {spinner? <Spinner/>:null}
      {qstate.length !== 0 ? <Quizstart quizdata={qstate} changeindex={setindex} acin={qindex} /> : null}
      {qstate.length !== 0 ? <Question totaldata={qstate} finish={setgenvis} chnage={setindex} index={qindex} ans={myanswer} myanswers={setmyanswer} cheks={checkscore} qsatet={qupdatestate}/> : null}
      {showscore!==''?<Quizscore msg={showscore}/>:null}
    </div>
  ); 
}

export default App;
