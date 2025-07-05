const currentUrl = window.location.search
const params = new URLSearchParams(currentUrl)
var toggle = true

$(onLoad)

setTimeout(() => {
    $(window).bind('beforeunload', onUnload)
}, 1000)


function onLoad() {
    const coupon = params.get('coupon')
    const gameLink = coupon == null ? "unitydl://standclicker" : `unitydl://standclicker?coupon=${coupon}`    

    window.location.replace(gameLink)

    if (toggle) {
        setTimeout(() => {
            window.location.replace('https://play.google.com/store/apps/details?id=com.loongway.standclicker')
        }, 2500);
    }
}

function onUnload() {
    toggle = false
}