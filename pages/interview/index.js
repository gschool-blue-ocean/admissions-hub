import CodeEditor from "../../src/components/CodeEditor";
import Dashboard from "../../src/components/Dashboard";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import { useState } from "react";

function id({ id }) {
  const [input, setInput] = useState("");

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <CodeEditor input={input} setInput={setInput} sessionId={id}/>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
          </div>
          <Dashboard input={input} />
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
