const score = document.getElementById('score');
const energy = document.getElementById('energy');
const fill = document.getElementById('fill');
const canister = document.getElementById('canister');

const coin_touch = document.getElementById('coin_touch');
const coin_img = document.getElementById('coin_img');
const coin_static = 'img/coin.png';
const coin_gif = 'img/coin.gif';

/* localStorage.clear(); */
let energy_now = Number(localStorage.getItem('energy_now')) || 0;
let lvl_tap_now = Number(localStorage.getItem('lvl_now')) || 5;
let score_now = Number(localStorage.getItem('score_now')) || 0;
let canister_now = Number(localStorage.getItem('canister_now')) || 3;

const energy_max = 1000;
const canister_max = 3;
const lvl_tap_max = 6;

let score_interval;

function update_Score_Display() {
    score.textContent = `${score_now}`;
}
function update_Energy_Display() {
    energy.textContent = `${energy_now}/${energy_max}`;
}
function update_Canister_Display() {
    canister.textContent = `FILL ${canister_now}/${canister_max}`;
}
function restore_energy_interval() {
    if (energy_now < energy_max) {
        energy_now += 1;
        if (energy_now > energy_max) {
            energy_now = energy_max;
        }
        localStorage.setItem('energy_now', energy_now);
        update_Energy_Display();
    }
}
function restore_canister_interval() {
    if (canister_now < canister_max) {
        canister_now += 1;
        if (canister_now > canister_max) {
            canister_now = canister_max;
        }
        localStorage.setItem('canister_now', canister_now);
        update_Canister_Display();
    }
}

window.onload = function() {
    update_Score_Display();
    update_Energy_Display();
    update_Canister_Display();
    setInterval(restore_energy_interval, 1000);
    setInterval(restore_canister_interval, 3000);
}

function touch() {
    if (energy_now >= lvl_tap_now) {
        energy_now -= lvl_tap_now;
        score_now += lvl_tap_now;
        localStorage.setItem('score_now', score_now);
        localStorage.setItem('energy_now', energy_now);
        update_Score_Display();
        update_Energy_Display();
    }
    if (energy <= 0) {

    }
};

if (coin_touch) {
    coin_touch.addEventListener('touchstart', function() {
        coin_img.src = coin_gif;
        score_interval = setInterval(touch, 1000);
    });
    coin_touch.addEventListener('touchend', function() {
        coin_img.src = coin_static;
        clearInterval(score_interval);
    });
}

fill.addEventListener('click', function() {
    if (canister_now > 0) {
        if (energy_now < energy_max) {
            energy_now = energy_max;
            canister_now -= 1;
            localStorage.setItem('energy_now', energy_now);
            localStorage.setItem('canister_now', canister_now);
            update_Energy_Display();
            update_Canister_Display();
        }
        if (energy_now >= energy_max) {

        }
    }
});



/* Смена содержимого контейнера */
const f_btns = document.querySelectorAll('.f_btn');
const sections = document.querySelectorAll('.container');
const tasks = document.querySelectorAll('.tasks');
const friends = document.querySelectorAll('.friends');
const background_coin = document.querySelectorAll('.background-coin');

for (let i = 0; i < f_btns.length; i++) {
    f_btns[i].addEventListener("click", function() {
        if (f_btns[i].classList.contains("active") != true) {
            [].forEach.call(f_btns, function (del) {
                del.classList.remove('active');
            });
            [].forEach.call(sections, function (del) {
                del.classList.remove('active');
            });
            f_btns[i].classList.add("active");
            sections[i].classList.add("active");
            tasks[0].scrollTo({top: 0});
            friends[0].scrollTo({top: 0});
            if (i != 1) {
              background_coin[0].classList.add("active");
          } else {
              background_coin[0].classList.remove("active");
          }
        }
    });
};
