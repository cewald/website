(function($) {
jQuery.fn.terminal = function(options)
{
    var defaults = {
        timestampDiv : $('#timestamp'),
        consoleInput : $('#console-input'),
        commandDiv : $('#command')
    };
    var options = $.extend(defaults, options); 

    var methods = {

        init : function(options)
        {
            // Alway autofocus textarea
            $(window).bind('keyup click load',function(e)
            {
                options.consoleInput.focus();
            });

            // Call functions initial
            options.setTimestamp();
            options.countLines();
            options.changeBg();
            options.cursorBlink();

            // Add shortcuts to help
            $('#shortcuts a').click(function(e)
            {
                // Prevent click
                e.preventDefault();

                // Get command
                var command = $(this).text();

                // Type text
                options.commandDiv.typed({
                    strings : [command],
                    typeSpeed : 50,
                    showCursor : false,
                    contentType : 'text',
                    callback : function()
                    {
                        // Trigger event
                        options.consoleInput.val(command);
                        options.consoleKeyUp({ "keyCode" : 13 });

                        // Remove data attribute to make retrigger possible
                        options.commandDiv.removeData('typed');
                    }
                });
            });
        },

        setTimestamp : function()
        {
            options.timestampDiv.text(new Date().getTime());
        },

        countLines : function()
        {
            var lines = 0;
            var text = $('.content .console').text().trim().split("\n");
            $('#lines').text(text.length - 1); // Minus current line
        },

        cursorBlink : function()
        {
            setInterval( function()
            {
                $('.content-wrapper .cursor').toggle(0);
            }, 500);
        },

        changeBg : function()
        {
            var max = 4, min = 1;
            var random = Math.floor( Math.random() * (max - min + 1) ) + min;
            $('body').css('background-image','url(img/bg_' + random + '.jpg)');
        },

        resizeConsole : function()
        {
            // Resize main
            var mainBoxHeight = $(window).height()
                                - $('.container').outerHeight(true)
                                + $('.content-box .content').height()
                                ;

            $('.content-box .content').css('min-height',mainBoxHeight + 'px');

            // Resize borders
            $('.content-box .left,.content-box .right').css('height',($('.content').outerHeight(true)) + 'px');
        },

        resizeLoadCallback : function()
        {
            options.resizeConsole();
        },

        consoleKeyUp : function(e)
        {
            var input = options.consoleInput.val().trim();

            if(e.keyCode == 13)
            {
                var consoleOutputWrapper = $('<div class="output"></div>')
                var cleanInput = input.toLowerCase();

                switch(cleanInput)
                {
                    case 'skillset':
                    case 'work':
                    case 'contact':
                    case 'help':
                        $('.enter-code').before($('#'+cleanInput).wrapInner(consoleOutputWrapper).html());
                        break;

                    case 'bvb':
                    case 'fcb':
                    case 'championsleague':
                        window.open(
                            'http://www.bvb.de',
                            '_blank'
                        );
                        break;

                    case 'changebg':
                        options.changeBg();
                        break;

                    case 'clear':
                        $('.console .output').remove();
                        break;

                    default:
                        var html = $('#error').clone();
                        html.find('.input').text(input);
                        $('.enter-code').before(html.wrapInner(consoleOutputWrapper).html());
                        break;
                }

                // Empty input & commandline
                input = '';
                options.consoleInput.val('');

                // Jump to bottom
                $('body').animate({scrollTop: $("#bottom-anchor").offset().top},'slow');
                
                // Retrigger functions
                options.countLines();
            }

            // Write to commandline
            options.commandDiv.text(input);
        },

        consoleKeyDown : function(e){
            // Prevent keys
            switch(e.keyCode)
            {
                case 37: case 38: case 39: case 40: case 91: case 18: case 17: case 16: case 9:
                    e.preventDefault();
                    return false;
                    break;
            }
        },

        bindKeyEvents : function()
        {
            options.consoleInput
                .keyup(function(e){ options.consoleKeyUp(e) })
                .keydown(function(e){ options.consoleKeyDown(e) });
        }

    }
    options = $.extend(defaults, methods);

    // Init everything
    options.init(options);

    // Bind resize action
    $(this).bind('load resize',function(){ options.resizeLoadCallback() })

    // Bind key events
    options.bindKeyEvents();
};
})(jQuery);

$(document).ready(function(){
    $(window).terminal();
});