function makeColor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const {r,g,b} = this;
        return {r,g,b};
    }
    color.hex = function() {
        const {r,g,b} = this;
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(255,200,69);
