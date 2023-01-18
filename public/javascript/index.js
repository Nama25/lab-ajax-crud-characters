const charactersAPI = new APIHandler('http://localhost:8000');

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

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});