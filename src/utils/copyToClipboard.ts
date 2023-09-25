
export const CopyToClipboard = async (text:string) => {           
        
    try {
        await navigator.clipboard.writeText(text);
    
      } catch (error) {
        console.error('No se pudo copiar al portapapeles:', error);
      }

}