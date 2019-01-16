import classNames         from 'classnames';
import React              from 'react';
import { padLeft }        from '_common/string_util';
import { toMoment }       from 'Utils/Date';
import CalendarPanelTypes from './types';

const getDays = ({ calendar_date, date_format, max_date, min_date, start_date, onClick, selected_date }) => {
    // adjust Calendar week by 1 day so that Calendar week starts on Monday
    // change to zero to set Calendar week to start on Sunday
    const day_offset = 1;

    const dates = [];
    const days  = [];
    const moment_today       = toMoment().startOf('day');
    const moment_cur_date    = toMoment(calendar_date);
    const num_of_days        = moment_cur_date.daysInMonth() + 1;
    const moment_month_start = moment_cur_date.clone().startOf('month');
    const moment_month_end   = moment_cur_date.clone().endOf('month');
    const first_day          = moment_month_start.day() - day_offset;
    const last_day           = moment_month_end.day() - day_offset;
    const moment_min_date    = toMoment(min_date);
    const moment_max_date    = toMoment(max_date);
    const moment_selected    = toMoment(selected_date);

    for (let i = first_day; i > 0; i--) {
        dates.push(moment_month_start.clone().subtract(i, 'day').format(date_format));
    }
    for (let idx = 1; idx < num_of_days; idx += 1) {
        dates.push(moment_cur_date.clone().format(date_format.replace('DD', padLeft(idx, 2, '0'))));
    }
    for (let i = 1; i <= 6 - last_day; i++) {
        dates.push(moment_month_end.clone().add(i, 'day').format(date_format));
    }

    const moment_start_date = toMoment(start_date).startOf('day');
    dates.map((date) => {
        const moment_date = toMoment(date).startOf('day');
        const is_active   = selected_date && moment_date.isSame(moment_selected);
        const is_today    = moment_date.isSame(moment_today, 'day');
        const is_disabled = moment_date.isBefore(moment_min_date) || moment_date.isAfter(moment_max_date) ||
            // for forward starting accounts, only show same day as start date and the day after
            (start_date && (moment_date.isBefore(moment_start_date) || moment_date.isAfter(moment_start_date.clone().add(1, 'day'))));

        // show 'disabled' style for dates that is not in the same calendar month, and the date should still be clickable
        const is_other_month = moment_date.month() !== moment_cur_date.month();
        days.push(
            <span
                key={date}
                className={classNames('calendar__body__cell', {
                    'calendar__body__cell--is-active'     : is_active && !is_disabled,
                    'calendar__body__cell--is-today'      : is_today,
                    'calendar__body__cell--is-disabled'   : is_disabled,
                    'calendar__body__cell--is-other-month': is_other_month,
                })}
                onClick={(e) => { onClick.date(e, is_disabled); }}
                data-date={date}
            >
                {moment_date.date()}
            </span>
        );
    });

    return days;
};

const week_headers = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export const CalendarDays = (props) => {
    const days = getDays(props).map(day => day);

    return (
        <div className='calendar__body calendar__body--date'>
            {week_headers.map((item, idx) => (<span key={idx} className='calendar__body__header'>{item}</span>))}
            {days}
        </div>
    );
};

CalendarDays.propTypes = { ...CalendarPanelTypes };
