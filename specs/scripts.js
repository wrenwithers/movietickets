function Ticket(movie, time, age, price) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = price;
}

Ticket.prototype.ticketPrice = function() {
  return this.movie + ", " + this.time + ", " + this.age + " : " + this.price;
}

$(document).ready(function() {
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("input#new-movie").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedAge = $("input#new-age").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});


$('.dropdown-toggle').dropdown()
