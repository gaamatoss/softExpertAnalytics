import React, { Component } from 'react';

// export default class FeedbackAlert extends Component {
export default function FeedbackAlert(props) {
    // constructor(props) {
    //     super(props);

    // }
    this.handleClean = this.handleClean.bind(this);

    this.state = {
        show: props.show
    };

    function componentDidUpdate(prevProps) {
        if (prevProps.show !== this.props.show) {
            this.setState({ show: this.props.show });
        }
    }

    function handleClean() {
        this.setState({ show: false }, () => {
            this.props.callback();
        });
    }


    return this.state.show && (
        <div style={{ display: 'flex', gap: 8 }}>
            <div>
                {'cor alterada!'}
            </div>
            <button onClick={handleClean()}>
                {'ok'}
            </button>
        </div>
    );
}