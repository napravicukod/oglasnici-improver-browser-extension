class IndexOglasiItemParser extends ItemParser {

    itemsSelector = '.OglasiRezHolder:not(.oglasiHolderBanners)';

    price(item) {
        let priceObject = item.querySelector('span.price span');
        if (!priceObject) {
            return null;
        }
        return priceObject.innerHTML
            .replace(' €', '')
            .replace('.', '');
    }

    surface(item) {
        let surfaceText = null;
        for (const a of item.querySelectorAll(".tags.hide-on-small-only li")) {
            if (a.textContent.includes("m2\n" + ":")) {
                surfaceText = a.textContent;
            }
        }
        if (!surfaceText) {
            return null;
        }

        return surfaceText
            .replace('m2', '')
            .replace(': ', '')
            .replace(' ', '')
    }

    updatePriceContent(item, pricePerSquaredMeter) {
        item.querySelector('span.price').innerHTML =
            '<span>' + this.formatter.money(this.price(item)) + '</span> ~ ' +
            this.formatter.money(pricePerSquaredMeter, '€/m2');
    }
}