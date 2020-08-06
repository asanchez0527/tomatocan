$(document).on("turbolinks:load", () => {
  // get session variables
  var current_user = $("#user_vars").data("user")
  var owner = $("#user_vars").data("owner")
  var room = $("#user_vars").data("room")

  $.post("/users/load", { room: room, user: current_user, owner: owner })

  $(window).on('beforeunload', () => {
    $.post("/users/unload", { user: current_user, room: room })
  });
})