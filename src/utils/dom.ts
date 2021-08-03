/**
 * Changes page title
 */
export function setPageTitle (title: string): void {
	document.title = title;
}

/**
 * Resets page title to default 'Ramune'
 */
export function clearPageTitle (): void {
	document.title = "Ramune";
}

export function getCookie (name: string): string | null {

	const
		cookies = document.cookie.split("; "),
		cookieMatch = new RegExp(`^${name}=`);

	const cookie = cookies.find((cookie: string) => cookie.match(cookieMatch));

	return cookie
		? decodeURIComponent(cookie.replace(`${name}=`, ""))
		: null;
}

export function setCookie (name: string, value: string): void {
	document.cookie = `${ name }=${ encodeURIComponent(value) }; domain=.gizmo.moe; expires=${ new Date(Date.now() + (60 * 60 * 24 * 365 * 1000)).toUTCString() }; secure=true; samesite=lax`;
}

export function renderTwemoji (element: HTMLElement): void {

	// Don't use Twemoji on Apple devices, as they have a pretty good emoji set
	if (navigator.userAgent.match(/Darwin|Macintosh|Mac OS|Apple/i) === null) {
		window.twemoji.parse(element, {
			ext: ".svg",
			folder: "twemoji",
			base: "https://cdn.gizmo.moe/assets/"
		});
	}
}

export function waitForImageLoad (image: HTMLImageElement): Promise<void> {
	return new Promise((res, rej) => {
		image.onload = () => res();
		image.onerror = rej;
	});
}