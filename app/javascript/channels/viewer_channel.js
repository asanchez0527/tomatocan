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
    $.post("/users/inviewer", {user: data.content.user, room: data.content.room})
    
    $(document).ready(() => {
      $.get("/conversations/attendees", {room: urlParams.get('chatrm'), user: "<%= current_user.id %>", owner: "<%= @user.id %>"}, (data) => {
        if (data.success == true)
          $('#attendees').html(data.html)
      })
    })
  }
});
