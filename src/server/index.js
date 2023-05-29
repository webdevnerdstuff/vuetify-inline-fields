import {
	Model,
	belongsTo,
	createServer,
	hasMany,
	RestSerializer,
} from 'miragejs';
import database from '../playground/configs/database.json';


export function makeServer({ environment = 'development' } = {}) {
	const server = createServer({
		environment,

		// -------------------------------------------------- Models //
		models: {
			post: Model.extend({
				user: belongsTo('user'),
			}),
			user: Model.extend({
				posts: hasMany()
			}),
		},

		// -------------------------------------------------- Routes //
		routes() {
			this.namespace = 'vuetify-inline-fields/playground/api';

			// ------------------------- Client Side //
			this.get('users', (schema) => {
				return schema.users.all();
			});

			this.get('posts', (schema) => {
				let posts = schema.posts.all();

				posts = posts.models.map((post) => {
					if (post.user) {
						return {
							...post.attrs,
							user: {
								id: post.user.attrs.id,
								name: post.user.attrs.name,
							},
						};
					}

					return {
						...post.attrs,
						user: {},
					};
				});

				return {
					posts,
				};
			});

			// ------------------------- Update //
			this.put('posts', (schema, request) => {
				const attrs = JSON.parse(request.requestBody);

				const item = attrs.raw;
				const user = item.user ?? '';

				delete item.user;

				const post = schema.posts.find(item.id);
				item.userId = user?.id;

				post.update(item);

				const response = {
					...post.attrs,
					user: {},
				};

				if (post.user) {
					response.user = {
						id: post.user.attrs.id,
						name: post.user.attrs.name,
					};
				}

				// Use to test error response //
				// throw new Error('Error');

				return response;
			});
		},

		// -------------------------------------------------- Seeds //
		seeds(server) {
			server.db.loadData(database);
		},

		// -------------------------------------------------- Serializers //
		serializers: {
			application: RestSerializer,
			embed: true,
			post: RestSerializer.extend({
				include: ['user'],
			}),
			serializeIds: 'always',
		},
	});

	return server;
}
