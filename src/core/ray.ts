import { Vector } from './vector';

export type Ray = { start: Vector, direction: Vector };

export function createRay(start: Vector, direction: Vector): Ray {
    return { start, direction: Vector.normalize(direction) };
}

export namespace Ray {
    export function along(r: Ray, distance: number): Vector {
        return Vector.add(r.start, Vector.scale(r.direction, distance));
    }

    export function toString(r: Ray) {
        return `[[${Vector.toString(r.start)} => ${Vector.toString(r.direction)}]]`;
    }
}
