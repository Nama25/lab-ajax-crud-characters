const { default: axios } = require("axios");

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseUrl
    });
  }

  getAllCharacters = () => {
    return this.api.get('/characters');
  };
 
  getOneCharacter = (characterId) => {
    return this.api.get(`/characters/${characterId}`)

  }
 
  createCharacter = (characterInfo) => {
    return this.api.post(`/characters`, characterInfo);
  }
 
  deleteCharacter = (characterId) => {
    return this.api.delete(`/characters/${characterId}`);
  }

  editCharacter = (characterId, characterInfo) => {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  }

  getFullList () {

  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
