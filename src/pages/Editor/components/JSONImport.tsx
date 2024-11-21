interface JSONImportProps {
    handleJsonSave: () => void
    jsonInput: string
    setJsonInput: (value: React.SetStateAction<string>) => void
}

export const JSONImport = ({
    handleJsonSave,
    jsonInput,
    setJsonInput
}: JSONImportProps) => {
    return (
        <>
            <textarea
                style={{ width: "100%", height: "100px", marginBottom: "16px" }}
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder="Cole seu JSON aqui..."
            />

            <button onClick={handleJsonSave} style={{ marginBottom: "16px" }}>
                Salvar JSON
            </button>
        </>
    )
}