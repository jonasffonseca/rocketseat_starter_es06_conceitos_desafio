// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async() => {
    for (var i = 1; i <= 3; i++) {
        await delay();
        console.log(i + 's');
    }
}

umPorSegundo();