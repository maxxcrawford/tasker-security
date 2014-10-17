var security = true,
	home = false,
	peb = false,
	car = false;

// Security Function

function enableSec() {
	if (peb || home || car){
		// SKIP
		console.log("sec.skip");
	} else {
		console.log("sec.true");
		security = true;

	}
}

function disableSec() {
	security = false;
}

// State Specific Functions

var homeSec = {
	connect: function() {
		home = true;
		disableSec();
	},
	exit: function() {
		enableSec();
		home = false;
	}
};

var pebbleSec = {
	connect: function() {
		peb = true;
		disableSec();
	},
	exit: function() {
		enableSec();
		peb = false;
	}
};

var carSec = {
	connect: function() {
		car = true;
		disableSec();
	},
	exit: function() {
		enableSec();
		car = false;
	}
};

// HTML Triggers

var homeBtn = $('#homeToggle'),
	pebBtn = $('#pebToggle'),
	carBtn = $('#carToggle'),
	secStatus = $('#secStatus'),
	homeStatus = $('#homeStatus'),
	pebStatus = $('#pebStatus'),
	carStatus = $('#carStatus');

// Updates Status of Each State

function statusPrint() {
	secStatus.text(security);
	homeStatus.text(home);
	pebStatus.text(peb);
	carStatus.text(car);
}

homeBtn.on('click', function(){
	if (!home){
		homeSec.connect();
	} else {
		homeSec.exit();
	}
	statusPrint();
});

carBtn.on('click', function(){
	if (!car){
		carSec.connect();
	} else {
		carSec.exit();
	}
	statusPrint();
});

pebBtn.on('click', function(){
	if (!peb){
		pebbleSec.connect();
	} else {
		pebbleSec.exit();
	}
	statusPrint();
});

$(document).ready(function() {
	statusPrint();
});
