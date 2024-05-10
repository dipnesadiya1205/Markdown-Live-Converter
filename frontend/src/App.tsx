import { useState } from "react";
import { MarkDown, TextArea } from "./components";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <section className="main">
      <h1 className="heading">Convert Markdown Text to HTML Text</h1>
      <div className="container">
        <TextArea
          id="markdown-text"
          name="markdown-text"
          setText={(e) => setText(e)}
          defaultText={text}
          className="left-container"
        />
        <MarkDown markdownText={text} className="right-container" />
      </div>
    </section>
  );
}

export default App;
