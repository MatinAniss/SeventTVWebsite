import { Emote } from "@/structures/Emote";
import gql from "graphql-tag";

export const GetOneEmote = gql`
	query GetOneEmote($id: ObjectID!) {
		emote(id: $id) {
			id
			created_at
			name
			status
			owner {
				id
				username
				display_name
				avatar_url
				tag_color
			}
			flags
			urls
			animated
		}
	}
`;

export const GetEmoteStatusOnly = gql`
	query GetEmoteStatusOnly($id: String!) {
		emote(id: $id) {
			id
			status
		}
	}
`;

export const GetEmoteChannels = gql`
	query GetEmoteChannels($id: ObjectID!, $page: Int, $limit: Int) {
		emote(id: $id) {
			id
			channels(page: $page, limit: $limit) {
				total
				items {
					id
					username
					display_name
					avatar_url
					tag_color
				}
			}
		}
	}
`;

export interface GetOneEmote {
	emote: Emote;
}
