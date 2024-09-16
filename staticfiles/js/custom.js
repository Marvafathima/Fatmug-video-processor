$(document).ready(function() {
    $('.toggle-form').click(function(e) {
        e.preventDefault();
        $('.register-form, .login-form').toggle();
    });
});