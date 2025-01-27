function redirigir() {
    var num = Math.random() * 3;
    num = parseInt(num);
    if (num == 0) {
        window.location = 'https://outlook.live.com';
    } else if (num == 1) {
        window.location = 'https://mail.google.com';
    } else if (num == 2) {
        window.location = 'https://login.yahoo.com';
    }
}