export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getTheme(index) {
  const themes = {
    0: {
      name: "default",
      color: "#24292F",
    },
    1: {
      name: "chinese",
      color: "#AA381",
    },
    
  }
  return themes[index];
};