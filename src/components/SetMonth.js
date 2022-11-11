import React from 'react';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';

export const SetMonth = ({ currentMonth, prevMonth, nextMonth }) => {
    return (
        <div className="header rows">
            <div className="columns columns-start">
                <span className="text">
                    {format(currentMonth, 'yyyy')}년
                    <span className="text month">
                        {format(currentMonth, 'M')}월
                    </span>
                </span>
            </div>
            <div className="columns columns-end">
                <Icon icon="bi:chevron-left" onClick={prevMonth} />
                <Icon icon="bi:chevron-right" onClick={nextMonth} />
            </div>
        </div>
    );
};
