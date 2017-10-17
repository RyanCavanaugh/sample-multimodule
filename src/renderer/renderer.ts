import * as cam from './camera';
import * as s from 'shapes';
import { Ray, Vector, createVector } from 'core';

declare function require(s: string): any;
const PNGImage: any = require('pngjs-image');

function scene() {
    return [s.createSphere(createVector(0, 0, 0), 8)];
}

export function render() {
    const imgWidth = 200, imgHeight = 200;
    const up = createVector(0, 1, 0);
    const right = createVector(1, 0, 0);
    const fwd = Vector.normalize(Vector.cross(right, up));
    const camera = cam.perspective(
        imgWidth,
        imgHeight,
        createVector(0, 0, -30),
        up,
        right,
        60, 60
    );
    const sc = scene();
    const img = PNGImage.createImage(imgWidth, imgHeight);
    for (let y = 0; y < imgHeight; y++) {
        for (let x = 0; x < imgWidth; x++) {
            const v = camera(x, y);
            for (const obj of sc) {
                const inst = obj.intersect(v);
                if (inst) {
                    const d = Vector.dot(inst.normal, fwd);
                    img.setAt(x, y, { red: d * 255, green: d * 255, blue: d * 255, alpha: 255 });
                } else {
                    img.setAt(x, y, { red: 0, green: 0, blue: 0, alpha: 255 });
                }
            }
        }
    }
    img.writeImage('out.png', (err: any) => {
        if (err) throw err;
    });
}