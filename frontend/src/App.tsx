import { useState } from "react";
import { MarkDown, TextArea } from "./components";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const handleClick = async () => {
    fetch("http://localhost:4002/api/v1/convert/markdown-html", {
      method: "POST",
      body: JSON.stringify({ markdownText: text }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setConvertedText(result.payload.data);
      });
  };

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
        {!convertedText ? (
          <div
            className="right-container"
            dangerouslySetInnerHTML={{ __html: convertedText }}
          ></div>
        ) : (
          <MarkDown markdownText={text} className="right-container" />
        )}
      </div>
      <button onClick={handleClick} className="btn">Convert Forcefully</button>
    </section>
  );
}

export default App;
