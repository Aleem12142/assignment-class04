function checkTicket(age: number): number {
    let ticketPrice: number;

    if(age <5){
       ticketPrice = 0; // free for children under 5
    }else if(age >= 5 && age <= 12){
        // chiled between 5 and 12
        ticketPrice = 100;
    }else if(age > 12 && age <= 65){
        // adults between 13 and 64
        ticketPrice = 250;
    }else{
        // elders 65 or above
        ticketPrice = 100;
    }
    return ticketPrice;
}

let childTicketPrice = checkTicket(4); // Ticket price fore a child by his/her age
console.log(`Ticket price for a child under 5: ${childTicketPrice}`);
childTicketPrice = checkTicket(10);
console.log(`Ticket price for a child between 5 and 12: ${childTicketPrice}`);
let adultticketPrice = checkTicket(25); // Ticket price for an adult by his/her age
console.log(`Ticket price for an adult: ${adultticketPrice}`);
let elderTicketPrice = checkTicket(85); // Ticket price for an elder person by his/her age
console.log(`Ticket price for an elder person: ${elderTicketPrice}`);
