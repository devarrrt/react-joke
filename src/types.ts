

export interface IJoke {
	id: number,
	setup: string,
	joke: string,
	category: string,
	delivery: string,
	lang: string,
	safe: boolean,
	type: string
}

export interface IJokes {
	items: IJoke[]
}