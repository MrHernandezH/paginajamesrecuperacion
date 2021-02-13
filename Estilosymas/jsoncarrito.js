$(document).ready( function (){  
  var articulos=[
      {
          electorodomestico:"Estufa",
          descripcion:"Estufa a gas 76 ",
          precio:"Q 4000.00"
        },
      {
          
          electorodomestico:"MicoroOnda",
          descripcion:"Microondas 0.7 pies³ Silver MabeDiseño moderno y funcional.",
          precio:"Q 2000.00"
      },
      {
          
            electorodomestico:"Refrigerador",
          descripcion:"Refrigerador Automático 15 pies³ Black Stainless Steel Mabe",
          precio:"Q 8000.00"
      }
      
  ];
  
for(var x in articulos){
    console.log(articulos[x]);
    var plantilla = `<article id="articulo">
                        <h2>${articulos[x].electorodomestico}</h2>
                        <span>${articulos[x].descripcion}</span>
                        <p>${articulos[x].precio}</p>
 </article>`;
        console.log(plantilla);
$("#posters").append(plantilla);
}  


localStorage.setItem("Elctorodomestico", "Estufa");
localStorage.setItem("Descripcion", "Estufa");
localStorage.setItem("Precio", "Q4000.00");

localStorage.setItem("Elctorodomestico", "Microonda");
localStorage.setItem("Descripcion", "Microonda");
localStorage.setItem("Precio", "Q2000.00");

localStorage.setItem("Elctorodomestico", "Refrigerador");
localStorage.setItem("Descripcion", "Refrigerador");
localStorage.setItem("Precio", "Q8000.00");
});

