import React from 'react';

export default function ClassInfo()
{
    return(
        <div className='block class-info'>

            <h3>Office Hours</h3>
            <p>
                <b>Kimiko Ryokai</b>  by appointment. (kimiko@berkeley.edu)
            </p>
            <p>
                <b>Vivian Chan</b>  schedule your appointment below ↓ (vhc@berkeley.edu)
            </p>
            
            <br/>

            <iframe src="https://calendar.google.com/calendar/appointments/AcZssZ0a5jjN67409Tjx5hYIsdk2CvgUEFjSJAsE6Tg=?gv=true" style={{"width": "40%", "border": "1px solid gray"}} frameborder="0"></iframe>
        </div>
    )
}