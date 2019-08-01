import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class Card extends React.Component {

    render(){
        return (
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
            >
                <FrontSide
                    style={{
                        backgroundColor: '#41669d',
                        textAlign: 'center',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onClick={this.props.handleBackText}
                >
                {this.props.frontText}
                </FrontSide>
                <BackSide
                    style={{
                        backgroundColor: '#41669d',
                        textAlign: 'center',
                        fontSize: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                {this.state.backText}
                </BackSide>
            </Flippy>
        )
    }
}

export default Card;