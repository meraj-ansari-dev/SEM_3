const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// Listener for greet event
myEmitter.on("greet", (name) => {
    console.log(`Hello ${name}!`);
});

// Listener for exit event
myEmitter.on("exit", () => {
    console.log("Exit event triggered.");
});

// Trigger events
myEmitter.emit("greet", "Meraj");
myEmitter.emit("exit");