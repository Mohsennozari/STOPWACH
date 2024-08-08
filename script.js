let [seconds, minutes, hours] = [0, 0, 0]; // تنظیم مقادیر اولیه برای ثانیه، دقیقه و ساعت
let displayTime = document.getElementById("displayTime"); // انتخاب عنصر HTML که زمان را نمایش می‌دهد
let timer = null; // متغیری برای نگهداری تایمر

function stopwatch() {
    seconds++; // افزایش ثانیه‌ها
    if (seconds === 60) { // بررسی اگر ثانیه‌ها به 60 رسید
        seconds = 0; // تنظیم ثانیه‌ها به 0
        minutes++; // افزایش دقیقه‌ها
        if (minutes === 60) { // بررسی اگر دقیقه‌ها به 60 رسید
            minutes = 0; // تنظیم دقیقه‌ها به 0
            hours++; // افزایش ساعت‌ها
        }
    }

    // تنظیم فرمت نمایش زمان به صورت hh:mm:ss
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = h + ":" + m + ":" + s; // نمایش زمان در عنصر HTML
}

function watchstart() {
    if (timer !== null) { // بررسی اگر تایمر قبلا تنظیم شده است
        clearInterval(timer); // توقف تایمر قبلی
    }
    timer = setInterval(stopwatch, 1000); // شروع تایمر جدید برای هر 1000 میلی‌ثانیه (1 ثانیه)
}

function watchstop() {
    clearInterval(timer); // توقف تایمر
}

function watchReset() {
    clearInterval(timer); // توقف تایمر
    [seconds, minutes, hours] = [0, 0, 0]; // بازنشانی مقادیر به 0
    displayTime.innerHTML = "00:00:00"; // نمایش زمان 00:00:00
}
