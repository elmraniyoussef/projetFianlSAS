const trips = [
  {
    id: 1,
    departure: "Safi",
    destination: "Youssoufia",
    departureTime: "08:00",
    arrivalTime: "09:00",
    price: 25,
    availableSeats: 50
  },
  // Les autres données sont disponibles dans le fichier fourni.
];



function afficherTrajets() {

    console.log("=== TRAJETS DISPONIBLES ===");

    for (let i = 0; i < trips.length; i++) {

        console.log("#" + trips[i].id + " " 
            + trips[i].departure + " → " 
            + trips[i].destination);

        console.log("Départ : " + trips[i].departureTime);

        console.log("Arrivée : " + trips[i].arrivalTime);

        console.log("Prix : " + trips[i].price + " DH");

       
     console.log("Places disponibles : " + trips[i].availableSeats);


    }
}

function acheterTicket() {

    let passengerName = prompt("Nom du passager :");
    let tripId = Number(prompt("ID du trajet :"));

    let trip = trips.find(function(trip) {
        return trip.id === tripId;
    });

    if (!trip) {
        console.log("Trajet introuvable.");
        return;
    }

    if (trip.availableSeats <= 0) {
        console.log("Train complet.");
        return;
    }

    let ticketId = tickets.length + 1;

    let ticket = {
        id: ticketId,
        passengerName: passengerName,
        tripId: tripId,
        seatNumber: 1,
        price: trip.price
    };

    tickets.push(ticket);

    trip.availableSeats--;

    console.log("Ticket acheté avec succès !");
}