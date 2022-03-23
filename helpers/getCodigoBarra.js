const JsBarcode = require('jsbarcode')
const { Canvas } = require('canvas');


const getCodigoBarra = (data) => {
    const canvas = new Canvas();
    canvas.toBuffer('image/png', { compressionLevel: 3, filters: canvas.PNG_FILTER_NONE })
    return JsBarcode(canvas, data)
}

module.exports = {
    getCodigoBarra
};