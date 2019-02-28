const localStorageVariables = require('./localstorage-variables')

module.exports = {
    apiBaseUrl: 'https://game-tod.herokuapp.com/api/v1',
    apiHeaderUserToken: { headers: { "x-access-token": localStorage.getItem(localStorageVariables.token) } },
    tokenUploadImage: "Client-ID 0b9b24b2bf6e48e"
}