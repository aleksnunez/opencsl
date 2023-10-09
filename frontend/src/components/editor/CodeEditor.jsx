import Editor from "@monaco-editor/react";
function CodeEditor() {
  const code = "console.log('Monaco Editor!');";
  return (
    <Editor
      height="100px"
      language="javascript"
      theme="vs-dark"
      value={code}
    />
  );
}
export default CodeEditor;