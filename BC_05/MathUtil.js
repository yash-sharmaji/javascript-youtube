export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI*radius*radius;
}

export function getVolume(radius){
    return 4*PI*radius*radius;
}

// to make sure that we can export the things ...
// we have to preffix each variable and function with export keyword

