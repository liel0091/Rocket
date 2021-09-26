interface Pallet {
  pallet100: string;
  pallet200: string;
  pallet300: string;
  pallet400: string;
  pallet500: string;
}

interface Variety {
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  danger: string;
}

export interface Theme {
  id: string;
  variety: Variety;
  pallet: Pallet;
  font: string[];
}

export const LightTheme: Theme = {
  id: "LightTheme",
  variety: {
    primary: "rgb(0,0,0)",
    secondary: "rgb(248,248,248)",
    info: "rgb(248 205 42)",
    success: "rgb(59,179,0)",
    warning: "rgb(255,213,0)",
    danger: "rgb(204,0,0)",
  },
  pallet: {
    pallet100: "rgb(224,224,224)",
    pallet200: "rgb(220,220,220)",
    pallet300: "rgb(216,216,216)",
    pallet400: "rgb(211,211,211)",
    pallet500: "rgb(208,208,208)",
  },
  font: ["Roboto, ", "Helvetica, ", "Arial, ", "sans-serif "],
};

export const DarkTheme: Theme = {
  id: "DarkTheme",
  variety: {
    primary: "rgb(248,248,248)",
    secondary: "rgb(0,0,0)",
    info: "rgb(248 205 42)",
    success: "rgb(59,179,0)",
    warning: "rgb(255,213,0)",
    danger: "rgb(204,0,0)",
  },
  pallet: {
    pallet100: "rgb(144,144,144)",
    pallet200: "rgb(136,136,136)",
    pallet300: "rgb(128,128,128)",
    pallet400: "rgb(120,120,120)",
    pallet500: "rgb(112,112,112)",
  },
  font: ["Roboto, ", "Helvetica, ", "Arial, ", "sans-serif "],
};
