import { useState } from "react";

export default function Forgetpass() {
  const [email, setEmail] = useState("");
  return (
    <form>
      <div>
        <h1>Please set your email</h1>
        <input placeholder=" Email address" />
        <button type="submit">submit</button>
      </div>
    </form>
  );
}
