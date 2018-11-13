import React, {Component} from 'react';

class RightPane extends Component {
    createTable = () => {
        let table = [];

        for (let i = 0; i < this.props.size; i++) {
            let children = [];
            for (let j = 0; j < this.props.size; j++) {
                let _className = '';
                if(this.props.randomId == (i+'-'+j)) {
                    _className = 'active';
                }
                children.push(<td key={i+'-'+j} className={_className} onClick={(key) => this.props.handleScoreUpdate(i+'-'+j)}>{`${i+'-'+j}`}</td>)
            }
            table.push(<tr key={i}>{children}</tr>)
        }
        return table;
    }


    render() {
        return (
            <section className="card-panel grey lighten-2 admin-main-rightpane col l9 m9 s12">
                <h1>{this.props.gameStatus}</h1>
                <table className="game-table">
                    <tbody>
                        {this.createTable()}
                    </tbody>
                </table>
            </section>
        );
    }

}
export default RightPane;