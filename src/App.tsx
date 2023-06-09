import * as React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import MainView from "./components/view/MainView"
const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<"light" | "dark">("dark")
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MainView colorModeContext={ColorModeContext} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
