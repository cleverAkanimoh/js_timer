const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const resume = document.getElementById('resume');
const reset = document.getElementById('reset');

let count = null;

const updateTime = (e) => {
    let self = e.target;
    if (self.value > 60 || self.value < 0 || self.value.length === 3) {
        self.value = "";
    }
}
const updateHour = (e) => {
    let self = e.target;
    if (self.value > 99 || self.value < 0 || self.value.length === 3) {
        self.value = "";
    }
}

seconds.onkeyup = updateTime;
minutes.onkeyup = updateTime;
hour.onkeyup = updateHour;

const setToDefault = () => {
    seconds.value = "00"
    minutes.value = "00"
    hour.value = "00"
    seconds.disabled = false
    minutes.disabled = false
    hour.disabled = false
    start.style.display = "block";
    stop.style.display = "none";
    resume.style.display = "none";
    reset.style.display = "none";
}
const stopWatch = () => {
    if (seconds.value == 0) {
        seconds.value = 60;
        minutes.value--
    } else {
        seconds.value--
    }

    if (minutes.value < 0) {
        minutes.value = 60
        hour.value--;
    }
    if (hour.value < 0) {
        hour.value = 99;
    }
    if (seconds.value == 0 && minutes.value == 0 && hour.value == 0) {
        clearInterval(count);
        setToDefault();
    }
}

const startTimer = () => {
    if (seconds.value == '00' && minutes.value == '00' && hour.value == '00') {
        clearInterval(count);
        setToDefault();
    } else if (seconds.value == '0' && minutes.value == '0' && hour.value == '0') {
        clearInterval(count);
        setToDefault();
    } else if (seconds.value == "" && minutes.value == "" && hour.value == "") {
        clearInterval(count);
        setToDefault();
    }else {
        count = setInterval(stopWatch, 1000);
        seconds.disabled = true
        minutes.disabled = true
        hour.disabled = true
        start.style.display = "none";
        reset.style.display = "block";
        stop.style.display = "block";
    }
};

const pauseTimer = () => {
    clearInterval(count);
    stop.style.display = "none";
    resume.style.display = "block";
}
const resumeTimer = () => {
    startTimer();
    stop.style.display = "block";
    resume.style.display = "none";
}
const resetTimer = () => {
    clearInterval(count);
    setToDefault();
}

start.onclick = startTimer;
stop.onclick = pauseTimer;
resume.onclick = resumeTimer;
reset.onclick = resetTimer;