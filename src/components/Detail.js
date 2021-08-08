import React from 'react'
import Options from './Options'
function Detail({question}) {
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    var answers = [...question.incorrect_answers,question.correct_answer]
    var newopt = shuffle(answers)
    return (
        <div className="question">
            <h6>{question.question}</h6>
            
                <div className="answers">
                <Options opts = {newopt}/>
                </div>
            
        </div>
    )
}

export default Detail
