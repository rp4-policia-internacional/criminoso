import { Criminoso } from "@prisma/client";

export class CriminosoMemento {
  private state: Criminoso;

  constructor(criminoso: Criminoso) {
    this.state = { ...criminoso }; // Criar uma cópia do estado do criminoso
  }
  
    getState(): Criminoso {
      return this.state;
    }
  }
  