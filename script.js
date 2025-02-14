function convertEpoch() {
    const epochInput = document.getElementById('epochInput').value;
    console.log(epochInput);
    const date = new Date(parseInt(epochInput) * 1000);
    document.getElementById('result').innerText = date.toString();
    console.log(date.toString());
}
function convertHuman(){
    const dateInput = document.getElementById("dateInput").value;
    const timeInput = document.getElementById("timeInput").value;
    console.log(dateInput);
    console.log(timeInput);
    const dateTimeString = `${dateInput}T${timeInput}`;
    console.log(dateTimeString);
    const date = new Date(dateTimeString);
    const epochTimeInMilliseconds = date.getTime();
    const epochTimeInSeconds = Math.floor(epochTimeInMilliseconds / 1000);
    document.getElementById('convertedEpoch').innerText = `Epoch Time: ${epochTimeInSeconds}`;
}
function currentTime(){
    const date = new Date();
    const epochTimeInMilliseconds = date.getTime();
    const epochTimeInSeconds = Math.floor(epochTimeInMilliseconds / 1000);
    document.getElementById('currentTime').innerText = `The current Unix epoch time is ${epochTimeInSeconds}`;
}
setInterval(currentTime, 1000);
function convertHuman2(){
    const yearInput = document.getElementById("yearInput").value;
    const monthInput = document.getElementById("monthInput").value;
    const dayInput = document.getElementById("dayInput").value;
    const hourInput = document.getElementById("hourInput").value;
    const minuteInput = document.getElementById("minInput").value;
    const secondInput = document.getElementById("secInput").value;
    console.log(yearInput);
    console.log(monthInput);
    console.log(dayInput);
    console.log(hourInput);
    console.log(minInput);
    console.log(secInput);
    const dateTimeString = `${yearInput}-${monthInput}-${dayInput}T${hourInput}:${minuteInput}:${secondInput}`;
    console.log(dateTimeString);
    const date = new Date(dateTimeString);
    const epochTimeInMilliseconds = date.getTime();
    const epochTimeInSeconds = Math.floor(epochTimeInMilliseconds / 1000);
    document.getElementById('convertedEpoch2').innerText = `Epoch Time: ${epochTimeInSeconds}`;
}