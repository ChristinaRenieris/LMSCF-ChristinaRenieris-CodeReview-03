function calculateInsurance() {
    var name = document.getElementById('name').value;
    var age = parseInt(document.getElementById('age').value);
    var country = document.getElementById('country').value;
    var horse_power = parseInt(document.getElementById('horsepower').value);
    var result = " ";

    switch (country) {
        case "Austria":
            result = Math.round((horse_power * 100) / age + 50);
            break;

        case "Hungary":
            result = Math.round((horse_power * 120) / age + 100);
            break;

        case "Greece":
            result = Math.round((horse_power * 150) / (age + 3) + 50);
            break;

        default:
            result = "Please select a country!"
    }
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = name + ", your insurance costs " + result + " &euro;";
}