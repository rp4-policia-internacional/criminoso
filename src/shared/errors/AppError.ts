class AppError {
    public readonly message: string;
    public readonly statusCode: number;  

    constructor(message:string, status:number) {
        this.message=message;
        this.statusCode=status;

    }

}
export default AppError;
