import { Component } from 'react'
import auth from '../services/auth.service'

const authentication = new auth()

class PrivatePage extends Component {
    render() {
        if (authentication.isAuthenticated) {
            return (this.props.children)
        } else {
            authentication.clear()
            this.props.history.push('/login')
        }
    }
}

export default PrivatePage