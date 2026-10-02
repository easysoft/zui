/** Paths owned by one execution, never part of the serializable build plan. */
export interface BuildContext {
    workDir: string;
    entry: string;
    publicDir: string;
    outDir: string;
}
