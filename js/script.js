document.querySelector('#ticket-generator').addEventListener('click', function(){
    const numeroKm = Number.parseFloat(document.querySelector('#chilometri').value, 10);
    const età = Number.parseFloat(document.querySelector('#età').value, 10);
    
    const percScontoEl = document.querySelector('span#percentuale-sconto');
    const impScontoEl = document.querySelector('span#importo-sconto');
    const prezzoScontatoEl = document.querySelector('span#prezzo-scontato');

    prezzo = (numeroKm * 0.267113);
    sconto = Number;


    if (età < 21){
        sconto = 24.552
    }else if(età > 63){
        sconto = 37.893
    }
    
    totaleScontato = prezzo/100*sconto
    prezzo = prezzo - (prezzo/100*sconto);    
    

    percScontoEl.innerHTML = sconto.toFixed(2) + '%';
    impScontoEl.innerHTML = totaleScontato.toFixed(2) + '€';
    prezzoScontatoEl.innerHTML = prezzo.toFixed(2) + '€';

    console.log(prezzo.toFixed(2), prezzo);
})

