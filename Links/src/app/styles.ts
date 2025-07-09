import { StyleSheet } from 'react-native';

import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o container ocupar toda a tela
    backgroundColor: colors.gray[900],
    alignItems: 'center', // Alinha os itens verticalmente ao centro
    justifyContent: 'center', // Alinha os itens horizontalmente ao centro
    paddingHorizontal: 24, // Mantém um espaçamento nas laterais
  },
})