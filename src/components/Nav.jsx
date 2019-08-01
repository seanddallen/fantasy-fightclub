import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

class Nav extends React.Component {

    render(){
        return (
            <Navbar bg="light" expand="lg" className="nav">
                <div style={{margin: '0 auto', display: 'flex'}}>
                    <Navbar.Brand href="#home" style={{textAlign: 'center', fontFamily: 'Rock Salt', fontSize: '36px', marginTop: '10px'}}>Fantasy Fightclub</Navbar.Brand>
                    {/* <Button onClick={this.props.handleRefresh} variant="outline-success">Refresh</Button> */}
                </div>
            </Navbar>
        )
    }
}

export default Nav;