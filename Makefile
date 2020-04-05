.DEFAULT_GOAL := github
github:
	flutter build web
	cd /Users/thechileankink/portafolio/build/web
	git add .
	git commit -m "New Site"
	git push
build:
	flutter build web
run:
	flutter run -d chrome