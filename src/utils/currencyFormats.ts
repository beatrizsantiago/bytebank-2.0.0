export const money = (value?:number | null):string => (value
  ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  : 'R$ 0,00');

  export const formatCurrency = (input:string) => {
    const numericValue = input.replace(/\D/g, "");
  
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(parseFloat(numericValue) / 100);
  
    return formattedValue;
  };
  
  export const currencyToFloat = (value:string) => {
    if (!value) return 0;
    
    const numericValue = value.replace(/[R$\s.]/g, '').replace(',', '.');
    
    return parseFloat(numericValue);
  };
  
  export const floatToCurrency = (value:number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };
