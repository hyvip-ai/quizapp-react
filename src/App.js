
import { useState } from "react";
import Generate from "./components/Generate";
import Quizstart from "./components/Quizstart";
import Question from "./components/Question";
function App() {
  const [qstate, qupdatestate] = useState([])
  
  const [genvis, setgenvis] = useState(true)
  const [qindex, setindex] = useState(0)

  const correctasnwers = []
  async function callurl(url) {
    console.log(url)
    var data = await fetch(url);
    var res = await data.json();

    var newArray = [...res.results]
    var copy = []
    qupdatestate(newArray)
    for (let item of newArray) {
      correctasnwers.push(item.correct_answer);
      copy.push("false")
    }

  
  }

  return (
    <div>
      {genvis ? <Generate setvis={setgenvis} updateurl={callurl} /> : null}
      {qstate.length !== 0 ? <Quizstart quizdata={qstate} changeindex={setindex} acin={qindex} /> : null}
      {qstate.length !== 0 ? <Question totaldata={qstate} chnage={setindex} index={qindex}/> : null}

    </div>
  );
}

export default App;
