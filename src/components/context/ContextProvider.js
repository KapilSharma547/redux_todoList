import { createContext, useState } from "react";

export const DeleteContext = createContext("");

const ContextProvider = ({ children }) => {
  const [dlttask, setDlettask] = useState(false);
  return (
    <>
      <DeleteContext.Provider value={{ dlttask }}>
        {children}
      </DeleteContext.Provider>
    </>
  );
};

export default ContextProvider;
