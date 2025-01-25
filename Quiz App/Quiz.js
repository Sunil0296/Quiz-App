const Questions = [{

'question' : "Which of the following is a Mark-up Language ?",
'a' : "HTML",
'b' : "Javascript",
'c' : "CSS",
'd' : "PHP",
'correct' : "a"
},


{
'question' : "Which year javascript launched ?",
'a' : "1996",
'b' : "1995",
'c' : "1994",
'd' : "none of the above",
'correct' : "b"
},

{
'question' : "What does CSS stands for ?",
'a' : "Cascading Style Sheets",
'b' : "Hyper Text Mark-up Language",
'c' : "Jason Object Notation",
'd' : "Helicopter Terminals Motorboats",
'correct' : "a"
}]


let index = 0;
let total = Questions.length;
let rigth = 0, wrong = 0
const quesbox = document.getElementById("quesbox")
const optionInput  = document.querySelectorAll('.options')
const LoadQusetion=()=>{
    if(index=== total){
        return endQuiz();
    }
    reset()
const data = Questions[index]
console.log(data);
quesbox.innerText = `${index+1}) ${data.question}`;
optionInput[0].nextElementSibling.innerText = data.a;
optionInput[1].nextElementSibling.innerText = data.b;
optionInput[2].nextElementSibling.innerText = data.c;
optionInput[3].nextElementSibling.innerText = data.d

}



const submitQuiz=()=>{
    const data = Questions[index]

    const ans = getAns()
    if(ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    LoadQusetion();
    return;
}

const getAns=()=>{
    let answer;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
         answer = input.value;                
            }
        }
    )
    return answer
}

const reset=()=>{
    optionInput.forEach(
        (input)=>{
         input.checked= false
        }
    )
}


const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3>THANK YOU</h3>
   <h2> ${rigth}/ ${total} are correct </h2>
    `
}

LoadQusetion()