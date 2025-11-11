// Minimal CQL2 parser fallback.
// This is a placeholder. The real implementation should use the
// cql2-rs wasm module or a proper parser to translate CQL2 into SQL/filters.

export function parseCQL2(cql2) {
	// If no query provided return null (no-op filter)
	if (!cql2) return null;
	// Very naive support: treat input as free-text that should match title/description
	const q = String(cql2).trim();
	return { type: "free-text", q };
}

export default { parseCQL2 };