function start() {
    const initialScore = getScore();
    setScore(initialScore);
    setImage();
    updateEnergyDisplay();
}
function setScore(score) {
    localStorage.setItem('score', score); // заменить локал???
    $score.textContent = score;
}

window.onload = function() {
    energy.textContent = `${energy}/${maxnrg}`;
    fillcanistra.textContent = `FILL ${canistra}/${canistramax}`;
};

function getScore() {
    return Number(localStorage.getItem('score')) || 0; // тот же нипатятни локал
}
function addOne() {
    if (energy > 0) {
        setScore(getScore() + 5);
        energy -= 5;
        localStorage.setItem('energy', energy);
        updateEnergyDisplay();
    }
    if (energy <= 0) {
        clearInterval(scoreInterval);
    }
}
function updateEnergyDisplay() {
    $energy.textContent = `${energy}/${maxnrg}`;
}
function updateCanistraDisplay() {
    fillcanistra.textContent = `FILL ${canistra}/${canistramax}`;
}
if (gifImage) {
    gifImage.addEventListener('touchstart', function() {
        gifImage.src = gifSrc;
        scoreInterval = setInterval(addOne, 200); // нет разницы в интервале
    });
    gifImage.addEventListener('touchend', function() {
        gifImage.src = staticImageSrc;
        clearInterval(scoreInterval);
    });
}
const restoreEnergyInterval = setInterval(() => {
    if (energy < maxnrg) {
        energy += 2;
        if (energy > maxnrg) {
            energy = maxnrg;
        }
        localStorage.setItem('energy', energy);
        updateEnergyDisplay();
    }
}, 1000);

const restoreCanistrainterval = setInterval(() => {
    if (canistra < canistramax) {
        canistra += 1;
        if (canistra > canistramax) {
            canistra = canistramax;
        }
        fillcanistra.textContent = `${canistra}/${canistramax}`;
        localStorage.setItem('canistra', canistra);
        updateEnergyDisplay();
        updateCanistraDisplay();
    }
}, 3000);

refill.addEventListener('click', function() {
    if (canistra > 0) {
    if (energy < maxnrg) {
        energy += 1000;
        canistra -= 1;
        if (energy > maxnrg) {
            energy = maxnrg;
            canistra -= 0;
    }
    updateEnergyDisplay();
    updateCanistraDisplay();
    }}
});


if (coin) {
    coin.addEventListener('touchstart', function() {
        coin.src = gif_img_src;
        setInterval(function() {
            if (energy_now > 0) {
                energy_now -= 1;
                score_now += 1;
                localStorage.setItem('score_now', score_now);
                localStorage.setItem('energy', energy);
                update_Score_Display();
                update_Energy_Display();
            }
            if (energy <= 0) {
                learInterval(scoreInterval);
            }
        }, 1000);
    });
    coin.addEventListener('touchend', function() {
        coin.src = static_img_src;
    });
}