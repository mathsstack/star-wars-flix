//Pega a url de cada imagem e armazena em um array

var moviesArray = [ 
  
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH7QxuAeCSgSmJ5Js_5264TC3SVpdh78sJP3z7zn9gZ9RORr0mxV5RacmV&s=10", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMlmrKp-pu9-Z4bCF6NFyQVAabPDiAExJkg&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SDuP92Mw0xZqRGDNoJtH5W-WdhVkrTEWxg&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJi9SYfhs9T2huEVyLHFoS4A9MM2p0-1JBgW4Pt7B0eHRJcWapBsEhybHQ&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR598BGkrWc0HEU1EtgVWo-U3b4w_s9VYT2N5hHHSIIPLlTuu2_f4dNoS4&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7a4-OrsyY7GE4duVDSR9DIlpi6QMhI11fA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XxfY3_qCt7t_mbUWVKRpEeiZluq_yaTNWQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH3i73Lqf0lwkPPc6GUJ5V17TyWYdjN47pgq93fG0TSgC_Jpm-bzTFm7f&s=10",
"https://upload.wikimedia.org/wikipedia/pt/0/08/Star_Wars_The_Rise_of_Skywalker.jpg"

]

//cria outro array com o nome de cada filme 

var namesArray = [

"Star Wars - A new hope",
"Star Wars - The Empire strikes back",
"Star Wars - Return of the Jedi",
"Star Wars - The Phantom Menace",
"Star Wars - Attack of the clones",
"Star Wars - Revenge of the Sith",
"Star Wars - The Force awakens",
"Star Wars - The last Jedi",
"Star Wars - The rise of Skywalker"
  
]
  
//variáveis de controle de fluxo 

var i = 0;
var j = 1;

document.write("<div class='posters'>");

//imprime as imagens no HTML
while (i < moviesArray.length) {
  
  document.write("<figure>");
  document.write("<img src=" + moviesArray[i] + ">");
  document.write("<figcaption class='subtitle'>" + namesArray[i] + "</figcaption>");
  document.write("</figure>");
  i++;
  
  //Quebra a linha a cada 3 filmes
  if(i == 3*j) {
    
    document.write("</div><br><div class='posters'>");
    j++;
    
  }
}

document.write("</div>");