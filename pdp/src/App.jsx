import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
const Header = React.lazy(()=> import("home/Header") )
const  Footer = React.lazy(()=> import("home/Footer"))

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<div>Loading</div>} >
    <Header/>

    </Suspense>
    <div className="my-10">
      PDP Page Content
    </div>
    <Suspense fallback={<div>Loading</div>}>
    <Footer/>

    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
