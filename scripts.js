var Names, Links;


Names = ['Gorky park', 'Danilovsky market ', 'Nikolskaya Street', 'Zaryadye Park', 'Okay, here\'s some more'];
Links = ['https://maps.app.goo.gl/scSxjv7ASVrmeQkT9', 'https://maps.app.goo.gl/ujUbfqX9y1kyM7hT7', 'https://maps.app.goo.gl/boonae922UpFjVRg7', 'https://maps.app.goo.gl/6m7V6H8CoatFU75X7', 'https://www.tripadvisor.co.uk/Attractions-g298484-Activities-Moscow_Central_Russia.html'];


document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  if (!!Links.length) {
    element_list.replaceChildren();
    let new_li = document.createElement('li');
    let new_a = document.createElement('a');
    new_a.setAttribute("href", Links.shift());
    new_a.innerText = Names.shift();

    new_li.appendChild(new_a);

    element_list.appendChild(new_li);
  }

});