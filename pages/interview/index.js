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
      <CodeEditor input={input} setInput={setInput} sessionId={id} />
      <Dashboard input={input} />
      <Footer />
    </>
  );
}

export default id;

export async function getServerSideProps({ query }) {
  let { id } = query;
  return { props: { id } };
}

