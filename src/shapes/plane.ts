import { Vector } from 'core';

export type Plane = {
    normal: Vector;
    offset: number;
    kind: "plane"
};

export function createPlane(normal: Vector, offset: number): Plane {
    return {
        kind: "plane",
        normal, offset
    }
}
