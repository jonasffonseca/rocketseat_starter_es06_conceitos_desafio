import axios from 'axios';
async function buscaUsuario(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response);
    } catch (err) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('diego3g');