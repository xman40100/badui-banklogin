let inputPwd = document.querySelector("#password");
let notUsingIE = true;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".year").innerHTML = getCurrentYear();
    randomizeButtons();
    fuckWebsiteUp();
    console.log("If you wanna test the website, append '?reallywannauseit=1' to the URL.");
});

document.querySelector("#formMain").addEventListener("submit", (e) => {
    e.preventDefault();
    redirect();
    return false;
});

let keypadArea = document.querySelector("#keypadarea");

keypadArea.addEventListener("mouseenter", (e) => {
    hideButtons();
});

keypadArea.addEventListener("mouseleave", (e) => {
    randomizeButtons();
});

document.querySelectorAll(".keypadbtn").forEach((node) => {
    node.addEventListener("click", (e) => {
        let element = e.target || e.srcElement;
        let num = element.getAttribute("real-num");
        inputPwd.value += num;
    });
});

function hideButtons() {
    let buttons = document.querySelectorAll(".keypadbtn");
    buttons.forEach((element) => {
        element.setAttribute("real-num", element.innerHTML);
        element.innerHTML = "*";
    });
}

function randomizeButtons() {
    let buttons = document.querySelectorAll(".keypadbtn");
    let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let numbers = numArray.sort(() => 0.5 - Math.random());

    buttons.forEach((element, index) => {
        element.innerHTML = numbers[index];
    });
}

function redirect(seenMessage = false) {
    console.log(notUsingIE);
    if (notUsingIE && !seenMessage) {
        showIEMessage();
        return;
    }

    let audioPlayer = document.querySelector("#loginaudio");
    let message = document.querySelector("#loggingin");
    message.style.display = "block";
    audioPlayer.play();
    audioPlayer.addEventListener("ended", () => {
        let videos = [
            "https://www.youtube.com/watch?v=j3lo7Vgm6RI",
            "https://www.youtube.com/watch?v=FBOmThMGJSA",
            "https://www.youtube.com/watch?v=mGuQiOb8B9I",
            "https://www.youtube.com/watch?v=M82jvnwga0E",
            "https://www.youtube.com/watch?v=3b5Lh625fN4"
        ];

        let video = videos[Math.floor(Math.random() * videos.length)];
        window.location.href = video;
    });
}

function showIEMessage() {
    let message = document.querySelector("#msie6");
    message.style.display = "block";
    document.querySelector("#closeMsg").addEventListener("click", (e) => {
        message.style.display = "none";
        redirect(true);
    });
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function fuckWebsiteUp() {
    let reallyWantsToUse = window.location.href.indexOf("?reallywannauseit=1") != -1;
    if (reallyWantsToUse) {
        return;
    }
    
    let userAgent = navigator.userAgent;
    let fuckThem = ["OPR", "Opera", "Chrome", "Safari", "Firefox"];
    notUsingIE = fuckThem.some((browser) => {
        return userAgent.indexOf(browser) != -1;
    });

    if (!notUsingIE) {
        return;
    }

    document.querySelectorAll("table").forEach((element) => {
        element.width = "1%";
    });

    document.querySelectorAll("input").forEach((element) => {
        element.style.width = "100%";
    });

    document.querySelectorAll("*").forEach((element) => {
        let spacing = Math.floor(Math.random() * 25) + 1;
        element.style.letterSpacing = spacing + "px";
        element.style.lineHeight = spacing + "px";
    });

    document.querySelectorAll("button").forEach((element) => {
        let width = Math.floor(Math.random() * 100) + 1;
        element.style.width = width + "%";
    });

    document.querySelectorAll("td").forEach((element) => {
        element.width = "1%";
    });

}