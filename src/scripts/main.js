const eventDate = new Date("Jun 05, 2023, 00:00:00");
//pegando a data do evento
const timeStampEvent = eventDate.getTime();
//timestamp do evento

const timeCounter = setInterval(function(){
    const now = new Date();
    const timeNow = now.getTime();
    
    const tillEvent = timeStampEvent - timeNow;

    const days = 1000 * 60 * 60 * 24;
    const hours = 1000 * 60 * 60;
    const minutes = 1000 * 60;

    const daysTillEvent = Math.floor(tillEvent / days);
    const hoursTillEvent = Math.floor((tillEvent % days) / hours);
    const minutesTillEvent = Math.floor((tillEvent % hours) / minutes);
    const secondsTillEvent = Math.floor((tillEvent % minutes) / 1000);

    document.getElementById("information").innerHTML = (`O aniversário é em: ${daysTillEvent}d ${hoursTillEvent}h ${minutesTillEvent}m ${secondsTillEvent}s`);

    if (tillEvent < 0){
        document.getElementById("information").innerHTML = "Esse ano o aniversário já passou..."
    }
}, 1000);
//a cada segundo essa função vai ser atualizada