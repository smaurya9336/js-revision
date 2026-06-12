const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        

        // const bmi = parseFloat(results.innerText);

        if (bmi < 18.6) {
        const uw = document.querySelector("#weight-guide p:nth-child(2)");
        uw.innerHTML = "UnderWeight";
        }   
        else if (bmi >= 18.6 && bmi <= 24.9) {
        const nw = document.querySelector("#weight-guide p:nth-child(3)");
        nw.innerHTML = "Normal Range";
        }   
        else {
        const ow = document.querySelector("#weight-guide p:nth-child(4)");
        ow.innerHTML = "Overweight";
    }
    }
});
