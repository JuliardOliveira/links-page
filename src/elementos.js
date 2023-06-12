let elementos = [
// 1    
    {
        id:0,
        image: "Acompanhamento_APR.jpeg",
        link: "https://app.powerbi.com/reportEmbed?reportId=a23d2f98-f5fd-45a3-a33d-c37dae190479&autoAuth=true&ctid=e7c411a6-9013-4967-a5b1-3d08f9edc13e",
        title:"APR",
        categoria:"Processos",
        atualizacao:"Segunda-feira e Quinta-feira",
        responsavel:"Planejador(a)"

    },
//2
    {
        id:1,
        image: "Aprovisionamento.jpg",
        link: "https://app.powerbi.com/reportEmbed?reportId=8f197aac-c996-4f75-9fb7-1e4d4bee9d6d&autoAuth=true&ctid=e7c411a6-9013-4967-a5b1-3d08f9edc13e",
        title:"Aprovisionamento",
        categoria:"Processos",
        atualizacao:"Segunda-feira",
        responsavel:"Aprovisionador(a)"
    },
//3    
    {
        id:2,
        image: "Acompanhamento_Carteira_Serviços.jpeg",
        link: "https://app.powerbi.com/reportEmbed?reportId=c453b2a9-4c96-4912-8b3f-01e45de52176&autoAuth=true&ctid=e7c411a6-9013-4967-a5b1-3d08f9edc13e",
        title:"Carteira Serviços",
        categoria:"Processos",
        atualizacao:"Segunda-feira",
        responsavel:"Planejador(a)"
    },
//4    
    {
        id:3,
        image: "Acompanhamento_Laudos.PNG",
        link: "https://app.powerbi.com/reportEmbed?reportId=3c8d75a2-f8f8-4dda-bf4c-0bbdd857fd0d&autoAuth=true&ctid=e7c411a6-9013-4967-a5b1-3d08f9edc13e",
        title:"Laudos - Analises Óleos",
        categoria:"Processos",
        atualizacao:"Quarta-feira",
        responsavel:"Planejador(a)"
    },
//5    
    {
        id:4,
        image: "Acompanhamento_Manutencao_Lineares.jpeg",
        link: "https://app.powerbi.com/reportEmbed?reportId=5beafd10-bfcd-43fc-aa3f-d7f9615e5087&autoAuth=true&ctid=e7c411a6-9013-4967-a5b1-3d08f9edc13e",
        title:"Manutenções Lineares",
        categoria:"Processos",
        atualizacao:"Quarta-feira",
        responsavel:"Planejador(a)"
    },
//6    
    {
        id:5,
        image: "kit_Incendio.PNG",
        link: "https://app.powerbi.com/reportEmbed?reportId=e66593b3-67bb-4384-91d3-eaf08e83dea9&autoAuth=true&ctid=e7c411a6-9013-4967-a5b1-3d08f9edc13e",
        title:"Revisões Kit Incêndio",
        categoria:"Segurança",
        atualizacao:"Quarta-feira",
        responsavel:"Planejador(a)"
    },
//7    
    {
        id:6,
        image:  "Backlog.jpg",
        link: "https://app.powerbi.com/reportEmbed?reportId=27502a06-2550-46c9-839a-734fc1be3c7f&autoAuth=true&ctid=e7c411a6-9013-4967-a5b1-3d08f9edc13e ",
        title:"Backlog",
        categoria:"Processos",
        atualizacao:"Diária",
        responsavel:"Programador(a)"
    },
//8    
    {
        id:7,
        image:  "em_desenvolvimento.png",
        link: "",
        title:"Componentes Orçados",
        categoria:"Processos",
        atualizacao:"Segunda-feira",
        responsavel:"Planejador(a)"
    },


//9    
    {
        id:8,
        image: "Controle_Devolucoes.PNG",
        link: "https://app.powerbi.com/reportEmbed?reportId=ab0e6aa2-d67d-4bce-8724-99c2d315cfcf&autoAuth=true&ctid=e7c411a6-9013-4967-a5b1-3d08f9edc13e",
        title:"Devoluções Equipamentos",
        categoria:"Processos",
        atualizacao:"Diária",
        responsavel:"Planejador(a)"
        
    },
//10    
    {
        id:9,
        image:   "Controle_Lubrificantes.PNG",
        link: "https://app.powerbi.com/reportEmbed?reportId=9fad5e7b-a949-438d-8173-1bfcbf29cfd8&autoAuth=true&ctid=e7c411a6-9013-4967-a5b1-3d08f9edc13e",
        title:"Lubrificantes",
        categoria:"Processos",
        atualizacao:"Segunda-feira",
        responsavel:"Controlador(a)"
    },
//11    
    {
        id:10,
        image:  "MPP_LP 180.jpg",
        link: "https://app.powerbi.com/reportEmbed?reportId=4502dbff-dbbd-4ef4-8639-d6c61b24dfc8&autoAuth=true&ctid=e7c411a6-9013-4967-a5b1-3d08f9edc13e",
        title:"MPP_LP 180",
        categoria:"Segurança",
        atualizacao:"Quarta-feira",
        responsavel:"Programador(a)"
    },
//12
    {
        id:11,
        image:  "Controle_MSV.PNG",
        link: "https://app.powerbi.com/reportEmbed?reportId=1461dfb2-4659-488b-a477-b62380dac68f&autoAuth=true&ctid=e7c411a6-9013-4967-a5b1-3d08f9edc13e",
        title: "MSV",
        categoria:"Processos",
        atualizacao:"Terça-feira",
        responsavel:"Planejador(a)"
    },
//13
    {
        id:12,
        image:  "Controle_Notas_Podeer_Terceiro.PNG",
        link: "https://app.powerbi.com/reportEmbed?reportId=63b2b97d-df8d-4efa-9633-bf639ff6b780&autoAuth=true&ctid=e7c411a6-9013-4967-a5b1-3d08f9edc13e",
        title:"Notas Poder Terceiros",
        categoria:"Processos",
        atualizacao:"Sexta-feira",
        responsavel:"Planejador(a)"
    },
//14
    {
        id:13,
        image:  "em_desenvolvimento.png",
        link: "",
        title:"Orçamentos Componentes",
        categoria:"Custos",
        atualizacao:"Sexta-feira",
        responsavel:"Planejador(a)"
    },
//15
    {
        id:14,
        image:  "Ordens Condicionais.jpg",
        link: "https://app.powerbi.com/reportEmbed?reportId=a830d9f5-873a-42fc-83b5-53a0e4ab152e&autoAuth=true&ctid=e7c411a6-9013-4967-a5b1-3d08f9edc13e",
        title:"Ordens Condicionais",
        categoria:"Processos",
        atualizacao:"Diária",
        responsavel:"Programador(a)"
    },
//16
    {
        id:15,
        image:  "em_desenvolvimento.png",
        link: "",
        title:"Pneus",
        categoria:"Processos",
        atualizacao:"Segunda-feira",
        responsavel:"Controlador(a)"
    }

]


elementos.sort(function(a,b) {
    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
});
let conteudoPagina=elementos;

let conteudoCustos= conteudoPagina.filter(conteudo => conteudo.categoria == "Custos");
console.log(conteudoCustos)

let conteudoProcessos= conteudoPagina.filter(conteudo => conteudo.categoria == "Processos");
console.log(conteudoProcessos)

let conteudoSeguranca= conteudoPagina.filter(conteudo => conteudo.categoria == "Segurança");
console.log(conteudoSeguranca)