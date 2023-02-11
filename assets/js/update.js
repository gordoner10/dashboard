let runScripts = () => {
let chart_bars =  document.getElementById( "chart-bars" );
console.log( chart_bars );

let icons = document.getElementsByTagName( "i");
console.log(icons);

let cards = document.getElementsByClassName( "card" );
console.log(cards);

};

let modifyText= () => {
let listOfP =document.getElementsByTagName( "p" );
let elementP = listOfP[3];
elementP.innerHTML ="Dinero Actual";

let listOfH4 = document.getElementsByTagName( "h4");
let elementH4  = listOfH4[0];
elementH4.innerHTML ="$301k";

};
let updateData= () => {
    let data = [{
        title: 'Usuarios actuales',
        value: '3,200'
      },
      {
        title: 'Nuevos clientes',
        value: '4,215'
      },
      {
        title: 'Ventas',
        value: '$121,520'
      }];  
let [ users, clients, sales ] = data;
let { title: title_users , value: value_users } = users;
let { title: title_clients , value: value_clients } = clients;
let { title: title_sales , value: value_sales } = sales;

let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 
let listOfElements = document.getElementsByClassName('text-end pt-1') 

let [ , second, third, fourth ] = listOfElements;

second.innerHTML = message_users;
third.innerHTML = message_clients;
fourth.innerHTML = message_sales;

}

let procesarCambio=() => {
    let cambios = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer'
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer'
        }
      ];
    let porcentaje_de_cambio = (valor_actual,valor_previo)=>{
        let valor = (valor_actual - valor_previo)*100/valor_previo;
        let valor2 = valor.toFixed(2);
        return(valor2);
    };
    let clase_cambio =  (porcentaje) =>{
        let clase = porcentaje > 0 ? 'text-success':'text-danger';
        return clase;
    }
    let [ dinero, users, clients, sales ] = cambios;

    let { valor_previo: valor_previo1 , valor_actual: valor_actual1, mensaje_tiempo : mensaje_tiempo1} = dinero;
    let { valor_previo: valor_previo2 , valor_actual: valor_actual2, mensaje_tiempo : mensaje_tiempo2} = users;
    let { valor_previo: valor_previo3 , valor_actual: valor_actual3, mensaje_tiempo : mensaje_tiempo3} = clients;
    let { valor_previo: valor_previo4 , valor_actual: valor_actual4, mensaje_tiempo : mensaje_tiempo4} = sales;


let message_dinero =`<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(valor_actual1,valor_previo1))} font-weight-bolder"> ${porcentaje_de_cambio(valor_actual1,valor_previo1)} </span> ${mensaje_tiempo1} </p>`;
let message_users =`<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(valor_actual2,valor_previo2))} font-weight-bolder"> ${porcentaje_de_cambio(valor_actual2,valor_previo2)} </span> ${mensaje_tiempo2} </p>`;
let message_clients =`<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(valor_actual3,valor_previo3))} font-weight-bolder"> ${porcentaje_de_cambio(valor_actual3,valor_previo3)} </span> ${mensaje_tiempo3} </p>`;
let message_sales =`<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(valor_actual4,valor_previo4))} font-weight-bolder"> ${porcentaje_de_cambio(valor_actual4,valor_previo4)} </span> ${mensaje_tiempo4} </p>`;
let listOfElements = document.getElementsByClassName('card-footer p-3');

let [ first, second, third, fourth ] = listOfElements;

first.innerHTML = message_dinero;
second.innerHTML = message_users;
third.innerHTML = message_clients;
fourth.innerHTML = message_sales;


}
modifyText();
runScripts();
updateData();
procesarCambio();