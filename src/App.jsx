import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Chat from "./components/Chat";
import "./App.css";
import createSocketConnection from "./utils/socket";
import Main from "./components/Main";

function App() {
  const [messages, setMessages] = useState([]);

  const user1 = { firstName: "ekam", userId: 123 };
  const user2 = { firstName: "harsh", userId: 456 };

  useEffect(() => {
    const socket1 = createSocketConnection();
    socket1.emit("joinChat", {
      firstName: user1.firstName,
      userId: user1.userId,
      targetUser: user2.userId,
    });
    socket1.on("MessageRecieved", ({ firstName, mssg }) => {
      setMessages((prev) => [...prev, { firstName, mssg }]);
    });

    const socket2 = createSocketConnection();
    socket2.emit("joinChat", {
      firstName: user2.firstName,
      userId: user2.userId,
      targetUser: user1.userId,
    });

    return () => {
      socket1.disconnect();
      socket2.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2rem",
        height: "80vh",
      }}
    >
      <Main messages={messages}></Main>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Chat user={user1} targetUser={user2}></Chat>
        <Chat user={user2} targetUser={user1}></Chat>
      </div>
    </div>
  );
}

export default App;
