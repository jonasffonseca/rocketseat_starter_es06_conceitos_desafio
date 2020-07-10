import axios from 'axios';
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response);
        } catch (err) {
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('jonasffonseca/Ecoleta_NLW');
Github.getRepositories('rocketseat/dslkvmskv');