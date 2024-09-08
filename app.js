// console.log(dados[0]);
function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena na variável section. 
    // Este elemento será usado para exibir os resultados da pesquisa.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    const palavraChaveNormalizada = campoPesquisa.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = "<p>O que deseja saber sobre o Brasileirão ?!</p>"
        return
    }
    
    const apenasLetras = /^[a-zA-Z]+$/;
    if (!apenasLetras.test(campoPesquisa)) {
      section.innerHTML = "<h2>Por favor, digite apenas letras</h2>";
      return;
    } 
    
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // Itera sobre cada item (dado) na lista de dados (dados). 
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //tags = dados.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if ((titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))) {
          // Concatena uma nova div com as informações do dado atual à string de resultados.
          resultados += `
              <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p> 
                <a href="${dado.link}" target="_blank">Mais Informações</a> 
              </div>
            `;
        }
      
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui a string de resultados completa ao conteúdo HTML do elemento section.
    // Isso substitui o conteúdo anterior do elemento com os novos resultados da pesquisa.
    section.innerHTML = resultados;
  }

//

