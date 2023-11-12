import Memento from './Memento';

class CrimeHistory {
  private history: Memento[] = [];

  addMemento(memento: Memento): void {
    this.history.push(memento);
  }

  getMemento(index: number): Memento | undefined {
    return this.history[index];
  }
}

export default CrimeHistory;
