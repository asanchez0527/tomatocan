import consumer from "./consumer"

consumer.subscriptions.create("ViewerChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to the room!");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log("Data Received")
    $("#attendees").append("<div class=attendee>" + data.content.id + "</div>")
  }
});
