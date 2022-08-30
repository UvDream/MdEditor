all: build deploy clean

build:
	pnpm build
deploy:
	scp -r dist/*  root@124.223.8.237:/editor
clean:
	rm -rf dist

