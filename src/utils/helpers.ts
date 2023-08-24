export const pxToRem = (px: number) => {
    return `${px / 16}rem`;
}

export function* idGenerator(baseValue: number) {
    let id = baseValue;

    while(true){
        yield id++;
    }
}