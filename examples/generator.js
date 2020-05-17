/**
* Example 1 to explain generator functions
*/

/**
* Q: Write a generator function which will return n number of tickets.
*/

function getTotalTicketAvailable () {
	return 3;
}

/** 
* A generator function is one where you can yield the execution call. 
* It returns a special `Generator object`
* The object provides a `next()` function which returns { value: <>, done: <true|false> }
*/
function * generateTickets  () {
	const totalTicketCount = getTotalTicketAvailable();
	let currentCount = 0;

	while (currentCount < totalTicketCount) {
		yield ++currentCount;
	}
	return;
}

function getTickets (users) {
	const ticketGenerator = generateTickets();

	users.forEach((user) => {
		const ticket = ticketGenerator.next();
		if (ticket.value) {
			console.log(`Congrats ${user} you have won a ticket, no: ${ticket.value}`);
		} else {
			console.log(`Sorry ${user}, there are no more tickets available`);
		}
	});
}

let q = ['user1', 'user2', 'user3', 'user4', 'user5'];
getTickets(q);


// the generator object should be regenerated
q = ['user 6', 'user 7'];
getTickets(q);

