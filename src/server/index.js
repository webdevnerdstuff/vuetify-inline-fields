// src/server.js
import {
	Factory,
	Model,
	belongsTo,
	createServer,
	RestSerializer,
	Serializer,
	hasMany,
} from 'miragejs';
import { faker } from '@faker-js/faker';
import database from '../playground/configs/database.json';


Serializer.extend({
	include(request, resource) {
		return Object.keys(this.schema.associationsFor(resource.modelName));
	}
});


export function makeServer({ environment = 'development' } = {}) {
	const server = createServer({
		environment,

		// -------------------------------------------------- Factories //
		factories: {
			comment: Factory.extend({
				name() {
					return faker.lorem.sentence({ max: 5, min: 3 });
				},
			}),

			post: Factory.extend({
				title() {
					return faker.lorem.sentence({ max: 5, min: 3 });
				},
			}),

			user: Factory.extend({
				email: faker.internet.email,
				name: faker.person.fullName,
				username: faker.internet.userName,
			})
		},

		// -------------------------------------------------- Models //
		models: {
			post: Model.extend({}),
			users: Model.extend({}),
		},

		// -------------------------------------------------- Routes //
		routes() {
			this.namespace = 'vuetify-inline-fields/playground/api';

			// ------------------------- Client Side //
			this.get('users', (schema) => {
				return schema.users.all();
			});

			this.get('posts', (schema) => {
				return schema.posts.all();
			});

			// ------------------------- Server Side //
			this.put('posts', (schema, request) => {
				const attrs = JSON.parse(request.requestBody);
				console.log({ attrs });

				const item = attrs.raw;
				const post = schema.posts.find(item.id);

				post.update(item);

				return post;
			});

		},

		// -------------------------------------------------- Seeds //
		seeds(server) {
			server.db.loadData(database);
		},

		// -------------------------------------------------- Serializers //
		serializers: {
			application: RestSerializer,
			comment: Serializer.extend({
				include: ['post'],
			}),
			embed: true,
			post: Serializer.extend({
				include: ['user'],
			}),
			serializeIds: 'always',
		},
	});

	return server;
}
