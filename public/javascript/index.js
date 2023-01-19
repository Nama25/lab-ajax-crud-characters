// added /characters to http://localhost:8000/
const charactersAPI = new APIHandler('http://localhost:8000/characters');

// I'm still not sure whether it is the right place where we implemented the id in our html-file
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', () => {
    const userInput = document.getElementById('character-info').value;
    getAllCharacters(userInput);
  });

  document.getElementById('fetch-one').addEventListener('click', () => {
      const userInput = document.getElementById('character-id').value;
      getOneCharacter(userInput);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const userInput = document.getElementById('character-id-delete').value;
      getOneCharacter(userInput);

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const userInput = document.getElementById('XXXXXXX').value; // there are multiple input fields... 
      getOneCharacter(userInput);

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const userInput = document.getElementById('XXXXXXX').value; // there are multiple input fields...
      getOneCharacter(userInput);

  });
});