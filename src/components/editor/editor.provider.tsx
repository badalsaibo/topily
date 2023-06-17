import React, { createContext, useContext, useMemo, useState } from 'react';
import Editor from './editor.component';

type EditorProviderValues = {
  showEditor: boolean;
  setShowEditor: React.Dispatch<React.SetStateAction<boolean>>;
};

type EditorProviderProps = {
  children: React.ReactNode;
};

const EditorContext = createContext<EditorProviderValues>({
  showEditor: false,
  setShowEditor: () => {},
});

const EditorProvider = ({ children }: EditorProviderProps) => {
  const [showEditor, setShowEditor] = useState<boolean>(false);

  const state = useMemo(
    () => ({
      showEditor,
      setShowEditor,
    }),
    [showEditor]
  );
  return (
    <>
      <EditorContext.Provider value={state}>{children}</EditorContext.Provider>
      <Editor />
    </>
  );
};

export const useEditor = () => useContext(EditorContext);

export default EditorProvider;
