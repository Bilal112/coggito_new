import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../screens/MainPage/Main';
import Chat from '../screens/Chat/Chat';
// import Ai from '../screens/Ai/Ai';
// import Cc from '../screens/Cc/Cc';
// import Ml from '../screens/Ml/Ml';
// import Dl from '../screens/Dl/Dl';
// import Blogs from '../screens/Blog/Blogs';
// import Faq from '../screens/Faq/Faq';
class Routes extends Component {
    render() {
        return (
        <Router>
            <div>
                <Route path="/" exact component={Main} />
                <Route path ="/chat" exact component={Chat}/>
                {/* <Route path="/ai" exact component={Ai} />
                <Route path="/cc" exact component={Cc} />
                <Route path="/ml" exact component={Ml} />
                <Route path="/dl" exact component={Dl} />
                <Route path='/blog' exact component={Blogs} />
                <Route path='/faq' exact component={Faq} /> */}
            </div>
        </Router>
        );
    }
}

export default Routes;