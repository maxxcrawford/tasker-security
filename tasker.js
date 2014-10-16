var sec = true,
	home = false,
	peb = false,
	car = false;

// Security Function

function enableSec(state) {
	if (!peb || !car || !home) {
		sec = true;
		state = !state;
	} else {
		console.log('enableSec--fail');
	}
}

function disableSec() {
	sec = false;
}

// State Specific Functions

var homeSec = {
	connect: function() {
		home = true;
		disableSec();
	},
	exit: function() {
		enableSec(home);
	}
};

var pebbleSec = {
	connect: function() {
		peb = true;
		disableSec();
	},
	exit: function() {
		enableSec(peb);
	}
};

var carSec = {
	connect: function() {
		car = true;
		disableSec();
	},
	exit: function() {
		enableSec(car);
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
	secStatus.text(sec);
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
