class Crime {
    constructor(private name: string, private type: string, private status: string) {}
  
    getName(): string {
      return this.name;
    }
  
    getType(): string {
      return this.type;
    }
  
    getStatus(): string {
      return this.status;
    }
  }
  
  export default Crime;
  