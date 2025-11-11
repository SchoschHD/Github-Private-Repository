// Minimal in-memory collection model used as a bootstrap for the STAC API.
// Later this will be replaced with real DB queries (Postgres + PostGIS).

const sampleCollections = [
	{
		id: "sample-1",
		stac_version: "1.1.0",
		type: "Collection",
		title: "Sample Collection 1",
		description: "A small sample collection used for local development and testing.",
		license: "CC-BY-4.0",
		keywords: ["sample", "test", "sentinel"],
		providers: [
			{ name: "Example Provider", roles: ["producer"] }
		],
		extent: {
			spatial: { bbox: [[-180, -90, 180, 90]] },
			temporal: { interval: [["2010-01-01T00:00:00Z", null]] }
		},
		links: [],
		full_json: {}
	},
	{
		id: "sample-2",
		stac_version: "1.1.0",
		type: "Collection",
		title: "Coastal Imagery",
		description: "Imagery focusing on coastal regions.",
		license: "PDDL-1.0",
		keywords: ["coast", "imagery"],
		providers: [
			{ name: "CoastMaps", roles: ["producer"] }
		],
		extent: {
			spatial: { bbox: [[-20, 30, 60, 75]] },
			temporal: { interval: [["2018-01-01T00:00:00Z", "2022-12-31T23:59:59Z"]] }
		},
		links: [],
		full_json: {}
	}
];

export async function fetchCollections() {
	// In a real implementation this would query the DB.
	return sampleCollections;
}

export async function fetchCollectionById(id) {
	return sampleCollections.find((c) => String(c.id) === String(id)) || null;
}

export async function searchCollectionsByQuery(q) {
	if (!q) return sampleCollections;
	const ql = String(q).toLowerCase();
	return sampleCollections.filter((c) => {
		return (
			(c.title && c.title.toLowerCase().includes(ql)) ||
			(c.description && c.description.toLowerCase().includes(ql)) ||
			(Array.isArray(c.keywords) && c.keywords.join(" ").toLowerCase().includes(ql))
		);
	});
}