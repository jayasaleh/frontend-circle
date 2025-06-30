import { formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';

export function FormatDate(date: string | Date) {
  const formate = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: id,
  });
  return formate
    .replace(/^sekitar\s+/i, '')
    .replace(/\syang\s+lalu$/i, ' lalu');
}
