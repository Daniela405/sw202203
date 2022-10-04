export interface ICashFlow{
    //ingreso | gasto
     type: 'INCOME' | 'EXPENSE';
     date: Date;
     amount: number;
     description: string;
     _id?: unknown;
 };