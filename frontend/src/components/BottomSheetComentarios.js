import { useMemo } from "react";
import { View, Dimensions } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

export default function BottomSheetComentarios({ bottomSheetRef }) {
  const snapPoints = useMemo(() => ["90%"], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0} 
      snapPoints={snapPoints}
      enablePanDownToClose
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        elevation: 999,
        zIndex: 999,
      }}
    >
      <View
        style={{
          height: Dimensions.get("window").height,
          backgroundColor: "red",
        }}
      />
    </BottomSheet>
  );
}