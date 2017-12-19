var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}


var claimReservation = function () {
  var name = document.getElementById("form").value;
  name = name[0].toUpperCase() + name.slice(1).toLowerCase();
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
    reservations[name] = {claimed: true};
    document.getElementById("new-res").innerHTML +='<br>'+name;
}
}
