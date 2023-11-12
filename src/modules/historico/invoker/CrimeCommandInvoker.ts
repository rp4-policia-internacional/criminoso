import Command from '../commands/Command';

class CrimeCommandInvoker {
  private command: Command | null = null;

  setCommand(command: Command): void {
    this.command = command;
  }

  executeCommand(): void {
    if (this.command) {
      this.command.execute();
    }
  }
}

export default CrimeCommandInvoker;
