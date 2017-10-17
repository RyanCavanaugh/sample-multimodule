export type Vector = { x: number, y: number, z: number };
export function createVector(x: number, y: number, z: number): Vector {
    return { x, y, z };
}

function x(v: Vector): number { return v.x; }
function y(v: Vector): number { return v.y; }
function z(v: Vector): number { return v.z; }
function sum(a: number, b: number) { return a + b; }

export namespace Vector {
    export function add(...vecs: Vector[]) {
        return {
            x: vecs.map(x).reduce(sum, 0),
            y: vecs.map(y).reduce(sum, 0),
            z: vecs.map(z).reduce(sum, 0)
        };
    }
    export function scale(v: Vector, m: number) {
        return {
            x: v.x * m,
            y: v.y * m,
            z: v.z * m
        };
    }
    export function negate(v: Vector) {
        return scale(v, -1);
    }
    export function subtract(v1: Vector, v2: Vector) {
        return add(v1, negate(v2));
    }
    export function magnitudeSquared(v: Vector) {
        return (
            v.x * v.x +
            v.y * v.y +
            v.z * v.z
        );
    }
    export function normalize(v: Vector) {
        const mag = Math.sqrt(magnitudeSquared(v));
        return scale(v, 1 / mag);
    }
    export function dot(v1: Vector, v2: Vector) {
        return (
            v1.x * v2.x +
            v1.y * v2.y +
            v1.z * v2.z
        );
    }
    export function cross(v1: Vector, v2: Vector) {
        return createVector(v1.y * v2.z - v1.z * v2.y,
                            v1.z * v2.x - v1.x * v2.z,
                            v1.x * v2.y - v1.y * v2.x);
    }

    export function toString(v: Vector) {
        return `(${v.x.toFixed(3)}, ${v.y.toFixed(3)}, ${v.z.toFixed(3)})`;
    }
}