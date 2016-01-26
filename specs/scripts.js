function Ticket(movie, time, age, price) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = price;
}

Ticket.prototype.ticketPrice = function() {
  return this.movie + ", " + this.time + ", " + this.age + " : " + this.price;
}
