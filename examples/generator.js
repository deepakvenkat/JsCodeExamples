/**
* Example 1 to explain generator functions
*/

/**
* Q: Write a generator function which will return n number of tickets.
*/

function getTotalTicketAvailable () {
	return 3;
}

function createUsers (userCount, prefix) {
	return [...Array(userCount).keys()]
		.map((key) => `${prefix} user ${key}`);
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
	// you can't do the following 
	// becuase yield is no longer in the context of a generator.
	// [...Array(totalTicketCount).keys()].forEach((key) => yield key);
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

let q = createUsers(5, 'test1');
getTickets(q);


// the generator object should be regenerated
q = createUsers(2, 'test2');
getTickets(q);


/**
* generators also return a iterable object
**/
function iterateOverTickets1 (users) {
	let i = 0;
	for (const ticket of generateTickets()) {
		console.log(`Congrats ${users[i]} you have won a ticket, no: ${ticket}`);
		i++;
	}
	console.log(`Sorry users ${users.slice(i)}, no more tickets available`);
}

function iterateOverTickets2 (users) {
	let i = 0;
	const tickets = [...generateTickets];
	tickets.forEach((ticket) => {
		console.log(`Congrats ${users[i]} you have won a ticket, no: ${ticket}`);
		++i;
	});
	console.log(`Sorry users ${users.slice(i)}, no more tickets available`);
}


q = createUsers(5, 'test3');
// should be the same output
iterateOverTickets1(q);
iterateOverTickets1(q);

