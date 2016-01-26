describe('Ticket', function() {
  it("creates a ticket with the given properties", function() {
    var testTicket = new Ticket("First Run","Matinee","Senior","$5.00");
    expect(testTicket.movie).to.equal("First Run");
    expect(testTicket.time).to.equal("Matinee");
    expect(testTicket.age).to.equal("Senior");
    expect(testTicket.price).to.equal("$5.00")
  });
});

it("adds the ticketPrice method to all tickets", function() {
  var testTicket = new Ticket("First Run","Matinee","Senior","$5.00");
  expect(testTicket.ticketPrice()).to.equal("First Run, Matinee, Senior : $5.00");
});
