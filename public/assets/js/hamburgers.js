// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var neweaten = $(this).data("neweaten");

    var neweatenState = {
      eaten: neweaten
    };

    // Send the PUT request.
    $.ajax("/api/hamburgers/" + id, {
      type: "PUT",
      data: neweatenState
    }).then(
      function() {
        console.log("changed eaten to", neweaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newhamburger = {
      name: $("#ca").val().trim(),
      eaten: false
    };

    // Send the POST request.
    $.ajax("/api/hamburgers", {
      type: "POST",
      data: newhamburger
    }).then(
      function() {
        console.log("created new hamburger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-hamburger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/hamburgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted hamburger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
