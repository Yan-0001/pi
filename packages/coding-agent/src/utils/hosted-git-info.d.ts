declare module "hosted-git-info" {
	interface GitInfo {
		type: string;
		domain: string;
		user: string;
		project: string;
		committish?: string;
	}

	function fromUrl(url: string): GitInfo | undefined;
	export default { fromUrl };
}
