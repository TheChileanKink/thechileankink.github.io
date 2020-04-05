.DEFAULT_GOAL := github
github:
	flutter build web
	git add .
	git commit -m "Changes"
	git push
build:
	flutter build web
run:
	flutter run -d chrome