const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(function(item) {
    return item.idade;
});
console.log(idades);

const maior = usuarios.filter(function(item) {
    return item.idade > 18;
});
console.log(maior)

const work = usuarios.find(function(item) {
    return item.empresa == 'Google';
});
console.log(work);

const novasIdades = usuarios.map(function(item) {
    return ({...item, idade: item.idade * 2 })
}).filter(function(item) {
    return item.idade <= 50;
})

console.log(novasIdades);