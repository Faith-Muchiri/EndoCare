import React from 'react';

function Appointments() {
  return (
    <div>
      <h3>Appointments</h3>
      <div className="addAppointment">
          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
            </svg>
            ADD
          </button>
      </div>
      <div className="appointmentList">
        <ul>
          <li>
            <div className="appointmentInfo">
              <div className="appointmentName">Dr.Rashid</div>
              <div className="hospital">KU Hospital</div>
              <div className="timeDate">
                <span>16/07/24</span>
                <span>12:00 PM</span>
              </div>
            </div>
            <div className="appointmentStatus">
              <span>Pending</span>
            </div>
          </li>
          <li>
            <div className="appointmentInfo">
              <div className="appointmentName">Checkup</div>
              <div className="hospital">Limuru Clinic</div>
              <div className="timeDate">
                <span>5/05/24</span>
                <span>11:30 AM</span>
              </div>
            </div>
            <div className="appointmentStatus">
              <span>Pending</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Appointments;
