export type ExtensionOptions = {
	data: boolean;
};

export type ExtensionOptionsKeys =  keyof ExtensionOptions;
export interface Message extends Event {
	detail: {id: number};
}
