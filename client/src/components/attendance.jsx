import { useState, useEffect } from 'react';
import axios  from 'axios';

const AttendanceRecord = ({ employeeId }) => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [status, setStatus] = useState('No current status');

  useEffect(() => {
    fetchAttendanceRecords();
  }, []);

  const fetchAttendanceRecords = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/attendance/${employeeId}`);
      const data = await response.json();
      setAttendanceRecords(data);
    } catch (error) {
      console.error('Error fetching attendance records:', error);
    }
  };

  // const handleCheckIn = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/check-in', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ id: employeeId }),
  //     });
  //     const data = await response.json();
  //     setStatus(`Checked In at ${new Date().toLocaleTimeString()}`);
  //     fetchAttendanceRecords();
  //   } catch (error) {
  //     console.error('Error checking in:', error);
  //   }
  // };
  const handleCheckIn = async () => {
    try {
      const res = await axios.post("http://localhost:5000/check-in", { id: employeeId });
      alert(res.data.message);
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };

  const handleCheckOut = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/check-out', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: employeeId }),
      });
      const data = await response.json();
      setStatus(`Checked Out at ${new Date().toLocaleTimeString()}`);
      fetchAttendanceRecords();
    } catch (error) {
      console.error('Error checking out:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Employee Attendance Records</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        <button onClick={handleCheckIn} style={buttonStyle('green')}>Check In</button>
        <button onClick={handleCheckOut} style={buttonStyle('red')}>Check Out</button>
      </div>

      <p style={{ textAlign: 'center', color: 'gray' }}>Status: {status}</p>

      <h2>Attendance History</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>Check-In Time</th>
            <th style={tableHeaderStyle}>Check-Out Time</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{record.date}</td>
              <td style={tableCellStyle}>{record.check_in_time || 'Not checked in'}</td>
              <td style={tableCellStyle}>{record.check_out_time || 'Not checked out'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const buttonStyle = (color) => ({
  backgroundColor: color,
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
});

const tableHeaderStyle = { padding: '10px', borderBottom: '2px solid #ddd' };
const tableCellStyle = { padding: '10px', borderBottom: '1px solid #ddd' };

export default AttendanceRecord;
