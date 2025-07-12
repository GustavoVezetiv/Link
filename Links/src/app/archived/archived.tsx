// Arquivo: archived/index.tsx (ou o nome que você deu)

import { View, Text, FlatList, TouchableOpacity, Alert, Modal, Linking } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import { useFocusEffect, router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

import { LinkStorage } from '@/storage/link-storage';
import { getArchivedLinks, removeArchivedLink } from '@/storage/archive-storage'; // Supondo que você crie essa função

import { Link } from '@/components/link';
import { Option } from '@/components/option';
import { styles } from './styles';
import { colors } from '@/styles/colors';

export default function Archived() {
  // --- ESTADOS NECESSÁRIOS ---
  const [archivedLinks, setArchivedLinks] = useState<LinkStorage[]>([]);
  const [selectedLink, setSelectedLink] = useState<LinkStorage | null>(null);

  // --- FUNÇÕES DE LÓGICA ---

  // Carrega os links arquivados do storage
  async function loadArchivedLinks() {
    try {
      const data = await getArchivedLinks();
      setArchivedLinks(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível carregar os links arquivados.");
    }
  }

  // Abre o modal de detalhes
  function handleOpenDetailsModal(link: LinkStorage) {
    setSelectedLink(link);
  }

  // Fecha o modal de detalhes
  function handleCloseDetailsModal() {
    setSelectedLink(null);
  }

  // Abre o link no navegador
  async function handleOpenLink() {
    if (!selectedLink) return;
    try {
      await Linking.openURL(selectedLink.url);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir o link.");
    }
  }

  // ❗️ CORREÇÃO PRINCIPAL: Remove o link do storage de arquivados
  async function handleRemoveLink() {
    if (!selectedLink) return;

    Alert.alert("Excluir", `Deseja realmente excluir o link ${selectedLink.name} permanentemente?`, [
      { style: "cancel", text: "Não" },
      {
        text: "Sim",
        onPress: async () => {
          try {
            // Aqui usamos a função correta para remover dos arquivados
            await removeArchivedLink(selectedLink.id);
            handleCloseDetailsModal(); // Fecha o modal
            loadArchivedLinks(); // Recarrega a lista atualizada
          } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Não foi possível excluir o link.");
          }
        },
      },
    ]);
  }
  
  // Efeito para carregar os links quando a tela recebe foco
  useFocusEffect(
    useCallback(() => {
      loadArchivedLinks();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Links Arquivados</Text>
      </View>

      <FlatList
        data={archivedLinks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => handleOpenDetailsModal(item)}
          />
        )}
        style={styles.list}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum link arquivado.</Text>}
      />

      {/* Modal de Detalhes (agora mais simples) */}
      <Modal
        transparent
        visible={!!selectedLink}
        animationType='slide'
        onRequestClose={handleCloseDetailsModal}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>{selectedLink?.category}</Text>
              <TouchableOpacity onPress={handleCloseDetailsModal}>
                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
              </TouchableOpacity>
            </View>
            
            <Text style={styles.modalLinkName}>{selectedLink?.name}</Text>
            <Text style={styles.modalUrl}>{selectedLink?.url}</Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemoveLink} />
              <Option name="Abrir" icon="language" onPress={handleOpenLink} />
              {/* Você poderia adicionar uma opção de "Desarquivar" aqui no futuro */}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}