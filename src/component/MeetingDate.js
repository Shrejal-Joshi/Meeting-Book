import React, {useState} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import AddToCalendarHOC from 'react-add-to-calendar-hoc';



const options = [
  {
      timeslot : "10:00 AM" ,
  },
  {
    timeslot : "11:00 AM" ,
},
{
  timeslot : "12:00 PM" ,
},
{
  timeslot : "1:00 PM" ,
},
{
  timeslot : "2:00 PM" ,
},
{
  timeslot : "3:00 PM" ,
},
{
  timeslot : "4:00 PM" ,
},
{
  timeslot : "5:00 PM" ,
},

];

    


function MeetingDate(props) {
  const [dateState, setDateState] = useState(new Date())
  console.log(props.state.description);
  const changeDate = (e) => {
    setDateState(e)
    console.log(dateState)
  }

  const [timeState, setTimeState] = useState (newDate());
  const handleClick = (e)=>
  {
    ///console.log(e.target.innerText);
    setTimeState(e.target.innerText)
  }


  const AddToCalendarModal = AddToCalendarHOC(Button, CalendarModal);
  const startDateTime = moment(dateState).utc(timeState).add(1, 'days');
  const endTime = startTime.plus({ hours: 2 });
  const duration = endDatetime.diff(startDatetime).as('hours');
  const eventInDifferentTimezone = {
    ...event,
    description: props.state.description,
    duration,
    endDatetime: endTime.toFormat('YYYYMMDDTHHmmss'),
    location: '',
    startDatetime: startTime.toFormat('YYYYMMDDTHHmmss'),
    timezone: 'Europe/London',
    title: props.state.meetingroom,
  }

  function handleGoogleEvent ()
  {
    return (
      <AddToCalendarModal
      className={componentStyles}
      linkProps={{
        className: linkStyles,
      }}
      event={eventInDifferentTimezone}
    />
    );
  }


  return (
   <>
      <div className="calendar-container">
        <Calendar 
        value={dateState}
        onChange={changeDate}
        />
      </div>
    <h5>Preferred Time Slots</h5>
      <div className ="tracks">
        
          {
            options.map((item, index) =>
            {
              return (
                
                  <div className = "time-slots " key={index}>
                    <p  onClick= {(ele) => handleClick(ele)}>{item.timeslot}</p>
                  </div>

              );
            })
          }

      </div>

      <button  type="submit" className="nextbtn"
         onClick ={handleGoogleEvent}>
                    Book Meeting
                </button>

   </>
  );
}

export default MeetingDate;
