import React, {Component} from 'react';

class TopNav extends Component {
    render() {
        return (
        <nav className="card-panel blue darken-2 admin-top-header">
            <div>
                <h6><span className="admin-menuicon"></span>Game</h6>
            </div>
            <div>
                <span className="admin-readericon"></span>
            </div>
        </nav>
        );
    }

}
export default TopNav;