const clock = document.querySelector("h2#clock");

function currentClock() {
    const date = new Date();

    month = String(date.getMonth()).padStart(2, "0");
    day = String(date.getDate()).padStart(2, "0");
    hour = String(date.getHours()).padStart(2, "0");
    minute = String(date.getMinutes()).padStart(2, "0");

    clock.innerText = ` ${month}월 ${day}일 ${hour}시 ${minute}분`;
}

currentClock();
setInterval(currentClock, 1000);