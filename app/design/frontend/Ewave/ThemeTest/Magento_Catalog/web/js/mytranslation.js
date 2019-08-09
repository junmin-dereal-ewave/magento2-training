require(['jquery', 'mage/translate'], function ($, __) {
    setTimeout(() => {
        $('#translate-js').text('script-translate: ' + $.mage.__('translate_js'));
    }, 1000);
});