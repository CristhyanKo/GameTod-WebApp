import localStorageVariables from '../localstorage-variables'
import api from './api.service'

class Auth {
    isAuthenticated() {
        const token = localStorage.getItem(localStorageVariables.token)
        const email = localStorage.getItem(localStorageVariables.email)

        if (!!token) {
            const validate = (!!token && token.length > 100 && email.includes("@"))
            return validate;
        } else {
            return false
        }
    }

    async autheticate(email, password) {
        await api.post('user/authenticate', { email, password }).then(res => {
            this.saveDataLogin(res.data)
        }).catch(res => {
            throw (res)
        })
    }

    async register(data) {
        await api.post('user', data).catch(res => { throw (res) })
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
            localStorage.setItem(localStorageVariables.id, data.data.id)
            localStorage.setItem(localStorageVariables.email, data.data.email)
            localStorage.setItem(localStorageVariables.firstName, data.data.firstName)
            localStorage.setItem(localStorageVariables.secondName, data.data.secondName)
            localStorage.setItem(localStorageVariables.avatar, data.data.avatar)
            localStorage.setItem(localStorageVariables.nick, data.data.nick)
        } else {
            console.log('Erro', 'Dados de login não recebidos')
        }
    }

    async clear() {
        const firstName = localStorage.getItem(localStorageVariables.firstName)
        const secondName = localStorage.getItem(localStorageVariables.secondName)
        const avatar = localStorage.getItem(localStorageVariables.avatar)
        const email = localStorage.getItem(localStorageVariables.email)
        const nick = localStorage.getItem(localStorageVariables.nick)

        localStorage.clear()

        await localStorage.setItem(localStorageVariables.firstName, firstName)
        await localStorage.setItem(localStorageVariables.secondName, secondName)
        await localStorage.setItem(localStorageVariables.email, email)
        await localStorage.setItem(localStorageVariables.avatar, avatar)
        await localStorage.setItem(localStorageVariables.nick, nick)
    }

    clearAll() {
        localStorage.clear()
    }
}

export default Auth