# APIdevMidTest
API disponível para avaliação de conhecimento


Como Rodar a API
Para rodar a API, siga os passos abaixo:

Instale o Node.js em sua máquina. Você pode baixar a versão mais recente do Node.js em https://nodejs.org/

Versão Node.js v20.5.0 

Clone este repositório em seu computador ou baixe o código como um arquivo ZIP.

Acesse a pasta do projeto via terminal.

Instale as dependências do projeto usando o comando:

    npm install

Inicie o servidor da API com o seguinte comando:

    npm start

A API estará rodando em http://localhost:3000.

Agora você pode realizar as requisições descritas acima utilizando um cliente HTTP (como Postman, Insomnia, etc.) ou integrar a API em seu projeto.

Lembre-se de substituir http://localhost:3000 pela URL da API caso esteja rodando em um servidor diferente.




Requisições Disponíveis
A API suporta as seguintes requisições:

1. Calcular Operações Matemáticas
Descrição: Realiza operações matemáticas básicas (adição, subtração, multiplicação e divisão) com dois números e um operador.

Método: POST

URL: http://localhost:3000/calcular

Corpo da Requisição:

    {
     "numero1": 5,
     "numero2": 5,
     "operador": "*"
    }

Resposta de Exemplo:

    {
    "resultado": 25
    }


2. Verificar se um Número é Primo
Descrição: Verifica se um número fornecido é um número primo e retorna os primeiros números primos.

Método: POST

URL: http://localhost:3000/verificarPrimo

Corpo da Requisição:

    {
    "numero": 17
    }


Resposta de Exemplo:

    {
    "ehPrimo": true,
    "primeirosPrimos": [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    }

3. Calcular o Fatorial de um Número
Descrição: Calcula o fatorial de um número fornecido.

Método: POST

URL: http://localhost:3000/calcularFatorial

Corpo da Requisição:

    {
    "numero": 5
    }

Resposta de Exemplo:

    {
    "fatorial": 120
    }

4. Verificar se uma Palavra é um Palíndromo
Descrição: Verifica se uma palavra fornecida é um palíndromo (lê o mesmo de trás para frente).

Método: POST

URL: http://localhost:3000/verificarPalindromo

Corpo da Requisição:

    {
    "palavra": "arara"
    }

Resposta de Exemplo:

    {
    "isPalindromo": true
    }

5. Calcular a Tabela de um Número
Descrição: Calcula a tabela de um número fornecido, de 1 a 10.

Método: POST

URL: http://localhost:3000/calcularTabela

Corpo da Requisição:

    {
    "numero": 7
    }

Resposta de Exemplo:

    {
    "tabela": [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
    }

6. Contar Vogais em uma String
Descrição: Conta o número de vogais em uma string fornecida.

Método: POST

URL: http://localhost:3000/contarVogais

Corpo da Requisição: 

    {
    "texto": "Olá, mundo!"
    }

Resposta de Exemplo:

    {
    "vogais": 3
    }


7. Calcular a Média das Notas
Descrição: Calcula a média das notas de um aluno em três disciplinas diferentes.

Método: POST

URL: http://localhost:3000/calcularMedia

Corpo da Requisição:

    {
    "nota1": 7.5,
    "nota2": 8.0,
    "nota3": 6.5
    }

Resposta de Exemplo:

    {
    "media": 7.33
    }

8. Calcular o Valor Final de um Investimento
Descrição: Calcula o valor final de um investimento com base no capital inicial, taxa de juros e tempo de investimento (em meses).

Método: POST

URL: http://localhost:3000/calcularInvestimento

Corpo da Requisição:

    {
    "capitalInicial": 1000,
    "taxaJuros": 0.5,
    "tempoInvestimento": 12
    }

Resposta de Exemplo:

    {
    "valorFinal": 1062.89
    }








