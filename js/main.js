console.log('Andrea');


const emailList = document.getElementById('email-list');

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then((response) => {
    const email = response.data.response;
    console.log(email);

    emailList.innerHTML += `<div class = col> ${email.element}</div>`;
})
.catch((error) => {
    console.error('Errore');
});