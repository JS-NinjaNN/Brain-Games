install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
lint:
	npx eslint .
publish:
	npm publish --dry-run