function getPlatform() {
    if (window.navigator.userAgent.indexOf('VZW-MFA-IOS') > -1 || window.navigator.userAgent.indexOf('VZW-MFA-ANDROID') > -1) {
        return 'mfapp';
    } else if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
        if (window.innerWidth < 768) {
            return 'mobile';
        }
        return 'tablet';
    }
    return 'desktop';
}

var platform = getPlatform();

console.log(platform);