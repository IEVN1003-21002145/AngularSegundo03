export class Zodiaco {
  // Propiedades para nombre
  nombre!: string;
  apaterno!: string;
  amaterno!: string;
  resnombre!: string;
  // Propiedades para fecha
  dia!: number;
  mes!: number;
  anio!: number;
  resEdad!: string;
  // Propiedades para zodiaco
  signo!: string;
  imgz!: string;

  calcularNombreCompleto() {
    return this.resnombre = `Hola, ${this.nombre} ${this.apaterno} ${this.amaterno}`;
  }

  calcularEdad() {
    const fechaActual = new Date();
    const anoActual = fechaActual.getFullYear();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth() + 1;
    
    let edad = anoActual - this.anio;
    
    // Ajustar edad si aún no ha cumplido años este año
    if (this.mes > mesActual) {
      edad = edad - 1;
    } else if (this.mes === mesActual && this.dia > diaActual) {
      edad = edad - 1;
    }
    
    return this.resEdad = `Tienes ${edad} años`;
  }

  calcularZodiacoChino() {
    if (this.anio) {
      const residuo = this.anio % 12;
      const signosZodiaco = {
        0: 'mono',
        1: 'gallo',
        2: 'perro',
        3: 'cerdo',
        4: 'rata',
        5: 'buey',
        6: 'tigre',
        7: 'conejo',
        8: 'dragon',
        9: 'serpiente',
        10: 'caballo',
        11: 'cabra'
      };

      const simboloZ = signosZodiaco[residuo as keyof typeof signosZodiaco];
      this.signo = `Tu signo zodiacal chino es: ${simboloZ}`;
      this.imgz = `${simboloZ}.jpg`;
    }
  }
}