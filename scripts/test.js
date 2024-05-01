function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(Math.round(randomNumber(1, 3)))
switch (Math.round(randomNumber(1, 3))){
    case 1:
        $('#pc').html('<img id="pic" class="rounded-3 image-fluid" src="../images/Outside House.jpg" alt="Me, in a quiet area" width="100%" height="90%">');
        break;
    case 2:
        $('#pic').html('<img id="pic" class="rounded-3 image-fluid" src="../images/Near Prom.jpg" alt="Me, in a quiet area" width="100%" height="90%">');
        break;
    case 3:
        $('#pic').html('<img id="pic" class="rounded-3 image-fluid" src="../images/Suit Sitting.jpg" alt="Me, in a quiet area" width="100%" height="90%">');
        break;
}