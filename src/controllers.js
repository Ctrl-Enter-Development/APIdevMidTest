const { isPrimeFunction, calcularFatorialFunction, isPalindromoFunction, calcularTabelaFunction, contarVogaisFunction } = require('./helpers');

function calcular(req, res) {
  const { numero1, numero2, operador } = req.body;

  if (!numero1 || !numero2 || !operador) {
    return res.status(400).json({ error: 'É necessário fornecer o número1, número2 e o operador para calcular.' });
  }

  const num1 = parseFloat(numero1);
  const num2 = parseFloat(numero2);

  let resultado;
  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num1 / num2;
      break;
    default:
      return res.status(400).json({ error: 'Operador inválido. Os operadores válidos são: +, -, *, /.' });
  }

  return res.json({ resultado });
}

function verificarPrimo(req, res) {
  const { numero } = req.body;

  if (!numero) {
    return res.status(400).json({ error: 'É necessário fornecer um número para verificar se é primo.' });
  }

  const num = parseInt(numero);
  const ehPrimo = isPrimeFunction(num);

  const primeirosPrimos = [];
  if (ehPrimo) {
    primeirosPrimos.push(num);
    let count = 1;
    let i = num + 1;
    while (count < 10) {
      if (isPrimeFunction(i)) {
        primeirosPrimos.push(i);
        count++;
      }
      i++;
    }
  }

  return res.json({ ehPrimo, primeirosPrimos });
}

function calcularFatorial(req, res) {
  const { numero } = req.body;

  if (!numero) {
    return res.status(400).json({ error: 'É necessário fornecer um número para calcular o fatorial.' });
  }

  const num = parseInt(numero);
  const fatorial = calcularFatorialFunction(num);

  return res.json({ fatorial });
}

function verificarPalindromo(req, res) {
  const { palavra } = req.body;

  if (!palavra) {
    return res.status(400).json({ error: 'É necessário fornecer uma palavra para verificar se é palíndromo.' });
  }

  const isPalindromoResult = isPalindromoFunction(palavra.toLowerCase());

  return res.json({ isPalindromo: isPalindromoResult });
}

function calcularTabela(req, res) {
  const { numero } = req.body;

  if (!numero) {
    return res.status(400).json({ error: 'É necessário fornecer um número para calcular a tabela.' });
  }

  const num = parseFloat(numero);
  const tabela = calcularTabelaFunction(num);

  return res.json({ tabela });
}

function contarVogais(req, res) {
  const { texto } = req.body;

  if (!texto) {
    return res.status(400).json({ error: 'É necessário fornecer um texto para contar as vogais.' });
  }

  const vogaisCount = contarVogaisFunction(texto.toLowerCase());

  return res.json({ vogais: vogaisCount });
}

function calcularMedia(req, res) {
  const { nota1, nota2, nota3 } = req.body;

  if (!nota1 || !nota2 || !nota3) {
    return res.status(400).json({ error: 'É necessário fornecer todas as notas para calcular a média.' });
  }

  const notas = [parseFloat(nota1), parseFloat(nota2), parseFloat(nota3)];
  const media = (notas.reduce((total, nota) => total + nota, 0)) / notas.length;

  return res.json({ media });
}

function calcularInvestimento(req, res) {
  const { capitalInicial, taxaJuros, tempoInvestimento } = req.body;

  if (!capitalInicial || !taxaJuros || !tempoInvestimento) {
    return res.status(400).json({ error: 'É necessário fornecer o capital inicial, a taxa de juros e o tempo de investimento para calcular o valor final do investimento.' });
  }

  const taxaJurosDecimal = parseFloat(taxaJuros) / 100;
  const valorFinal = capitalInicial * (1 + taxaJurosDecimal * parseInt(tempoInvestimento));

  return res.json({ valorFinal });
}

module.exports = {
  calcular,
  verificarPrimo,
  calcularFatorial,
  verificarPalindromo,
  calcularTabela,
  contarVogais,
  calcularMedia,
  calcularInvestimento,
};
