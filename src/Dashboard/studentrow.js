return (
  <>
    <span
      style={{
        minWidth: 120,
        maxWidth: 120,
        paddingLeft: 10,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}
    >
      {item.last_name}, {item.first_name}
    </span>
    <span style={{ minWidth: 186, maxWidth: 186, overflow: 'hidden', textOverflow: 'ellipsis' }}>{student.email}</span>
    <span style={{ width: 70 }}>{item.cohort}</span>
    <span style={{ width: 85 }}>{item.date}</span>
    <span style={{ width: 11 }}>{item.attempts}</span>
    <span style={{ width: 30 }}>{item.state}</span>
  </>
);
