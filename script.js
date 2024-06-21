let ossz_perc = 0;
let ossz_kcal = 0;
let perc = null;
let eredmeny = null;

window.onload = render;


for (let input of document.querySelectorAll(".input-data")) {
    input.addEventListener("keyup", function(event) {
        const sport = event.target.id;
        const kcal = event.target.dataset.kcal;
         perc = parseInt(document.getElementById(`${sport}`).value);

         eredmeny = parseInt(kcal / (60 / perc));

         if (perc !== "NaN" && perc > 0) {
        
        document.getElementById(`${sport}-eredmeny`).value = eredmeny;
         }
    });
}


for (let input of document.querySelectorAll(".input-data")) {
    input.addEventListener("change", function() {

        ossz_perc += perc;
        ossz_kcal += eredmeny;
        let szazalek = parseInt((ossz_kcal / 2000) * 100);
        
        document.getElementById("ossz-perc").value = ossz_perc;
        document.getElementById("ossz-kcal").value = ossz_kcal;
        document.getElementById("szazalek").value = szazalek;
    })
}

document.getElementById("adatok-torlese").addEventListener("click", render);

function render() {

    const inputArray = Array.from(document.querySelectorAll(".input-field"));
    inputArray.forEach(function(e){
        e.value = "";
    })

}
