const hour = document.getElementById("hour");
const min = document.getElementById("min");
const second = document.getElementById("second");

function changeDate() {
    const current = new Date();

    const seconds = current.getSeconds();
    const secondsDegrees = 90 + (6 * seconds);
    console.log(seconds , secondsDegrees);
    second.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = current.getMinutes();
    const minsDegrees = 90 + (6 * mins);
    console.log(mins , minsDegrees);
    min.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = current.getHours();
    const hoursDegrees = 90 + (30 * hours);
    console.log(hours , hoursDegrees);
    hour.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(changeDate, 1000);
changeDate();

