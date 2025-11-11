// Minimal conformance controller
export const getConformance = (req, res) => {
	// Minimal set of conformance classes for Collection Search + CQL2 placeholder
	const conformance = [
		"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/core",
		"https://api.stacspec.org/v1.0.0-beta.2/core",
		"https://api.stacspec.org/v1.0.0-beta.2/extensions/collection-search",
		"https://api.stacspec.org/v1.0.0-beta.2/extensions/conformance"
	];

	res.json({ conformance });
};

export default { getConformance };
