const EventEmitter = require("events");

const button = new EventEmitter();

// Simulate click event
button.on("click", () => {
    console.log("Button was clicked!");
});

// Simulate mouseover event
button.on("mouseover", () => {
    console.log("Mouse is over the button!");
});

// Trigger the events
button.emit("click");
button.emit("mouseover");