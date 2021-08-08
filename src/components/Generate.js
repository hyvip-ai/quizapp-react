import React from 'react'
import '../index.css'
import { useState } from 'react'
function Generate({setvis,updateurl}) {
    const [num, setnum] = useState(10)
    function createurl(){
        var qnum = num;
        var category = document.getElementById("category").value
        var type= document.getElementById("type").value
        var difficulty = document.getElementById("difficulty").value
        // console.log(num,category,type,difficulty)
        var url = `https://opentdb.com/api.php?amount=${qnum}&category=${category}&difficulty=${difficulty}&type=${type}`
        // console.log(url)
        setvis(false)
        updateurl(url)
    }
    return (
        <div className="container">
            <h1>Your Own Quiz Generator</h1>
            <form className="form">
            <div className="mb-3">
                <label className="form-label">Enter The Number Of Questions</label>
                <input type="text" className="form-control" placeholder="Enter The Number Of Questions" value={num} onChange={(e)=>{setnum(e.target.value)}} id="num"/>
                </div>
               
                    <select className="form-select" aria-label="Default select example" id="category">
                        <option value="9" defaultValue>Select Question Category</option>
                        <option value="9">General Knowledge (Default)</option>
                        <option value="31">Japanese Anime and Manga</option>
                        <option value="19">Mathamatics</option>
                        <option value="30">Scientific Gadgets</option>
                        <option value="12">Music</option>
                    </select>
                    <select className="form-select" aria-label="Default select example" id="difficulty">
                    <option value="easy" defaultValue>Select Difficulty</option>
                    <option value="easy">Easy (Deafult)</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                    </select>
                    <select className="form-select" aria-label="Default select example" id="type">
                        <option value="multiple" defaultValue>Select Question Type</option>
                    <option value="multiple">Multiple Choice (Deafult)</option>
                    <option value="boolean">True / False</option>
                    </select>
                    <input type="button" value="Create Quiz" className="btn btn-block" onClick={createurl}/>
            </form>
        </div>
    )
}

export default Generate
