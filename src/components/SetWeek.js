import React from 'react';

export const SetWeek = () => {
    const days = [];
    const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (let i = 0; i < 7; i++) {
        days.push(
            <div className="columns" key={i}>
                {date[i]}       
            </div>,
        );
    }

    return <div className="days rows">{days}</div>;
};