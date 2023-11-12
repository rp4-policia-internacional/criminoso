import Command from './Command';
import Crime from '../receivers/Crime';

class RecordCrimeCommand implements Command {
  constructor(private crime: Crime) {}

  execute(): void {
    console.log(`Registro do crime: ${this.crime.getName()}, Tipo: ${this.crime.getType()}, Status: ${this.crime.getStatus()}`);
  }
}

class InvestigateCrimeCommand implements Command {
  constructor(private crime: Crime) {}

  execute(): void {
    console.log(`Investigando o crime: ${this.crime.getName()}`);
  }
}

class ConcludeCrimeCommand implements Command {
  constructor(private crime: Crime) {}

  execute(): void {
    console.log(`Conclusão do crime: ${this.crime.getName()}`);
  }
}

export { RecordCrimeCommand, InvestigateCrimeCommand, ConcludeCrimeCommand };
