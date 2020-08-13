// var name = $("#user_vars").data("name")
// var id = $("#user_vars").data("id")
// var room = $("#user_vars").data("room")
// var event = $("#user_vars").data("event")
var name = $("meta[property='user-name']").attr('content');
var id = $("meta[property='user-id']").attr('content');
var room = $("meta[property='room']").attr('content');
var event = $("meta[property='event']").attr('content');

// load user to attendees table
console.log("loading user")
$.post("/users/load", {id: id, room: room}, () => {
  console.log("user loaded")
})

$(document).ready(() => {
  
})

// unload user from database
$(window).on("beforeunload", () => {
  console.log("unloading user")
  $.post("/users/unload", {id: id, room: room}, () => {
    console.log("user unloaded")
  })
})

// // function block(name, blocker, blockee) {
// //   if (confirm("Are you sure you want to block " + name + " from your page?")) {
// //     $.post("/users/block", {blocker: blocker, to_block: blockee})
// //   }
// // }