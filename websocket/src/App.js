import { useEffect, useRef, useState } from "react"
import { io } from "socket.io-client";

import './App.css';

const App = () => {

  const textRef = useRef();
  const [logs, setLogs] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (socket) {
      // native event
      socket.on("connect", () => {
        setLogs([
          ...logs,
          "Connected: " + socket.connected,
          "ID Socket: " + socket.id
        ]);
      });

      // native event
      socket.on("disconnect", () => {
        setLogs([
          ...logs,
          "Disconnected: " + socket.disconnected
        ]);
      });

      socket.on("connection", (msg) => {
        setLogs([...logs, msg]);
      });

      socket.on("message-custom", (msg) => {
        setLogs([...logs, msg]);
      });
    }
  }, [socket, logs]);

  const connect = () => {
    setSocket(io("http://localhost:3333", {
      transports: ["websocket"]
    }));
  }

  const emmit = () => {
    socket.emit("message-custom", textRef.current.value);
    textRef.current.value = '';
  }

  const server = () => {
    socket.emit("server", "execute");
  }

  const close = () => {
    socket.disconnect();
    setSocket(null);
  }

  return (
    <div className="App">
      <main>

        {socket ? (
          <>
            <input ref={textRef} id="input" />

            <button type="button" onClick={emmit}>
              Send
            </button>
            <br />
            <button type="button" onClick={server}>
              Call Servers
            </button>
            <br />
            <button type="button" onClick={close}>
              Close
            </button>
          </>
        ) : (
          <button type="button" onClick={connect}>
            Connect
          </button>
        )}

        <h1>Logs:</h1>
        <ul id="messages">
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
