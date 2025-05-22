import io from "socket.io-client";

// export const createSocketConnection = () => {
//   return io("http://localhost:4000");

//   // https://chatbackend-xh84.onrender.com"
// };

export const createSocketConnection = () => {
  return io("https://chatbackend-xh84.onrender.com", {
    transports: ["websocket"], 
    withCredentials: true,
  });
};

export default createSocketConnection;
