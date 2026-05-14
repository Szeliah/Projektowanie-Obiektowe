export interface Payment {
    id: number;
    amount: number;
    method: string; 
    status: string; 
    cartId: number;
}