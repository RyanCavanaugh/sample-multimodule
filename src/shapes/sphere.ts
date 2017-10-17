import { Vector, Ray, Intersectable } from 'core';

export type Sphere = {
    readonly center: Vector;
    readonly radius: number;
} & Intersectable;

export function createSphere(center: Vector, radius: number): Sphere {
    return ({
        center, radius,
        intersect(r) {
            const eo = Vector.subtract(center, r.start);
            const v = Vector.dot(eo, r.direction);
            let dist = 0;
            if (v >= 0) {
                let disc = this.radius * this.radius - (Vector.dot(eo, eo) - v * v);
                if (disc >= 0) {
                    dist = v - Math.sqrt(disc);
                }
            }
            const at = Ray.along(r, dist);
            if (dist === 0) {
                return undefined;
            } else {
                return {
                    at,
                    normal: Vector.normalize(Vector.subtract(center, at))
                };
            }
        }
    });
}
