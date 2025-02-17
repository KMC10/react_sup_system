import { useState, useEffect } from 'react';

const mockAttendanceData = [
  { date: '2025-02-06', checkInTime: '09:00 AM', checkOutTime: '05:00 PM' },
  { date: '2025-02-05', checkInTime: '08:45 AM', checkOutTime: '04:30 PM' },
  { date: '2025-02-04', checkInTime: '09:15 AM', checkOutTime: '05:15 PM' },
];

const AttendanceRecord = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [status, setStatus] = useState('No current status');

  useEffect(() => {
    // Simulate fetching data
    setAttendanceRecords(mockAttendanceData);
  }, []);

  const handleCheckIn = () => {
    setStatus('Checked In at ' + new Date().toLocaleTimeString());
  };

  const handleCheckOut = () => {
    setStatus('Checked Out at ' + new Date().toLocaleTimeString());
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
        Employee Attendance Records
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        <button onClick={handleCheckIn} style={buttonStyle('green')}>
          Check In
        </button>
        <button onClick={handleCheckOut} style={buttonStyle('red')}>
          Check Out
        </button>
      </div>

      <p style={{ textAlign: 'center', color: 'gray', marginBottom: '20px' }}>Status: {status}</p>

      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Attendance History</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
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
              <td style={tableCellStyle}>{record.checkInTime}</td>
              <td style={tableCellStyle}>{record.checkOutTime}</td>
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

const tableHeaderStyle = {
  padding: '10px',
  borderBottom: '2px solid #ddd',
};

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

export default AttendanceRecord;
