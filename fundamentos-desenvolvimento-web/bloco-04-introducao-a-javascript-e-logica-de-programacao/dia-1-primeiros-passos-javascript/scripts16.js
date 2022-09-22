const custoProduto = 1200;
      valorVenda = 1900;

if (custoProduto < 0 || valorVenda < 0) {
    console.log("Erro! Valor negativo inserido!");
}
else {
    let quantidadeVenda = 1000;
    valorCustoTotal = custoProduto + (custoProduto * 0.2);
    lucro = valorVenda - valorCustoTotal;
    lucroDessaVenda = lucro * quantidadeVenda;
    console.log("Seu lucro total nessa venda é de: ", lucroDessaVenda, " reais.");
}

// Tudo certo!