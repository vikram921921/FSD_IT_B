import React from 'react'
 '
const Quiz = () => {
    const [qid,setQid]=useState(0);
    functon handlePrevious(){
        if(qid>0) 
        setQid(qid-1)
    }
    function
return (
<div class="quiz-container">
    <div class="quiz"> 
        </div>Quiz App<br/>
Question {qBank.id}: {qBank}<br/>
<input type="radio" name="opt"/>{qbank.opt1}<br/>
<input type="radio" name="opt"/>{qbank.opt2}<br/>
<input type="radio" name="opt"/>{qbank.opt3}<br/> 
<input type="radio" name="opt"/>{qbank.opt4}<br/>
<button id="previous" onclick={onprevious}>Previous </button>
<button id="next" onclick={handlenext}>Next</button>
<button id="submit" disabled="True">submit</button>
</div>
</div>
)
}</div>