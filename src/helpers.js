function isPrimeFunction(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  function calcularFatorialFunction(num) {
    if (num === 0 || num === 1) return 1;
  
    let fatorial = 1;
    for (let i = 2; i <= num; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  function isPalindromoFunction(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  }
  
  function calcularTabelaFunction(numero) {
    const tabela = [];
    for (let i = 1; i <= 10; i++) {
      tabela.push(numero * i);
    }
    return tabela;
  }
  
  function contarVogaisFunction(str) {
    const vogais = 'aeiou';
    let count = 0;
    for (let char of str) {
      if (vogais.includes(char.toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  
  module.exports = {
    isPrimeFunction,
    calcularFatorialFunction,
    isPalindromoFunction,
    calcularTabelaFunction,
    contarVogaisFunction,
  };
  