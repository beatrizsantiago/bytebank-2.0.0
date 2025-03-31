import APIHandler from './api';

const api = new APIHandler();

export type KindType = 'DEPOSIT' | 'CURRENCY_EXCHANGE' | 'DOC_TED' | 'LEASING';

export interface ITransactionData {
  _id: string;
  kind: KindType;
  value: number;
  date: string;
};

export interface ITransactionList {
  data: ITransactionData[];
  totalPages: number;
  currentPage: number;
};

export class TransactionData {
  kind: KindType;
  value: number;

  constructor(kind: KindType = 'DEPOSIT', value: number = 0) {
    this.kind = kind;
    this.value = value;
  };
};

export class TransactionService {
  private endpoint: string;

  constructor() {
    this.endpoint = '/transacoes';
  };

  async add(params:TransactionData): Promise<void> {
    const res = await api.post(this.endpoint, params);

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    };

    return;
  };

  async list(page?:number, limit?:number): Promise<ITransactionList> {
    const searchParams = new URLSearchParams({
      'page': `${page || 1}`,
      'limit': `${limit || 6}`,
    });
    
    const res = await api.get(`${this.endpoint}?${searchParams}`);

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    };

    const data: ITransactionList = await res.json();

    return data;
  };

  async update(id: string, params: TransactionData): Promise<void> {
    const res = await api.put(`${this.endpoint}/${id}`, params);

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    };

    return;
  };

  async remove(id: string): Promise<void> {
    const res = await api.delete(`${this.endpoint}/${id}`);

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    };

    return;
  };
};
