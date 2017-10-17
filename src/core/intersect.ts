import { Vector } from './vector';
import { Ray } from './ray';

export type Collision = {
    at: Vector;
    surfaceNormal: Vector;
};

export type Intersectable = {
    intersect(ray: Ray):  { at: Vector, normal: Vector } | undefined;
};

