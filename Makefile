all: build-cjs build-esm build-types

build-cjs:
	bunx tsc --project tsconfig.cjs.json --outDir dist/cjs
	echo '{"type": "commonjs"}' > dist/cjs/package.json

build-esm:
	bunx tsc --project tsconfig.esm.json --outDir dist/esm
	echo '{"type": "module"}' > dist/esm/package.json

build-types:
	bunx tsc --project tsconfig.types.json --outDir dist/types
	echo '{"type": "module"}' > dist/types/package.json
