console.log('Hello World');

// Creo due variabili per lampadina e il button
const lamp = document.getElementById('lamp');
const pButton = document.getElementById('powerButton'); 

// Creo la funzione che permette il cambio d'immagine tramite il click del bottone 
// pButton.addEventListener('click', function() {
//     // cambio l'immagine della lampadina da spenta a quella accesa
//     lamp.src = './img/yellow_lamp.png';
//     // modifco la scritta del button
//     pButton.textContent = 'Spegni';

    // Inserimento di una funzione accendi e spegni
    pButton.addEventListener('click', function(){
        if(lamp.src.includes('yellow_lamp.png')) {
            // la lampadina sarà spenta 
            lamp.src = './img/white_lamp.png';
            pButton.textContent = 'Accendi';
        } else { 
            lamp.src = './img/yellow_lamp.png';
            pButton.textContent = 'Spegni';

        }
    })
// });