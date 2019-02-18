class Auth {
    isAuthenticated() {
        // let token = localStorage.getItem('token')
        // let email = localStorage.getItem('userEmail')
        // let validation = (!!token && token.length > 100 && email.includes("@"))

        // return (validation)
        return false
    }

    getToken() {
        if(this.isAuthenticated()){
            return localStorage.getItem('token').toString()
        } else {
            console.log('O usuário não está autenticado.')
        }
    }

    saveDataLogin(data) {
        if (!!data) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('userEmail', data.userEmail)
        } else {
            console.log('Erro', 'Dados de login não recebidos')
        }
    }

    clear(){
        localStorage.clear()
    }
}

export default Auth