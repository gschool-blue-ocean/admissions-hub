import Link from "next/link";
import uuid from 'react-uuid'
import BtnDashboard from "../../src/components/BtnDashboard";
import Header from "../../src/components/Header";

function Host() {

    let roomId;

    const handleNewRoom = () => {
        roomId = uuid()

    }

    return(
        <>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />

        <button onClick={handleNewRoom}>Generate a new room</button>
        <Link href={`./${uuid()}`}>
            Begin a new interview
        </Link>
        <BtnDashboard />
        </>
    )
}

export default Host;