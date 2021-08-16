// Modules
import { Store } from "vuex";

// Types
import { AuthenticatedUser } from "gizmo-api/lib/types";
import { Show, ShowHusk } from "@typings/show";
import { Room } from "@typings/room";
import { ParsedLyrics } from "@typings/lyrics";

export interface CacheState {
	shows: Map<string, Show>;
	showList: ShowHusk[];
	parsedLyrics: Map<string, ParsedLyrics>;
}

export interface RoomState {
	room: Room | null;
	roomVideoTeleportParent: string | null;
	isRequestingRoomSync: boolean;
	isLoadingRoomData: boolean;
}

export interface UserState {
	user: AuthenticatedUser | null;
}

export interface GenericState {
	connectError: string;
}

export interface SettingsState {
	themeColor: string;
	karaoke: boolean;
	effects: boolean;
}

declare module "@vue/runtime-core" {

	interface State {
		cache: CacheState;
		room: RoomState;
		user: UserState;
		generic: GenericState;
		settings: SettingsState;
	}

	interface ComponentCustomProperties {
		$store: Store<State>;
	}

}