import { Suspense } from "react";
import "./App.css";
import Page from "./Page";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
}

export default App;
