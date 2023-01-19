
class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({
			baseURL: baseUrl
		})
	}

  // changed from getCharacter to getFullList (it was alreday there,see below)
  getFullList() {
		return this.api
				.get('/characters')
				.then(result => console.log(result.data))
				.catch(e => console.log(`Something went wrong getting all characters ${e}`));
	}
 
  // changed to getOneRegister
  getOneRegister(characterId) {
    return this.api
      .get(`/characters/${characterId}`)
      .then(result => console.log(result.data))
			.catch(e => console.log(`Something went wrong getting one character ${e}`));
  }

 // changed
  createOneRegister(characterInfo) {
    return this.api
      .post(`/characters`, characterInfo)
      .then(result => console.log(result.data))
			.catch(e => console.log(`Something went wrong creating one character ${e}`));
  }
 
 // changed
  deleteOneRegister(characterId) {
    return this.api
      .delete(`/characters/${characterId}`)
      .then(result => console.log(result.data))
			.catch(e => console.log(`Something went wrong deleting a character ${e}`));
  }

 // changed
  updateOneRegister(characterId, characterInfo) {
    return this.api
    .put(`/characters/${characterId}`, characterInfo)
    .then(result => console.log(result.data))
		.catch(e => console.log(`Something went wrong updating one character ${e}`));
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
