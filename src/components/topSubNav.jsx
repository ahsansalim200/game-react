import React, {Component} from 'react';

class TopSubNav extends Component {
    render() {
        return (
            <nav className="admin-top-subheader row">
                <div className="card-panel grey lighten-3 col l3 m3 s12 admin-top-subheader--leftpane">
                    <h6><button className="waves-effect waves-light ${this.props.buttonState} btn" onClick={this.props.handleStartButton}>{this.props.buttonText}</button> Game Time: 20 seconds</h6>
                </div>
                <div className="card-panel grey lighten-3 col l9 m9 s12 admin-top-subheader--rightpane">
                    <h6 className="col l3 m3 s5">Select Mode</h6>
                    <div className="col l3 m3 s7 admin-top-subheader--iconset">
                        <button className="waves-effect waves-light btn" onClick={(param) => this.props.handleSizeChange(3)}>3X3</button>
                        <button className="waves-effect waves-light btn" onClick={(param) => this.props.handleSizeChange(4)}>4X4</button>
                        <button className="waves-effect waves-light btn" onClick={(param) => this.props.handleSizeChange(6)}>6X6</button>
                    </div>
                </div>
            </nav>
        );
    }

}
export default TopSubNav;