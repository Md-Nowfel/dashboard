const theme = {
  colors: {
    background: "#f1f1f1", // Light gray background
    light: "#FFFFFF", // White for cards and sections
    sidebarBackground: "#F9F9F9", // Slightly darker gray for the sidebar
    dark: "#1A1A1A", // Dark gray/black for main text
    mutedText: "#727272", // Gray for secondary text
    accentText: "#36C36C", // Green for positive metrics
    errorText: "#E74C3C", // Red for negative metrics
    buttonAccent: "#F0AD4E", // Orange for buttons and highlights
    activeStatus: "#36C36C", // Green for active status
    offlineStatus: "#E74C3C", // Red for offline status
    cardBorder: "#E0E0E0", // Light gray for borders
    divider: "#DADADA", // Gray for dividers
    chartBar: "#B0B0B0", // Gray for bars
    blur: "rgba(159, 159, 159, 0.5)",
  },
  fontSizes: {
    small: "12px",
    medium: "16px",
    large: "20px",
    xlarge: "30px",
  },
  lineHeights: {
    normal: "1.5",
    relaxed: "1.75",
    dense: "1.25",
  },
  fonts: {
    primary: "'Inter', sans-serif", // Add Inter font
  },
  breakpoints: {
    laptopLarge: "1250px",
    laptopSmall: "1024px",
    tablet: "768px",
    mobile: "425px",
  },
};

export default theme;
