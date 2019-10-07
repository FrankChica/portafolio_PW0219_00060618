var parseLateSwitch = (value) => {
    if (value) {
        return "tarde"
    }
    return "a tiempo"
}

function addRow(carnet, schedule, late, tBody) {
    var newRow = document.createElement("tr");
    var date = new Date();
    newRow.innerHTML = `   
    <td><b>${carnet}</b></td>
    <td><b>${schedule}</b></td>
    <td><b>${date.toLocaleDateString()}</b></td>
    <td><b>${late}</b></td>
`


    tBody.appendChild(newRow);
};

window.onload = function () {
    var submit_btn = document.querySelector("#submit_btn");
    var carnet_field = document.querySelector("#carnet_field");
    var schedule_field = document.querySelector("#schedule_field");
    var late_switch = document.querySelector("#late_switch");
    var tBody = document.querySelector("#table_body");


    var carnetregex = new RegExp(`[0-9]{8}`);


    submit_btn.addEventListener("click", function () {
        var carnet = carnet_field.Value;
        var schedule = schedule_field.options[schedule_field.selectedIndex].text;
        var late = parseLateSwitch(late_switch.checked);
        if (carnetregex.test(carnet)) {
            addRow(carnet, schedule, late, tBody);
        } else {
            alert("no validp");
        }
    });
    carnet_field.addEventListener("keyup", (event) => {
        var carnet = carnet_field.value;
        
        if (carnetregex.test(carnet)) {
            
            submit_btn.disabled = false;
        } else {
            submit_btn.disabled = true;
        }

    });

}
