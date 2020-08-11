import { array } from "./application";

var name = $("#user_vars").data("name")
var id = $("#user_vars").data("id")
var room = $("#user_vars").data("room")
var event = $("#user_vars").data("event")

$(document).ready(() => {
  console.log("loading user")
  $.post("/users/load", {id: id})
})

$(window).on("beforeunload", () => {
  console.log("unloading user")
  $.post("/users/unload", {user: current_user})
})

function block(name, blocker, blockee) {
  if (confirm("Are you sure you want to block " + name + " from your page?")) {
    $.post("/users/block", {blocker: blocker, to_block: blockee})
  }
}