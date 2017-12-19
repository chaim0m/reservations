var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}


var name = prompt('Please enter the name for your reservation');
name = name[0].toUpperCase() + name.slice(1).toLowerCase();
var claimReservation = function () {
  if (reservations[name]){
    if (reservations[name].claimed){
      alert('Welcome to the best restaurant ever!');
    }
    else{
      alert('Your reservations was already used, Ha!');
    }
  }
  else{
    alert('You have a new reservation');
    reservations.name = {claimed: true};
}
}

claimReservation();
