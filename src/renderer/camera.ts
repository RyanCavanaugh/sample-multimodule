import { Vector, Ray, createRay, createVector } from 'core';

export function perspective(imageWidth: number, imageHeight: number, start: Vector, up: Vector, right: Vector, xFovInDegrees: number, yFovInDegrees: number) {
    const xFovRad = (Math.PI * xFovInDegrees / 180);
    const yFovRad = (Math.PI * yFovInDegrees / 180);
    const forward = Vector.cross(right, up);
    return function (x: number, y: number): Ray {
        const cx = (x - (imageWidth / 2)) / imageWidth;
        const cy = (y - (imageHeight / 2)) / imageHeight;
        const r = Vector.scale(right, Math.sin(cx * xFovRad));
        const u = Vector.scale(up, Math.sin(cy * yFovRad));
        const direction = Vector.add(forward, r, u);
        return createRay(start, direction);
    };
}
