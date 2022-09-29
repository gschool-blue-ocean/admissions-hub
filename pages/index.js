import Head from 'next/head'
import React, { useEffect } from "react";
import Router from "next/router";



export default function Home() {
  //redirect to login page
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/") {
      Router.push("/login");
    }
  }, []);
  return (
    <div>
    </div>
  )
}
