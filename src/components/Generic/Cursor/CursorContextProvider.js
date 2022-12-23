// React
import { createContext, useState } from "react";

export const CursorContext = createContext();

const CursorContextProvider = ({ children }) => {
  const [cursor, setCursor] = useState({ active: false, mood: null });
  return (
    <CursorContext.Provider value={[cursor, setCursor]}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
