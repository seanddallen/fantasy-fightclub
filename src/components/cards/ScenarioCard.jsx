import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class ScenarioCard extends React.Component {

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
                        backgroundColor: '#ECB613',
                        textAlign: 'center',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '160px',
                        width: '240px'
                    }}
                    onClick={() => this.props.handleBackText(this.props.type)}
                >
                    SCENARIOS
                </FrontSide>
                <BackSide
                    style={{
                        backgroundColor: '#866DC6',
                        textAlign: 'center',
                        fontSize: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '160px',
                        width: '240px'
                    }}
                >
                {/* {this.props.P1backText ? this.props.P1backText : this.props.P2backText } */}
                {this.props.backText}
                </BackSide>
            </Flippy>
        )
    }
}

export default ScenarioCard;