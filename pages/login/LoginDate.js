export default function LoginDate() {
    //current month day, year
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    const currentDate = `${month} ${day}, ${year}`;
  return (
    <div>{currentDate}</div>
  )
}
