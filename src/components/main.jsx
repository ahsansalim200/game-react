import React, {Component} from 'react';
import LeftPane from "./leftPane";
import RightPane from "./rightPane";
class Main extends Component {


    render() {
        return (
            <main className="admin-main row">
                <LeftPane highScore={this.props.highScore}
                          currentScore={this.props.currentScore}/>
                <RightPane size={this.props.size}
                           handleScoreUpdate={this.props.handleScoreUpdate}
                           randomId={this.props.randomId}
                           gameStatus={this.props.gameStatus}/>
            </main>
        );
    }

}
export default Main;