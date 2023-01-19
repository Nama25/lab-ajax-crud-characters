const { default: axios } = require("axios");

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseUrl: this.BASE_URL // added this.BASE_URL
    });
  }

  // changed from getCharacter to getFullList (it was alreday there,see below)
  getFullList = () => {
    return this.api.get('/characters');
  };
 
  // changed to getOneRegister
  getOneRegister = (characterId) => {
    return this.api.get(`/characters/${characterId}`)

  }

 // changed
  createOneRegister = (characterInfo) => {
    return this.api.post(`/characters`, characterInfo);
  }
 
 // changed
  deleteOneRegister = (characterId) => {
    return this.api.delete(`/characters/${characterId}`);
  }

 // changed
  updateOneRegister = (characterId, characterInfo) => {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  }

}
   

/* getFullList () {

  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
  */
