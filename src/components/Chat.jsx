import React, { useEffect, useState } from "react";
import createSocketConnection from "../utils/socket";

const Chat = ({ user, targetUser }) => {
  const [newMessage, setNewMessage] = useState("");

  const changeMessage = (ev) => {
    setNewMessage(ev.target.value);
  };

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      userId: user.userId,
      targetUser: targetUser.userId,
      mssg: newMessage,
    });
    setNewMessage("");
  };

  useEffect(() => {
    const socket = createSocketConnection();
    socket.emit("joinChat", {
      firstName: user.firstName,
      userId: user.userId,
      targetUser: targetUser.userId,
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div>
      <div>{`${user.firstName}'s Chat`}</div>

      <input value={newMessage} onChange={(ev) => changeMessage(ev)}></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
