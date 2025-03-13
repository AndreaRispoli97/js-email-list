console.log('Andrea');


const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const emailList = document.getElementById('email-list');
const newEmail = document.getElementById('new-email');



function randomEmails(){
   let emails = '';
    for (let i = 0; i < 10; i++) {
        
        axios.get(endpoint)
            .then((response) => {
                let email = response.data.response;
                console.log(email);
    
                emails += `<li class = "col"> ${email}</li>`;
    
                emailList.innerHTML = emails;
    
            })
            .catch((error) => {
                console.error('Errore');
            });
    
    }
}

randomEmails();

newEmail.addEventListener('click', randomEmails);