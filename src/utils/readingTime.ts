export function getReadingTime(content: any): number {
  if (!content) return 0;

  const wpm = 200; // Palabras por minuto
  let text = '';

  // 1. Si es un string simple
  if (typeof content === 'string') {
    text = content;
  } 
  // 2. Si es el array de bloques PortableText de Sanity
  else if (Array.isArray(content)) {
    text = content
      .map((block) => {
        if (block._type !== 'block' || !block.children) return '';
        return block.children.map((child: any) => child.text).join(' ');
      })
      .join(' ');
  }

  // Contamos las palabras limpias
  const cleanText = text.trim();
  if (!cleanText) return 0;

  const wordCount = cleanText.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wpm);

  return readingTime;
}