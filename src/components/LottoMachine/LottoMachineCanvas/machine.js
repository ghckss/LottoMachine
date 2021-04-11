export class Machine {
    constructor(stageWidth, stageHeight, radius) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.radius = radius;

        this.x = stageWidth / 2;
        this.y = stageHeight / 2;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}