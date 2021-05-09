import React, { Component} from 'react';
import './Layout.css';
import Toolbar from '../Components/Toolbar/Toolbar';
import Body from '../Components/Body/Body';
import WhatsNew from '../Components/WhatsNew/WhatsNew';
import ConFoot from '../Components/ConFoot/ConFoot';
import Footer from '../Components/Footer/Footer';
import Symbol from '../Components/Symbols/Sybmols';
import Spinner from '../UI/Spinner/Spinner';


class Layout extends Component {
    state={
        loading:true,
    }
    
    componentDidMount=()=> {

       setTimeout(() => this.setState({loading:false}), 3000)
    }
    
    componentWillUnmount=() =>{
        let timer = null;
      clearTimeout(timer);
    }

    spinnerhandler=()=>{
        this.setState({loading:false})
    }
    render () {
      
     return (
                <>
                {this.state.loading ? <Spinner /> : <div>
                <Toolbar></Toolbar>
            <Body />
            <WhatsNew/>
            <Footer />

            <ConFoot/>
            <Symbol />
            </div> }
            </>)
};}

export default Layout;