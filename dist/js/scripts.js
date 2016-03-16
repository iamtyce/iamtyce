var callback = function (playerShots) {
    var html = '';

    playerShots.shots.forEach(function (shot) {
        // html += '<li class="feed__dribbble__list__item"><h3>' + shot.title + '</h3>';
        html += '<li class="feed__list__item feed__list__item--dribbble">';
        html += '<a href="' + shot.url + '">';
        html += '<img class="feed__section--dribbble__image" src="' + shot.image_url + '" ';
        html += 'alt="' + shot.title + '"></a></li>';
    });

    document.getElementById('shotsByPlayerId').innerHTML = html;
};

jribbble.getShotsByPlayerId('iamtyce', callback, {page: 1, per_page: 4});