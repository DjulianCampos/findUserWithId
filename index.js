function getUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(data => data.json())
        .catch(error => console.log(error));
}


// pega o valor do submit como function e depois mostra o resultado na tela
let sub = document.querySelector('#submit');
sub.addEventListener('click', async () => {
    let nmr = document.querySelector('#nmr').value;
    if (nmr >= 11) {
        nmr = 10;
        alert(`O número deve ser menor que 11, considerando o número 10.`);
    } else if (nmr <= 0) {
        nmr = 1
        alert(`O número deve ser maior que 0, considerando o número 1.`);
    }
    let user = await getUser(nmr);
    document.querySelector('#res').innerHTML = `<p>${user.name}</p>`;
    document.querySelector('#res').innerHTML += `<p>${user.email}</p>`;
});