class ItemParser {

    itemsSelector = '';

    constructor() {
        this.formatter = new Formatter();
    }

    items(selector) {
        return document.querySelectorAll(this.itemsSelector);
    }

    price() {}

    surface() {}

    updatePriceContent() {}
}