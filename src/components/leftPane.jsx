import React, {Component} from 'react';

class LeftPane extends Component {
    render() {
        return (
            <section className="card-panel white admin-main-leftpane col l3 m3 s12">
                <div className="collection">
                    <a href="#!" className="collection-item grey-text text-darken-2"><span className="admin-favouritesicon"></span>High Score <span className="new badge" data-badge-caption=""> {this.props.highScore}</span></a>
                    <a href="#!" className="collection-item grey-text text-darken-2"><span className="admin-personicon"></span>Current Score <span className="new badge" data-badge-caption=""> {this.props.currentScore}</span></a>
                </div>
            </section>
        );
    }

}
export default LeftPane;