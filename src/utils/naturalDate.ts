// naturalDate.ts

/**
 * Formatea una fecha a lenguaje natural con ordinales en inglés (ej: "August 3rd, 2026").
 * 
 * @param dateInput - Un objeto Date, string ISO o timestamp.
 * @returns La fecha formateada o un string vacío si la fecha no es válida.
 */

export function naturalDate(dateInput: Date | string | number): string {
  const date = new Date(dateInput);

  // Devuelve string vacío si la fecha es inválida
  if (isNaN(date.getTime())) return '';

  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  // Función auxiliar para obtener el sufijo ordinal (1st, 2nd, 3rd, 4th...)
  const getOrdinal = (n: number): string => {
    // Del 11 al 13 siempre llevan 'th' (11th, 12th, 13th)
    if (n > 3 && n < 21) return 'th'; 
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return `${month} ${day}${getOrdinal(day)}, ${year}`;
}