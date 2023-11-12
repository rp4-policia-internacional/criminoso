import Command from '../commands/Command';

class CrimeHistory {
  private history: Command[] = [];

  addCommand(command: Command): void {
    this.history.push(command);
  }

  showHistory(): void {
    this.history.forEach((command) => command.execute());
  }
}

export default CrimeHistory;
