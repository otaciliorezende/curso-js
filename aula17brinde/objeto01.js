let amigo = {nome: 'Otacíio',
sexo: 'M',
peso: 99.8,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)