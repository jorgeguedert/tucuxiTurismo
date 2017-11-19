var PasswordValidation = (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('senha').value; // to get value in input tag
        var confirmPassword = AC.get('confirmSenha').value; // to get value in input tag
        if (password != confirmPassword) {
            console.log('false');
            AC.get('confirmSenha').setErrors({ MatchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    };
    return PasswordValidation;
}());
export { PasswordValidation };
//# sourceMappingURL=password.js.map