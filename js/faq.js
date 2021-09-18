//faq accordian section

const questions=document.querySelectorAll('.questions');
// console.log(questions);

questions.forEach(question =>question.addEventListener('click',accordian));

function accordian(){
   this.classList.toggle("is-open");

   const answer=this.nextElementSibling;
   
   if(answer.style.maxHeight){
       answer.style.maxHeight=null;
   }
   else{
    answer.style.maxHeight=answer.scrollHeight+ "px";
   }

}


//email input validation

const form=document.querySelector('.formValidate');
const email=document.querySelector('#email');
const message=document.querySelector('.message');

const regex=/\S+@\S+\.\S+/;

let isValid=form.addEventListener('click',(e)=>{
    if(email.value.match(regex)){
        email.value='';
        return true;
    }
    else{
        e.preventDefault();
        message.classList.add('errorMessage');
        email.style.border='1px solid hsl(0, 94%, 66%)';
        return false;
    }
});

email.addEventListener('click',function(){
    message.classList.remove('errorMessage');
}) 

