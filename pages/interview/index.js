import CodeEditor from "../../src/components/CodeEditor";
import Dashboard from "../../src/components/Dashboard";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import { useEffect, useState } from "react";
import RoomURL from "../../src/components/RoomURL";
import { useAppContext } from "../../src/components/GlobalContext";

function id({ id }) {
  const { user, info } = useAppContext();

  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    if (!user)return;
    if (user.role) {
      console.log('user', user.role)
      localStorage.setItem("userRole", JSON.stringify(user.role));
      setUserRole(user.role);
    } else {
      if (typeof window !== "undefined") {
        let temp = JSON.parse(localStorage.getItem("userRole"));
        console.log('user role', temp)
        setUserRole(temp);
      }
    }
  }, []);
  
  return info.complete ? 

   (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          zIndex: "1",
        }}
      >
        {userRole === "ADMIN" ? (
          <div style={{ width: "calc(100% - 450px)" }}>
            <CodeEditor sessionId={id} candidateInfo={info.id} />
          </div>
        ) : (
          <div
            style={{
              width: "900px",
              position: "relative",
              left: "50%",
              transform: "translate(-50%, 0%)",
            }}
          >
            <CodeEditor sessionId={id} candidateInfo={info.id} />
          </div>
        )}
        {userRole === "ADMIN" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              right: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white",
                zIndex: "1",
                right: "0%",
                height: "100%",
                width: "450px",
                marginTop: "15px",
                color: "black",
              }}
            >
              <RoomURL URL={id} />
              <Dashboard />
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  )
  :
   (
  <>
    <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          zIndex: "1",
        }}
      >
        {userRole === "ADMIN" ? (
          <div style={{ width: "calc(100% - 450px)" }}>
            <CodeEditor sessionId={id}  candidateInfo={info.id}/>
          </div>
        ) : (
          <div
            style={{
              width: "900px",
              position: "relative",
              left: "50%",
              transform: "translate(-50%, 0%)",
            }}
          >
            <CodeEditor sessionId={id} candidateInfo={info.id}/>
          </div>
        )}
        {userRole === "ADMIN" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              right: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white",
                zIndex: "1",
                right: "0%",
                height: "100%",
                width: "450px",
                marginTop: "15px",
                color: "#979797",
              }}
            >
              <RoomURL URL={id} />
              <Dashboard />
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
  </>

  );
}

export default id;

export async function getServerSideProps({ query }) {
  let { id } = query;
  return { props: { id } };
}
