// get session variables
var current_user = $("#user_vars").data("user")
var owner = $("#user_vars").data("owner")
var room = $("#user_vars").data("room")

$(document).ready(() => {
  $.post("/users/load", { room: room, user: current_user, owner: owner })
})

function loadAttendees() {
  $.get("/conversations/attendees", { room: room, user: current_user, owner: owner }, (data) => {
    if (data.success == true)
      $('#attendees').html(data.html)
  })
}

$(window).on('beforeunload', () => {
  $.post("/users/unload", { user: current_user, room: room })
});

loadAttendees()
