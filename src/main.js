const content = document.querySelector("#boxContent");
const btGrid = document.querySelector("#btGrid");
const btList = document.querySelector("#btList");


let viewType;

let contadora=0;
let cont = 0;


function view(userView){
    if(screen.width<500){
        userView="celular"
        console.log('celular')
        
    }
        
    if(userView === "grid"){
       
        viewType='grid';
        
        btGrid.classList.add('is-depressed');
        btList.classList.remove('is-depressed');
        content.innerHTML = 
        
           ` <div class="boxGrid">
                <div class="containerElements"></div>
            </div>`
        
       
        const container = document.querySelector('.containerElements') 
            
            container.innerHTML+= conteudoPagina.map((elemento)=>
            
           
        `       
                <div class="contents">
                        
                        <img class="imgContents" src="img/${elemento.image}"><br>
                    <a href="${elemento.link}" 
                            class="links" target="_blank"><h4 class="titleElement">${elemento.title} </h4>
                    </a>
                                        
                    <button class="detalhes" onclick="mostrarDetalhes(${elemento.id})">+detalhes</button>
                    <div class="contentDetails" id="${elemento.id}"></div>
                 </div>
                 
        `
      
        ).join('');
        
        
        
        contentDetails =document.querySelector(".contentDetails")
    } else{
        viewType='list';
        
        btList.classList.add('is-depressed');
        btGrid.classList.remove('is-depressed');
        content.innerHTML = `
        <div class="boxList">
            <div>
                <table id="headerList">
                    <thead>
                        <tr>
                            <th class="List">Nome</th>
                            <th class="List">Categoria</th>
                            <th class="List">Atualização</th>
                            <th class="List">Responsável</th>
                        </tr>
                    </thead>
                    <tbody class="contentTable"></tbody>
                </table>
            </div>
        </div>
            `
     
        const contentList = document.querySelector('.contentTable')
        contentList.innerHTML+= conteudoPagina.map((elemento)=>

            `
            <tr class="contentList">
                <td> 
                    
                    <a class="links" href="${elemento.link}" target="_blank"> 
                        <span class="titleElement">${elemento.title}</span>
                    </a>
                </td>
                <td>${elemento.categoria}</td>
                <td>${elemento.atualizacao}</td>
                <td>${elemento.responsavel}</td>
            </tr>
            `).join('');
          
        if(userView === "celular"){
        
        content.innerHTML = `
        <div class="boxList">
            <div>
                <table id="headerList">
                    <thead>
                        <tr>
                            <th class="List">Nome</th>
                     
                        </tr>
                    </thead>
                    <tbody class="contentTable"></tbody>
                </table>
            </div>
        </div>
            `
     
        const contentList = document.querySelector('.contentTable')
        contentList.innerHTML+= conteudoPagina.map((elemento)=>

            `
            <tr class="contentList">
                <td> 
                    
                    <a class="links" href="${elemento.link}" target="_blank"> 
                        <span class="titleElement">${elemento.title}</span>
                    </a>
                    <button class="detalhes" onclick="mostrarDetalhes(${elemento.id})">+</button>
                    <div class="contentDetails" id="${elemento.id}"></div>
                    
                </td>
               
            </tr>
            `).join('');
        }
    }            
    
    
  

x=[]
x = document.getElementsByClassName('titleElement');
divX = document.getElementsByClassName('contents');
listX = document.getElementsByClassName("contentList")


}

function search(){
   
    let wordSearch = document.getElementById("inputSearch").value;
    wordSearch = wordSearch.toLowerCase();
    
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(wordSearch)) {
            
            x[i].style.display="none";

            if(viewType==='grid'){
                divX[i].style.display="none";
            } else {
                listX[i].style.display="none";
            }
            
            
        }
        else {
            x[i].style.display="block";
            if(viewType==='grid'){
                divX[i].style.display="block"; 
            }else{
                listX[i].style.display="table-row";  
            }
            
                        
        }
    }
}

function mostrarDetalhes(id){
    organizarId = conteudoPagina.sort(function(a,b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });
    
    
    document.getElementById(id).innerHTML = `
        <p>
        <b>Categoria:</b> ${organizarId[id].categoria}  <br>
        <b>Atualização:</b> ${organizarId[id].atualizacao} <br>
        <b>Responsável:</b> ${organizarId[id].responsavel}
    `
    document.getElementById(id).classList.toggle('aberto')
}



function filtrar(value){
    if(value === 'Todos'){
        conteudoPagina=elementos;
    }
    if(value==='Custos'){
        conteudoPagina=conteudoCustos;
    }
    if(value==='Processos'){
        conteudoPagina=conteudoProcessos;
    }
    if(value==='Segurança'){
        conteudoPagina=conteudoSeguranca
    }
    view(viewType)
}

