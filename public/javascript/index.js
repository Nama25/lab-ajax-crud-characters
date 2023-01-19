const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
	document.getElementById('fetch-all').addEventListener('click', function (event) {
		charactersAPI.getFullList();
	});  

  document.getElementById('fetch-one').addEventListener('click', function (event) {
      const userInput = document.getElementById('character-id').value;
      charactersAPI.getOneRegister(userInput);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const userInput = document.getElementById('character-id-delete').value;
    charactersAPI.createOneRegister(userInput);

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const userInput = document.getElementById('XXXXXXX').value; // there are multiple input fields... 
    charactersAPI.deleteOneRegister(userInput);

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const userInput = document.getElementById('XXXXXXX').value; // there are multiple input fields...
    charactersAPI.updateOneRegister(userInput);

  });
});