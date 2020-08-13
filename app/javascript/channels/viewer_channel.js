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
    if (data.content.type == "join") {
      console.log(`user ${data.content.id} joined the room`)
      var currentUserId = $("meta[property='user-id']").attr('content');
      var attendee = document.createElement("div")
      var name = document.createTextNode(data.content.name)
      var span = document.createElement('span')
      span.className = "test"
      attendee.id = `user-${data.content.id}`
      attendee.className = "attendee"
      span.appendChild(name)
      attendee.appendChild(span)
      span.onclick = () => {
        window.open(`/${data.content.permalink}`)
      }
      var button = document.createElement("button")
      button.innerHTML = "Block"
      button.className = "blockbutton"
      button.onclick = () => {
        if (confirm("Are you sure you want to block " + data.content.name + " from your page?")) {
          $.post("/users/block", {blocker: currentUserId, blockee: data.content.id})
        }
      }
      attendee.appendChild(button)
      $("#attendees").append(attendee)
    }
    else if (data.content.type == "leave") {
      $(`#user-${data.content.id}`).remove()
      console.log(`user ${data.content.id} left the room`)
    } else if (data.content.type == "block") {
      $.post("/users/is_blocked", {id: currentUserId}, (data) => {
        console.log(data)
      })
    }
  }
});
