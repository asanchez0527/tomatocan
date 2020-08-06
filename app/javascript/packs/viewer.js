var current_user;
var owner;
var room;

$(document).ready(() => {
  // get session variables
  current_user = $("#user_vars").data("user")
  owner = $("#user_vars").data("owner")
  room = $("#user_vars").data("room")

  $.post("/users/load", { room: room, user: current_user, owner: owner })
})

$(window).on('beforeunload', () => {
  $.post("/users/unload", { user: current_user, room: room })
  console.log("unloaded")
});