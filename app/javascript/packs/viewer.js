// var name = $("#user_vars").data("name")
// var id = $("#user_vars").data("id")
// var room = $("#user_vars").data("room")
// var event = $("#user_vars").data("event")
var name = $("meta[property='user-name']").attr('content');
var id = $("meta[property='user-id']").attr('content');
var room = $("meta[property='room']").attr('content');
var event = $("meta[property='event']").attr('content');
var permalink = $("meta[property='permalink']").attr('content');

// load user to attendees table
console.log("loading user")
$.post("/users/load", { id: id, room: room, name: name, permalink: permalink }, () => {
  console.log("user loaded")
})

$(document).ready(() => {
  $.post("/conversations/attendees", { room: room }, (data) => {
    data.forEach(element => {
      console.log(element)
      var attendee = document.createElement("div")
      var name = document.createTextNode(element.user_name)
      attendee.id = `user-${element.user_id}`
      attendee.className = "attendee"
      attendee.appendChild(name)
      var button = document.createElement("button")
      button.innerHTML = "Block"
      button.onclick = () => {
        if (confirm("Are you sure you want to block " + element.user_name + " from your page?")) {
          $.post("/users/block", { blocker: id, to_block: element.user_id })
        }
      }
      attendee.appendChild(button)
      $("#attendees").append(attendee)
    });
  })
})

// unload user from database
$(window).on("beforeunload", () => {
  console.log("unloading user")
  $.post("/users/unload", { id: id, room: room }, () => {
    console.log("user unloaded")
  })
})
