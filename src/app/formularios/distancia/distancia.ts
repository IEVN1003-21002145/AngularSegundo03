export class Distancia {
  x1!: number;
  y1!: number;
  x2!: number;
  y2!: number;
  distancia!: number;
 
  calcular(): void {
    const dx = this.x2 - this.x1;
    const dy = this.y2 - this.y1;
    this.distancia = Math.sqrt(dx * dx + dy * dy);
  }
}
