// save current user id
var currID = "<%= current_user.id %>"
// get url params
const urlParams = new URLSearchParams(window.location.search);

//check if user is blocked every 300 seconds
function isBlocked() {
  $.post("/users/is_blocked", null, (data) => {
    if (data.includes("<%= @user.permalink %>")) {
      window.location.replace("/blocked")
    }
  })
  setTimeout(isBlocked, 300000);
}

// check if user is signed in every 30 seconds
function signedIn() {
  $.post("/users/signed_in", null, (data) => {
    if (data.success == false) {
      $.post("/users/unload", {currentUser: currID})
      location.reload()
    }
  })
  setTimeout(signedIn, 300000);
}

// load attendees list
function loadAttendees(){
  $.get("/conversations/attendees", {event: urlParams.get('event'), currentUser: "<%= current_user.id %>", owner: "<%= @user.id %>"}, (data) => {
    if (data.success == true)
      $('#attendees').html(data.html)
  })
  setTimeout(loadAttendees, 300000);
}

// unload actions
$(window).on('beforeunload', (event) => {
  // remove user from attendees list
  $.post("/users/unload", {currentUser: currID, event: urlParams.get('event')})
});

// makes all links on viewer page open in new tab
$(document).ready(() => {
  $("a").attr("target", "_blank");
});


// run all functions
isBlocked()
signedIn()
loadAttendees()