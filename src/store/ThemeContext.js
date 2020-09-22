import React from "react"
import storage from "local-storage-fallback"

const defaultState = {
  isDark: true,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

class DarkModeProvider extends React.Component {
  state = {
    isDark: true,
  }
  toggleDark = () => {
    let isDark = !this.state.isDark
    storage.setItem("isDark", JSON.stringify(isDark))
    this.setState({ isDark })
  }
  componentDidMount() {
    // Getting dark mode value from localStorage!
    const isDark = JSON.parse(localStorage.getItem("isDark"))
    if (isDark) {
      this.setState({ isDark })
    } else if (supportsDarkMode()) {
      this.setState({ isDark: true })
    }
  }
  render() {
    const { children } = this.props
    const { isDark } = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}
export default ThemeContext

export { DarkModeProvider }
