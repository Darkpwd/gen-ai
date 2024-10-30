import { createContext } from 'react'; // Corrigido para importar do 'react'

export const TotalUsageContext = createContext<{
    totalUsage: number; // Use 'number' em vez de 'Number'
    setTotalUsage: React.Dispatch<React.SetStateAction<number>>;
}>({
    totalUsage: 0,
    setTotalUsage: () => {}, // Função padrão, pode ser alterada mais tarde
});
