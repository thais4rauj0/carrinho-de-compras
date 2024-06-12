let totalGeral=0; 
document.getElementById('valor-total').textContent = "R$0";
function adicionar(){
    let listaProdutos = document.getElementById('produto');
    let produto = listaProdutos.options[listaProdutos.selectedIndex].text;
    let nomeProduto = produto.split('-')[0];
    let valor = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let textoTotal = document.getElementById('valor-total');
   
    if(quantidade==''){
        alert('Informe uma quantidade do produto!');
        quantidade=0;
        document.getElementById('valor-total').textContent = "R$0";
        
    }else{
        let valorProduto = parseInt(valor) * parseInt(quantidade);
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${valor}</span></section>`;
        totalGeral = totalGeral+valorProduto;
        textoTotal.textContent = `R$${totalGeral}`
    }
}

function limpar(){
    totalGeral=0;
    document.getElementById('quantidade').value = '';
    document.getElementById('valor-total').textContent = 'R$0';
    document.getElementById('lista-produtos').innerHTML = ``;

}
