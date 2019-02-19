import localStorageVariables from '../localstorage-variables'
import api from './api.service'

class Auth {
    isAuthenticated() {
        let token = localStorage.getItem(localStorageVariables.token)
        // let email = localStorage.getItem('userEmail')
        // let validation = (!!token && token.length > 100 && email.includes("@"))

        // return (validation)
        console.log(!!token)
        return !!token
    }

    async autheticate(email, password) {
        await api.post('user/authenticate', { email, password }).then(res => {
            this.saveDataLogin(res.data)
        }).catch(res => {
            throw (res)
        })
    }

    async register(data) {
        await api.post('user', data).catch(res => { throw (res)})
    }

    getToken() {
        if (this.isAuthenticated()) {
            return localStorage.getItem(localStorageVariables.token).toString()
        } else {
            console.log('O usuário não está autenticado.')
        }
    }

    saveDataLogin(data) {
        if (!!data) {
            localStorage.setItem(localStorageVariables.token, data.token)
            localStorage.setItem(localStorageVariables.email, data.data.email)
            localStorage.setItem(localStorageVariables.avatar, data.data.avatar)
            localStorage.setItem(localStorageVariables.nick, data.data.nick)
        } else {
            console.log('Erro', 'Dados de login não recebidos')
        }
    }

    clear() {
        const avatar = localStorage.getItem(localStorageVariables.avatar)
        const email = localStorage.getItem(localStorageVariables.email)
        localStorage.clear()

        localStorage.setItem(localStorageVariables.email, email)
        localStorage.setItem(localStorageVariables.avatar, avatar)
    }
}

export default Auth