const verbos = ["adar","dormir","luchar","andar","enfermar","mentir","anidar","entrar","pasear","apestar","estornudar","regresar","bailar","faltar","bromear","fracasar","subir","caminar","gritar","suspirar","cantar","inmigrar","trabajar","confiar","llegar","viajar","desafinar","llorar","votar"]
const lugares = ["aeropuerto","edificio","pasillo","alcoba","escuela","perrera","apartamento","esquina","planeta","azotea","estación","playa","baño","estacionamiento","plaza","biblioteca","farmacia","preparatoria","cafetería","galaxia","pueblo","callejón","gasolinera","restaurante","capilla","gimnasio","salón","cine","hospital","sótano","club","iglesia","supermercado"]
const adjetivos = ["simpático","lento","rígidos","simnple","tenebroso","hábil","limpio","fuerte","especial","impulsivo","intrépido","amable","ansioso","moderno","ruidoso","irresponsable","grande","maduro","enfermo","curioso","nuevo","cordial","sutil","monótonos","modesto"]

const random = (listaVerbos,listaLugares,ListaAdjetivos) =>{
    let randStr1 =listaVerbos[Math.floor(listaVerbos.length*Math.random())];
    let randStr2 =listaLugares[Math.floor(listaLugares.length*Math.random())];
    let randStr3 =ListaAdjetivos[Math.floor(ListaAdjetivos.length*Math.random())];
    const arr = [randStr1,randStr2,randStr3];
    let verbo = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    let lugar = arr[1];
    let adjetivo = arr[2];
    let rs = "";
    lugar.charAt(lugar.length-1)==="a"? rs+=verbo+" en la "+lugar+" es muy "+adjetivo : rs+=verbo+" en el "+lugar+" es muy "+adjetivo;
    return rs;
}
console.log(random(verbos,lugares,adjetivos));

