// Modules
import { createRouter as _createRouter, createWebHistory, createMemoryHistory } from "vue-router";

// Views
import Home from "@views/Home.vue";
import Shows from "@views/Shows.vue";
import Rooms from "@views/Rooms.vue";
import Player from "@views/Player.vue";
import ErrorView from "@views/Error.vue";
// eslint-disable-next-line @typescript-eslint/naming-convention
const RoomLoader = (): Promise<RouteComponent> => import("@views/RoomLoader.vue");

// Types
import type { RouteComponent, Router } from "vue-router";

export function createRouter (): Router {
	return _createRouter({
		history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
		routes: [
			{
				path: "/",
				component: Home
			},
			{
				path: "/shows/:showId?",
				component: Shows,
				props: true
			},
			{
				path: "/rooms",
				component: Rooms
			},
			{
				path: "/rooms/:roomId",
				component: RoomLoader,
				props: true
			},
			{
				path: "/watch/:showId/:episodeId?",
				component: Player,
				props: route => {
					return {
						showId: route.params.showId,
						episodeId: Number(route.params.episodeId)
					};
				}
			},
			{
				path: "/:pathMatch(.*)*",
				component: ErrorView
			}
		]
	});
}