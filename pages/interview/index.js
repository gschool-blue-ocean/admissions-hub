import CodeEditor from "../../src/components/CodeEditor";
import Dashboard from "../../src/components/Dashboard";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import { useEffect, useState } from "react";
import RoomURL from "../../src/components/RoomURL";
import { useAppContext } from "../../src/components/GlobalContext";

function id({ id }) {
  const [input, setInput] = useState("");
  const { user } = useAppContext();

  let userRole;

  if (user !== undefined) {
    localStorage.setItem("userInfo", JSON.stringify(user.role));

    userRole = user.role;
  } else {
    if (typeof window !== "undefined") {
      userRole = JSON.parse(localStorage.getItem("userInfo"));
    }
  }

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
            <CodeEditor input={input} setInput={setInput} sessionId={id} />
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
            <CodeEditor input={input} setInput={setInput} sessionId={id} />
          </div>
        )}
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
              position: "fixed",
              right: "0%",
              height: "100%",
              width: "450px",
              marginTop: "15px",
              color: "#979797",
            }}
          >
            {userRole === "ADMIN" ? (
              <>
                <RoomURL URL={id} />
                <Dashboard input={input} />
              </>
            ) : null}
          </div>
        </div>
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
