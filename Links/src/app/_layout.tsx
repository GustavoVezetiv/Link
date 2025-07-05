import { Stack } from "expo-router";

import { colors } from "@/styles/colors";

export default function layout (){ 

    const backgroundColor = colors.gray[950]
    return <Stack screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor },
        }}
    />
}