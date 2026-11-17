const pokemonLocal = [
    {nombre:"bulbasaur", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", tipos: ["grass","poison"]},
    {nombre:"charmander", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", tipos: ["fire"]},
    {nombre:"squirtie", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", tipos: ["water"]},
    {nombre:"pikachu", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", tipos: ["electric"]},
    {nombre:"jigglypuff", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png", tipos: ["normal", "fairy"]},
    {nombre:"gengar", imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png", tipos: ["ghost", "poison"]},

]

const contenedor =  document.getElementById("resultado");
const buscador = document.getElementById("buscador");

function crearTarjeta(pokemon){
     const {nombre, imagen, tipos} = pokemon;

     const img = imagen ?? "https://via.placeholder.com/96?text=?"

     const bages = tipos.map(function(tipo){
        return `<span class="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full">${tipo} </span>`;
    }).join("");

    const articulo = document.createElement("article");
    articulo.className = "bg-white rounded-xl shadow p-4 text-center transform hover:scale-105 transition duration-200"

    articulo.innerHTML = `
             <img src="${img}" alt="${nombre}" class="w-24 mx-auto">
             <h2 class="capitalize font-bold text-slate-800 mt-2">${nombre}</h2>
            <div class="flex gap-1 justify-center mt-2 flex-wrap"></div>
    
    `;

    return articulo;
}
 function render(lista) {
    contenedor.innerHTML = "";
    lista.forEach(function(pokemon) {
        const tarjeta = crearTarjeta(pokemon);
        contenedor.appendChild(tarjeta);
    });

 }  
 render(pokemonLocal);

 buscador.addEventListener("input", function(){
    const textoBuscado = buscador.value.toLocaleLowerCase();

    const pokemonFiltrados = pokemonLocal.filter(function(pokemon){
        return pokemon.nombre.includes(textoBuscado);
    })

    render(pokemonFiltrados);
 })