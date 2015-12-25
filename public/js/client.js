"use strict";

$(document).ready(function() {

    var form = $('.footer-form');

    $(form).on('submit', function(e) {
        e.preventDefault();
        var form = $(this);
        var pigText = form.serialize();

        $.ajax({
            type: 'POST',
            url: '/pig',
            data: pigText
        }).done(function(pigMessage) {
            
            $('.text-display').html(pigMessage);
            $(form).trigger('reset');
        });
    });
});
