import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from './GlobalContext';

export default function RoomURL() {
  const [clicked, setClicked] = useState(false);
  const { asPath } = useRouter();
  const { info, interview } = useAppContext();

  const baseURL = 'http://localhost:3000';

  const handleCopy = () => {
    // let url = process.env.ROOT_URL
    let url = process.env.NODE_ENV === 'production' ? connectionStrings.rootUrl + asPath : baseURL + asPath;
    navigator.clipboard.writeText(url);
    setClicked(true);
  };

  const [studentInfo, setStudentInfo] = useState('');
  useEffect(() => {
    if (info.length !== 0) {
      localStorage.setItem('info', JSON.stringify(info));
      setStudentInfo(info);
    } else {
      if (typeof window !== 'undefined') {
        let temp = JSON.parse(localStorage.getItem('info'));
        setStudentInfo(temp);
      }
    }
  }, []);

  return (
    <>
      <span
        style={{ fontSize: 20 }}
      >{`${studentInfo.first_name} ${studentInfo.last_name}, ${studentInfo.cohort}, Attempt #${studentInfo.attempt}`}</span>
      <div
        onClick={handleCopy}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#F0F0F0',
          borderRadius: 5,
          fontSize: 12,
          height: 35,
          width: 400,
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        {clicked ? (
          'Copied!'
        ) : (
          <img
            src={'/images/copy.svg'}
            alt="/"
            objectfit="contain"
            objectposition="bottom center"
            width={15}
            height={15}
          />
        )}
        <div style={{ marginInline: '4px' }}>Click here to copy student URL</div>

        {clicked ? (
          'Copied!'
        ) : (
          <img
            src={'/images/copy.svg'}
            alt="/"
            objectfit="contain"
            objectposition="bottom center"
            width={15}
            height={15}
          />
        )}
      </div>
    </>
  );
}
