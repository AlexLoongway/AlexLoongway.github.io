const currentUrl = window.location.search
const params = new URLSearchParams(currentUrl)
var toggle = true

$(onLoad)

setTimeout(() => {
    $(window).bind('beforeunload', onUnload)
}, 1000)


function onLoad() {
    const coupon = params.get('coupon')

    window.location.replace(`unitydl://standclicker?coupon=${coupon}`)

    if (toggle) {
        setTimeout(() => {
            window.location.replace('https://play.google.com/store/apps/details?id=com.loongway.standclicker')
        }, 2000);
    }
}

function onUnload() {
    toggle = false
}