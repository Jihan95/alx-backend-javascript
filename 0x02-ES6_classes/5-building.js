export default class Building {
    constructor(sqft) {
        if (this.constructor === Building || this.evacuationWarningMessage != undefined) {
            this.sqft = sqft;
        }
        else if (this.evacuationWarningMessage === undefined) {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
    }
    get sqft() {
        return this._sqft;
    }
    set sqft(sqft) {
        if (typeof sqft != 'number') {
            throw new TypeError('SQFT must be a number');
        }
        this._sqft = sqft;
    }
}