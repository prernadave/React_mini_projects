function setCookie(cookieName) {
    var value = prompt(`Enter a value for ${cookieName}:`);
    if (value !== null) {
        document.cookie = `${cookieName}=${value}`;
    }
}

function getCookie(cookieName) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName + '=') === 0) {
            var value = cookie.substring(cookieName.length + 1);
            document.getElementById('result').textContent = `Value of ${cookieName}: ${value}`;
            return;
        }
    }
    document.getElementById('result').textContent = `${cookieName} not found.`;
}

function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    document.getElementById('result').textContent = `${cookieName} deleted.`;
}

function displayAllCookies() {
    var cookies = document.cookie.split(';');
    var allCookies = "All Cookies:\n";
    for (var i = 0; i < cookies.length; i++) {
        allCookies += cookies[i] + '\n';
    }
    document.getElementById('result').textContent = allCookies;
}