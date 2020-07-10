import axios from 'axios';

class Api {
    static async getUserFromGithub(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response);
        } catch (err) {
            console.warn('Usuário não existe');
        }
    }
}

Api.getUserFromGithub('diego3g');
Api.getUserFromGithub('diego3g124123');