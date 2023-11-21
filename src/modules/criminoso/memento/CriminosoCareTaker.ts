import { CriminosoMemento } from "@modules/criminoso/memento/CriminosoMemento";

export class CriminosoCareTaker {
    private mementos: CriminosoMemento[] = [];
  
    addMemento(memento: CriminosoMemento): void {
      this.mementos.push(memento);
    }
  
    getMemento(index: number): CriminosoMemento | undefined {
      return this.mementos[index];
    }
    getMementos(): CriminosoMemento[] {
      return this.mementos;
    }
    getHistorico(): any[] | string {
      if (this.mementos.length === 0) {
        return "Nenhum histórico disponível.";
      }

      // Retorna o histórico como um array de objetos
      return this.mementos.map(memento => memento.getState());
    }

  }