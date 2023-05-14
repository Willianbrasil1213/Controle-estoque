
class Produto {

  constructor() {
    this.id = 1;
    this.arrayproduto = []
    this.editId = null;


  }

  salvar() {
    let produto = this.lerdados();

    if (this.editId == null) {
      this.adicionar(produto)
    } else {
      this.atualizar(this.editId, produto);
    }




    this.listadados();
    this.cancelar();

  }
  listadados() {
    let tbody = document.getElementById('tbody');

    tbody.innerText = '';

    for (let i = 0; i < this.arrayproduto.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_nomeproduto = tr.insertCell();
      let td_categoria = tr.insertCell();
      let td_Tamanho = tr.insertCell();
      let td_cor = tr.insertCell();
      let td_preco = tr.insertCell();
      let td_descricao = tr.insertCell();
      let td_acao = tr.insertCell();

      td_id.innerText = this.arrayproduto[i].id;
      td_nomeproduto.innerText = this.arrayproduto[i].nomeproduto;
      td_categoria.innerText = this.arrayproduto[i].categoria;
      td_Tamanho.innerText = this.arrayproduto[i].Tamanho;
      td_cor.innerText = this.arrayproduto[i].cor;
      td_preco.innerText = this.arrayproduto[i].preco;
      td_descricao.innerText = this.arrayproduto[i].descricao;


      td_id.classList.add('center');
      td_preco.classList.add('center');
      td_Tamanho.classList.add('center');
      td_cor.classList.add('center');
      td_acao.classList.add('center');


      let imgEdit = document.createElement('img');
      imgEdit.src = 'https://cdn-icons-png.flaticon.com/128/1827/1827933.png';
      imgEdit.setAttribute("onclick", "produto.editar(" + JSON.stringify(this.arrayproduto[i]) + ")");

      let imgDelete = document.createElement('img');
      imgDelete.src = 'https://cdn-icons-png.flaticon.com/512/7887/7887076.png';
      imgDelete.setAttribute("onclick", "produto.deletar(" + this.arrayproduto[i].id + ")");

      td_acao.appendChild(imgEdit);
      td_acao.appendChild(imgDelete);

    }
  }


  adicionar(produto) {
    produto.preco = parseFloat(produto.preco)
    this.arrayproduto.push(produto);
    this.id++;

  }

  atualizar(id, produto) {
    for(let i = 0; i < this.arrayproduto.length;i++){
      if(this.arrayproduto[i].id==id){
        this.arrayproduto[i].nomeproduto = produto.nomeproduto
        this.arrayproduto[i].categoria = produto.categoria
        this.arrayproduto[i].Tamanho = produto.Tamanho
        this.arrayproduto[i].cor = produto.cor
        this.arrayproduto[i].preco = produto.preco
        this.arrayproduto[i].descricao = produto.descricao
      }
    }
  }

  editar(dados) {

    this.editId = dados.id;

    document.getElementById('produtor').value = dados.nomeproduto
    document.getElementById('categoria').value = dados.categoria
    document.getElementById('Tamanho').value = dados.Tamanho
    document.getElementById('cor').value = dados.cor
    document.getElementById('Preco').value = dados.preco
    document.getElementById('descricao').value = dados.descricao

    document.getElementById('bt1').innerText = 'Atualizar';

  }



  lerdados() {
    let produto = {}

    produto.id = this.id;
    produto.nomeproduto = document.getElementById("produtor").value;
    produto.categoria = document.getElementById("categoria").value;
    produto.Tamanho = document.getElementById("Tamanho").value;
    produto.cor = document.getElementById("cor").value;
    produto.preco = document.getElementById("Preco").value;
    produto.descricao = document.getElementById("descricao").value;

    return produto
  }

  cancelar() {
    
    document.getElementById('produtor').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('Tamanho').value = '';
    document.getElementById('cor').value = '';
    document.getElementById('Preco').value = '';
    document.getElementById('descricao').value = '';

    document.getElementById('bt1').innerText = 'Salvar'
    this.editId = null;
  }


  deletar(id) {

    if (confirm('Deseja Realmente Apagar o Produtor: ' + id)) {
      let tbody = document.getElementById('tbody');

      for (let i = 0; i < this.arrayproduto.length; i--) {
        if (this.arrayproduto[i].id == id)
          this.arrayproduto.splice(i, 1);
        tbody.deleteRow(i);

      }


    }
    console.log(this.arrayproduto.length)
  }
}






var produto = new Produto