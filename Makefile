install:
	npm ci
	chmod +x bin/brain-games.js bin/brain-even.js
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-games.js	
	node bin/brain-even.js
publish:
	npm publish --dry-run
make lint:
	npx eslint