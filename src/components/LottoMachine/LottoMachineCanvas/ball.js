export class Ball {
  constructor(machine, radius, angle, number, color) {
    this.radius = radius;
    this.vx = Math.sin((angle * Math.PI) / 180) * 15;
    this.vy = Math.cos((angle * Math.PI) / 180) * 15;

    this.x = machine.x;
    this.y = machine.y + machine.radius / 2;

    this.number = number;
    this.color = color;
  }

  draw(ctx, machine, active) {
    if (active) {
      this.x += this.vx;
      this.y += this.vy;

      this.bounceMachine(machine);

      // draw circle
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // draw text
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.fillText(this.number, this.x - 2, this.y + 2);
      ctx.fill();
    } else {
      // draw circle
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // draw text
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.fillText(this.number, this.x - 2, this.y + 2);
      ctx.fill();
    }
  }

  bounceMachine(machine) {
    const dx = this.x - machine.x;
    const dy = this.y - machine.y;
    const collision =
      Math.sqrt(dx * dx + dy * dy) >= machine.radius - this.radius;

    if (collision) {
      var theta = Math.atan2(dy, dx);
      var R = machine.radius - this.radius;

      this.x = machine.x + R * Math.cos(theta);
      this.y = machine.y + R * Math.sin(theta);

      this.vx *= Math.random() > 0.5 ? 1 : -1;
      this.vy *= Math.random() > 0.5 ? 1 : -1;
    }
  }
}
