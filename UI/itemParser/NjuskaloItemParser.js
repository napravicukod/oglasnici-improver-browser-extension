class NjuskaloItemParser extends ItemParser {

    itemsSelector = '.EntityList-item:not(.EntityList-bannerContainer)';

    price(item) {
        let priceObject = item.querySelector('.price.price--eur');
        if (!priceObject) {
            return null;
        }
        let priceText = priceObject.innerHTML;

        return priceText.substring(0, priceText.indexOf("&nbsp;"))
            .replace('.', '');
    }

    surface(item) {
        let surfaceObject = item.querySelector(".entity-description-main");
        if (!surfaceObject) {
            return null;
        }
        let surfaceText = surfaceObject.innerHTML;

        return surfaceText.substring(
            surfaceText.indexOf("Stambena površina:") + 18,
            surfaceText.indexOf("m2")
        );
    }

    updatePriceContent(item, pricePerSquaredMeter) {
        item.querySelector('.price-items.cf').innerHTML =
            '<ul class="price-items cf">\n' +
            '   <li class="price-item">\n' +
            '      <strong class="price price--hrk">\n' +
            '      ' + this.formatter.money(pricePerSquaredMeter, '€/m2') + '&nbsp;<span class="currency"></span></strong>\n' +
            '   </li>\n' +
            '   <li class="price-item">\n' +
            '      <strong class="price price--eur">\n' +
            '      ' + this.formatter.money(this.price(item)) + '&nbsp;<span class="currency"></span><abbr title="približno" class="abbr--alpha">~</abbr>\n' +
            '      </strong>\n' +
            '   </li>\n' +
            '</ul>';
    }
}