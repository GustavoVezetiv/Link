import AsyncStorage from "@react-native-async-storage/async-storage";
// ATENÇÃO: Se o arquivo link-storage não estiver na mesma pasta, corrija este caminho.
// O ideal é usar: import { LinkStorage } from "@/storage/link-storage";
import { LinkStorage } from "./link-storage";

const STORAGE_KEY = "@links:archived";

export async function getArchivedLinks(): Promise<LinkStorage[]> {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export async function addArchivedLink(link: LinkStorage) {
  const current = await getArchivedLinks();
  const updated = [...current, link];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

// 👇 ADICIONE A FUNÇÃO AQUI 👇
export async function removeArchivedLink(id: string) {
  try {
    // Pega a lista atual de links arquivados
    const storedLinks = await getArchivedLinks();

    // Cria uma nova lista sem o link que tem o ID correspondente
    const filteredLinks = storedLinks.filter(link => link.id !== id);

    // Salva a nova lista, substituindo a antiga
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(filteredLinks));
    
  } catch (error) {
    console.log("ERRO AO REMOVER LINK ARQUIVADO:", error);
    throw error;
  }
}