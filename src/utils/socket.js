import io from "socket.io-client";

export const createSocketConnection = () => {
  return io("https://chatbackend-xh84.onrender.com");
};

export default createSocketConnection;
