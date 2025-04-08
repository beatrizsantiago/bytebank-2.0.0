import { KindType } from '../../types/TransactionKinds';

class Transaction {
  _id: string;
  kind: KindType;
  value: number;
  date: string;

  constructor(_id: string, kind: KindType, value: number, date: string) {
    this._id = _id;
    this.kind = kind;
    this.value = value;
    this.date = date;
  };
};

export default Transaction;
