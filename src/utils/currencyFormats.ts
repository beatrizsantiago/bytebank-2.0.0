export const money = (value?:number | null):string => (value
  ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  : 'R$ 0,00');
  
export const currencyToFloat = (value:string) => {
  if (!value) return 0;
  
  const numericValue = value.replace(',', '.');

  return parseFloat(numericValue);
};
