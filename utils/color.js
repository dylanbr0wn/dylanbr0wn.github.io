export const getColor = () => {
    let hue = Math.floor(Math.random() * 360)
    let saturation = 100;
    let lightness = 50;

    // color adjustment:
    if (hue > 215 && hue < 265) {
        const gain = 20;
        let blueness = 1 - Math.abs(hue - 240) / 25;
        let change = Math.floor(gain * blueness);
        lightness += change;
        saturation -= change;
    }
    return hslToHex(hue, saturation, lightness);


}

const hslToHex = (h, s, l) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}