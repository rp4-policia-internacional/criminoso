abstract class CrimeEntity{
    constructor(
        protected nome: string, 
        protected tipo: string
    ) {}

  processCrime(): void {
    this.recordCrime();
    this.investigateCrime();
    this.concludeCrime();
  }

  // Métodos abstratos que as subclasses devem implementar.
  abstract recordCrime(): void;
  abstract investigateCrime(): void;
  abstract concludeCrime(): void;
}
export default CrimeEntity;