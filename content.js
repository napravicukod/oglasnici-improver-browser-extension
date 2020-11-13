(function () {
    const currentUrl = window.location.origin + window.location.pathname;
    let UIHandler;

    if (currentUrl.indexOf('index.hr') !== -1) {
        UIHandler = new IndexOglasiUIHandler();
    } else if (currentUrl.indexOf('njuskalo.hr') !== -1) {
        UIHandler = new NjuskaloUIHandler();
    }

    UIHandler.replaceHRKPriceWithPricePerSquareMeter();
})();
