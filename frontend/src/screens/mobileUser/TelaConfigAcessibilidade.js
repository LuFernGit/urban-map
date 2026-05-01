import { useContext } from "react";
import { StyleSheet, View } from "react-native";

import BottomNav from "../../components/BottomNav";
import HeaderDetails from "../../components/HeaderDetails";

import AcessibilidadeCard from "../../components/AccessibilityCard";
import SwitchOption from "../../components/SwitchOption";
import TextSizeControl from "../../components/TextSizeControl";

import { ThemeContext } from "../../context/ThemeContext";

export default function TelaConfigAcessibilidade({ navigation }) {
  const { modoEscuro, setModoEscuro, tamanhoTexto, setTamanhoTexto, colors } =
    useContext(ThemeContext);

  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <HeaderDetails title="Configuração" onBack={() => navigation.goBack()} />

      <View style={styles.content}>
        <AcessibilidadeCard />

        <TextSizeControl value={tamanhoTexto} setValue={setTamanhoTexto} />

        <SwitchOption value={modoEscuro} setValue={setModoEscuro} />
      </View>

      <BottomNav />
    </View>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
      padding: 20,
      gap: 15,
    },
  });
