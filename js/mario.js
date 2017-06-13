(function($) {
  "use strict";

  $.fn.marioItemBlock = function() {
    var images = {
      marioStand: 'images/mario-stand.jpg',
      marioJump: 'images/mario-jump.png',
      itemBlock: 'images/item-block.png',
      fireFlower: 'images/fire-flower.gif',
      coin: 'images/coin.gif',
      star: 'images/star.gif',
      mushroomRed: 'images/mushroom-red.png',
      mushroomGreen: 'images/mushroom-green.png',
      goomba: 'images/goomba.gif',
      spacer: 'images/spacer.png'
    };

    var previousValue = 0;
    var isKeyDown = false;

    var gameTemplate = 
      '<div id="gameArea" class="centreContent showContent"> \
        <img id="gameItem" src="' + images.spacer + '" class="centreContent showContent land"></img> \
        <img id="gameItemBlock" src="' + images.itemBlock + '" class="centreContent showContent "></img> \
        <img id="gameSprite" src="' + images.marioStand + '" class="centreContent showContent stand" align="bottom"></img> \
      </div>';

    this.append(gameTemplate);

    $('#gameArea').mousedown(function() {
      if (!isKeyDown) {
        jump();
      }
      return false;
    });

    $('#gameArea').mouseup(function() {
      if (isKeyDown) {
        stand();
      }
      return false;
    });

    function jump() {
      var sprite = $('#gameSprite');
      sprite.attr('src', images.marioJump);
      sprite.removeClass('stand');
      sprite.addClass('jump');

      $('#gameItem').attr('src', getItem());
      toggleItem();

      isKeyDown = true;
    }

    function stand() {
      var sprite = $('#gameSprite');
      sprite.attr('src', images.marioStand);
      sprite.removeClass('jump');
      sprite.addClass('stand');

      toggleItem();

      isKeyDown = false;
    }

    function toggleItem() {
      var item = $('#gameItem');
      item.toggleClass('float');
      item.toggleClass('land');
    }

    function getItem() {
      var currentValue;
      do {
        currentValue = Math.floor((Math.random() * 6) + 1);
      } while (currentValue === previousValue);
      previousValue = currentValue;

      switch (currentValue) {
        case 1:
          return images.fireFlower;
        case 2:
          return images.coin;
        case 3:
          return images.star;
        case 4:
          return images.mushroomRed;
        case 5:
          return images.mushroomGreen;
        case 6:
          return images.goomba;
        default:
          return images.coin;
      }
    }
  }
})(jQuery);
