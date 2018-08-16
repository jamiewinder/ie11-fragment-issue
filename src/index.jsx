import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <div>Child 1-1</div>
                    <div>Child 1-2</div>
                </React.Fragment>
                <React.Fragment>
                    <div>Child 2-1</div>
                    <div>Child 2-2</div>
                    <div>{this.state.value}</div>
                </React.Fragment>
                <button onClick={() => {
                    this.setState({ value: Date.now() });
                }}>
                    Update
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("host")
);
