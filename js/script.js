const randomImages = ['../img/FirstCard.png', '../img/SecondCard.png', '../img/ThirdCard.png', '../img/FourthCard.png', '../img/FirstCard.png', '../img/SecondCard.png', '../img/ThirdCard.png', '../img/FourthCard.png', '../img/FirstCard.png', '../img/SecondCard.png', '../img/ThirdCard.png', '../img/FourthCard.png', '../img/FirstCard.png', '../img/SecondCard.png', '../img/ThirdCard.png', '../img/FourthCard.png', '../img/FirstCard.png', '../img/FirstCard.png',];
let randomedImages = [];
const shuffledImages = randomImages.sort(() => Math.random() - 0.5);

const attsCounter = document.getElementById('attsCounter');
const pointsCounter = document.getElementById('pointsCounter');
const pointAlert = document.getElementById('pointAlert');

shuffledImages.forEach(image => {
    randomedImages.push(image);
});

const cards = document.querySelectorAll('.card');
let openedCards = [];
let matchedCards = [];

cards.forEach((card, index) => {
    const cardImage = card.querySelector('.card-image');
    const initialImage = randomedImages[index];

    cardImage.src = '../img/questionMark.svg';

    card.addEventListener('click', function () {
        if (!openedCards.includes(card) && !matchedCards.includes(card)) {
            if (openedCards.length < 2) {
                cardImage.src = initialImage;
                openedCards.push(card);
            }

            if (openedCards.length === 2) {
                const firstCardImage = openedCards[0].querySelector('.card-image').src;
                const secondCardImage = openedCards[1].querySelector('.card-image').src;

                if (firstCardImage === secondCardImage) {
                    attsCounter.innerHTML++
                    pointsCounter.innerHTML++;
                    pointAlert.style.animation = "moveUpDown 2.5s alternate"
                    pointAlert.style.display = "block"
                    pointAlert.style.margin = "0"


                    setTimeout(() => {
                        pointAlert.style.display = "none"
                        pointAlert.style.animation = "none"
                    }, 2500)
                    matchedCards.push(openedCards[0]);
                    matchedCards.push(openedCards[1]);
                    openedCards = [];
                } else {
                    attsCounter.innerHTML++

                    setTimeout(() => {
                        openedCards.forEach(openedCard => {
                            openedCard.querySelector('.card-image').src = '../img/questionMark.svg'; // Закрываем только несовпадающие карты
                        });
                        openedCards = [];
                    }, 600);
                }
            }
        }
    });
});
