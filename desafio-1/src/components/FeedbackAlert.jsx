import React from 'react';

export default function FeedbackAlert(props) {
    return props.show && (
        <div style={{ display: 'flex', gap: 8 }}>
            <div>
                {'cor alterada!'}
            </div>
            <button onClick={props.callback}>
                {'ok'}
            </button>
        </div>
    );
}