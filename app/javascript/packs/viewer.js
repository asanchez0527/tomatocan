var current_user = $("#user_vars").data("user")
var owner = $("#user_vars").data("owner")
var room = $("#user_vars").data("room")

$(window).on("beforeunload", () => {
  console.log("unloading user")
  $.post("/users/unload", {user: current_user, room: room})
})

