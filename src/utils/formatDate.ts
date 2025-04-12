import { formatDate } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const formatDateWithLocale = (date: Date, format: string) => (
  formatDate(date, format, { locale: ptBR })
);

export default formatDateWithLocale;