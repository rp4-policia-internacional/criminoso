import { CriminosoMemento } from "./CriminosoMemento";

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
   
  }
  export default CriminosoCareTaker;