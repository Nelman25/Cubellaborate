import { useState } from 'react';
import Calendar from 'react-calendar';
import CustomCalendar from '../style/CustomCalendar.css';

export default function Calendars() {
    const [date, setDate] = useState(new Date());

    return (
      <div className='app'>
        <h1 className='text-center'>Project Calendar</h1>
        <div className='calendar-container'>
          <Calendar
            onChange={setDate}
            value={date}
            selectRange={true}
          />
        </div>
        {date.length > 0 ? (
          <p className='text-center'>
            <span className='bold'>Start:</span>{' '}
            {date[0].toDateString()}
            &nbsp;|&nbsp;
            <span className='bold'>End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p className='text-center'>
            <span className='bold'>Default selected date:</span>{' '}
            {date.toDateString()}
          </p>
        )}
      </div>
    );
}
