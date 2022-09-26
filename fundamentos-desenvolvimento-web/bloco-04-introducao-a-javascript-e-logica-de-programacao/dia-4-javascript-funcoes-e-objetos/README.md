# Requesitos Exercícios dia 04:

- [X] Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

    - Adição (a + b)
    - Subtração (a - b)
    - Multiplicação (a * b)
    - Divisão (a / b)
    - Módulo (a % b)

- [X] Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

- [X] Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

- [X] Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

- [X] Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

## Exercícios For/in e Objetos

- [X] Usando o objeto abaixo, faça os exercícios a seguir:

    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };

    - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave.

- [X] Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. 

- [X] Faça um for/in que mostre todas as chaves do objeto. 

- [X] Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. 

- [X] Usando o objeto abaixo, faça os exercícios a seguir:

    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
            {
                titulo: 'O Pior Dia de Todos',
                autor: 'Daniela Kopsch',
                editora: 'Tordesilhas',
            },
        ],
    };

    - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

- [X] Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:

    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    }

    - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

## Exercícios Funções dia 4.4:

- [X] Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

- [X] Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

    - Array de teste: [2, 3, 6, 7, 10, 1];