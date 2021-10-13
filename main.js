const $div = $('<div>');
$('body').append($div)
$div.addClass('randomImage');
$('.randomImage').width(320);
$('.randomImage').height(540);

const $p = $('<p>');
$p.text('Add a Card');
$p.addClass('addACardText');
$p.appendTo('div');

const $button = $('<button>');
$button.text('clear');
$button.addClass('clearButton');
$button.appendTo('body');

const cards = [
    'https://www.trustedtarot.com/img/cards/the-fool.png',
    'https://www.trustedtarot.com/img/cards/the-magician.png',
    'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
    'https://www.trustedtarot.com/img/cards/the-empress.png',
    'https://www.trustedtarot.com/img/cards/the-emperor.png',
    'https://www.trustedtarot.com/img/cards/the-heirophant.png',
    'https://www.trustedtarot.com/img/cards/the-chariot.png',
    'https://www.trustedtarot.com/img/cards/strength.png',
    'https://www.trustedtarot.com/img/cards/the-hermit.png',
    'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
    'https://www.trustedtarot.com/img/cards/justice.png',
    'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
    'https://www.trustedtarot.com/img/cards/death.png',
    'https://www.trustedtarot.com/img/cards/temperance.png',
    'https://www.trustedtarot.com/img/cards/the-tower.png',
    'https://www.trustedtarot.com/img/cards/the-moon.png'
]
const chooseRandImage = () =>{
    const $img = $('<img>');
    $img.attr('src', cards[Math.floor(Math.random() * cards.length)]);
    return $img.appendTo('body');
}
$('.randomImage').click(chooseRandImage);
$('.clearButton').click(function(){
    window.location.reload(true);
});