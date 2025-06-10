import { createServer } from "http";
import { Server } from "socket.io";

import server1 from "./server1.js";
import server2 from "./server2.js";
import server3 from "./server3.js";

import race from "./race.js";

const httpServer = createServer();
const io = new Server(httpServer);

io.on("connection", (socket) => {
  io.emit("connection", "response web socket");

  socket.on("message-custom", (content) => {
    io.emit("message-custom", `${content} server message`);
  });

  socket.on("server", (content) => {
    if (content === "execute") {

      io.emit("message-custom", `servers are running`);

      (() => {
        try {
          race(server1(), 5000).then(val => {
            io.emit("message-custom", val.name);
          });
        } catch (error) {
          io.emit("message-custom", error);
        }
      })();

      (() => {
        try {
          race(server2(), 5000).then(val => {
            io.emit("message-custom", val.name);
          });
        } catch (error) {
          io.emit("message-custom", error);
        }
      })();

      (() => {
        try {
          race(server3(), 5000).then(val => {
            io.emit("message-custom", val.name);
          });
        } catch (error) {
          io.emit("message-custom", error);
        }
      })();
    }
  });
});

httpServer.listen(3333);
