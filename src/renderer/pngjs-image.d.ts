/** Declaration file generated by dts-gen */

export = pngjs_image;
declare class pngjs_image {
    constructor(image: any);
    applyFilters(filters: any, returnResult: any): any;
    clip(x: any, y: any, width: any, height: any): void;
    fillRect(x: any, y: any, width: any, height: any, color: any): void;
    getAlpha(idx: any): any;
    getAt(x: any, y: any): any;
    getAtIndex(idx: any): any;
    getBlob(): any;
    getBlue(idx: any): any;
    getBlurPixel(x: any, y: any, funcName: any): any;
    getBlurPixelAtIndex(idx: any, funcName: any): any;
    getColor(x: any, y: any): any;
    getColorAtIndex(idx: any): any;
    getGrayScale(x: any, y: any): any;
    getGrayScaleAtIndex(idx: any): any;
    getGreen(idx: any): any;
    getHeight(): any;
    getImage(): any;
    getIndex(x: any, y: any): any;
    getLightness(x: any, y: any): any;
    getLightnessAtIndex(idx: any): any;
    getLuma(x: any, y: any): any;
    getLumaAtIndex(idx: any): any;
    getLuminosity(x: any, y: any): any;
    getLuminosityAtIndex(idx: any): any;
    getPixel(x: any, y: any): any;
    getRed(idx: any): any;
    getSepia(x: any, y: any): any;
    getSepiaAtIndex(idx: any): any;
    getWidth(): any;
    getYIQ(x: any, y: any): any;
    getYIQAtIndex(idx: any): any;
    rotateCCW(): any;
    rotateCW(): any;
    setAlpha(idx: any, value: any, opacity: any): void;
    setAt(x: any, y: any, color: any): void;
    setAtIndex(idx: any, color: any): void;
    setBlue(idx: any, value: any, opacity: any): void;
    setGreen(idx: any, value: any, opacity: any): void;
    setPixel(x: any, y: any, color: any): void;
    setRed(idx: any, value: any, opacity: any): void;
    toBlob(fn: any): void;
    toBlobSync(options: any): any;
    writeImage(filename: any, fn: any): void;
    writeImageSync(filename: any): void;
    static copyImage(image: any): any;
    static createImage(width: any, height: any): any;
    static instrument(): void;
    static loadImage(blob: any, fn: any): any;
    static loadImageSync(blob: any): any;
    static log(text: any): void;
    static readImage(path: any, fn: any): any;
    static readImageSync(filename: any): any;
    static setFilter(key: any, fn: any): void;
    static version: string;
}
declare namespace pngjs_image {
    class Decoder {
        constructor();
        decode(buffer: any, options: any): any;
        getChunkData(): any;
    }
    class Encoder {
        constructor();
        encode(image: any, width: any, height: any, options: any): any;
        getChunkData(): any;
    }
    namespace filters {
        function blur(image: any, options: any): any;
        function grayScale(image: any, options: any): any;
        function lightness(image: any, options: any): any;
        function luma(image: any, options: any): any;
        function luminosity(image: any, options: any): any;
        function sepia(image: any, options: any): any;
    }
}
