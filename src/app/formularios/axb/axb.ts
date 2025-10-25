export class axb {
    a!: number;
    b!: number;
    resultado!: number;

    operacion(): void {
        this.resultado = 0;
        for (let i = 0; i < this.b; i++) {
            this.resultado += this.a;
        }
    }
}
