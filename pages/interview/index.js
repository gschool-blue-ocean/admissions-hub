import CodeEditor from "../../src/components/CodeEditor";
import Dashboard from "../../src/components/Dashboard";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import { useEffect, useState } from "react";
import RoomURL from "../../src/components/RoomURL";
import { useAppContext } from "../../src/components/GlobalContext";

function id({ id }) {
  const { user } = useAppContext();

  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    if (user !== undefined) {
      localStorage.setItem("userRole", JSON.stringify(user.role));
      setUserRole(user.role);
    } else {
      if (typeof window !== "undefined") {
        let temp = JSON.parse(localStorage.getItem("userRole"));
        setUserRole(temp);
      }
    }
  }, []);

  return (
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
            <CodeEditor sessionId={id} />
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
            <CodeEditor sessionId={id} />
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
