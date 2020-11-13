class UIHandler {

    itemParser;

    calculatePricePerSquaredMeter(price, surface) {
        if (!price || !surface) {
            return null;
        }

        return parseInt(price / surface);
    }

    replaceHRKPriceWithPricePerSquareMeter() {

        let items = this.itemParser.items()

        if (!items) {
            return;
        }

        Array.from(items).forEach((item) => {
            let price = this.itemParser.price(item);
            let surface = this.itemParser.surface(item)
            let pricePerSquaredMeter = this.calculatePricePerSquaredMeter(price, surface)

            if (!pricePerSquaredMeter) {
                return;
            }

            this.itemParser.updatePriceContent(item, pricePerSquaredMeter);
        });
    }
}