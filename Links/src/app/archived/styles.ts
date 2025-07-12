import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[900],
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  title: {
    color: colors.gray[100],
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  content: {
    gap: 12,
    paddingBottom: 20,
  },
  emptyText: {
    color: colors.gray[400],
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
   modalFooter: {
    flexDirection: "row",
    marginTop: 32,
    width: "100%",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
    paddingVertical: 14,
  },
  modalContainer: {
    backgroundColor: colors.gray[800],
    borderRadius: 8,
    padding: 20,
    width: "80%", // Um pouco mais estreito
    alignItems: "center", // Centraliza tudo dentro do card branco
  },

  // Estilo para a imagem do QR Code
  qrCodeImage: {
    width: 220,
    height: 220,
    marginVertical: 24, // Adiciona um espaçamento em cima e embaixo
  },

  // Estilo para o texto "Toque para fechar"
  modalCloseText: {
    color: colors.gray[400],
    fontSize: 14,
    marginTop: 12,
  },
    modalContent: {
    backgroundColor: colors.gray[900],
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
    paddingBottom: 42,
    padding: 24,
  },  
  modal: {
    flex: 1,
    justifyContent: "flex-end"
  },
    modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 42
  },
    modalCategory: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[400]
  },
    modalLinkName: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[200]
  },
    modalUrl: {
    fontSize: 14,
    color: colors.gray[400]
  },
});
