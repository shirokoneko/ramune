// Types
import { Module } from "vuex";
import { Show, ShowHusk } from "@typings/show";
import { CacheState } from "@typings/shims-vuex";
import { ParsedLyrics } from "@typings/lyrics";
import { Language } from "@typings/settings";

// Languages
import * as en from "../i18n/en-us.json";
import * as sl from "../i18n/sl-si.json";
import * as da from "../i18n/da-dk.json";

export default {
	namespaced: true,
	state () {
		return {
			shows: new Map(),
			showList: [],
			parsedLyrics: new Map(),
			languages: {
				"en-us": en,
				"sl-si": sl,
				"da-dk": da
			}
		};
	},
	mutations: {
		CACHE_SHOW (state: CacheState, show: Show) {
			state.shows.set(show.id, show);
		},
		CACHE_SHOW_LIST (state: CacheState, showList: ShowHusk[]) {
			state.showList = showList;
		},
		CACHE_PARSED_LYRICS (state: CacheState, { showId, lyrics }: { showId: string; lyrics: ParsedLyrics }) {
			state.parsedLyrics.set(`${showId}-${lyrics.id}`, lyrics);
		},
		REPLACE_SHOW_CACHE (state: CacheState, newShowCache: Map<string, Show>) {
			state.shows = newShowCache;
		},
		REPLACE_PARSED_LYRICS_CACHE (state: CacheState, newParsedLyricsCache: Map<string, ParsedLyrics>) {
			state.parsedLyrics = newParsedLyricsCache;
		},
		CACHE_LANGUAGE (state: CacheState, { code, language }: { code: string; language: Language }) {
			state.languages[code] = language;
		}
	}
} as Module<CacheState, unknown>;