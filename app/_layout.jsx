import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff8c00",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: "20",
          fontWeight: "bold",
        },
        contentStyle: {
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name='notes' options={{ headerTitle: 'Notes' }} />
      {/* This registers a screen in the stack.
      name="index" → Points to the file app/index.tsx
      In expo-router, the name maps to a file in the app/ directory.
      So name="index" means the root file: app/index.tsx
      options={{ title: "Home" }} → Sets the screen's navigation title to "Home" */}
    </Stack>
  );
};

export default RootLayout;
