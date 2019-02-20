import React, {Component} from 'react'
import HeaderLayout from './header-layout.container';

class DefaultLayout extends Component {
    render(){
        return(
            <div>
                <HeaderLayout {...this.props}/>
            </div>
        )
    }
}

export default DefaultLayout
