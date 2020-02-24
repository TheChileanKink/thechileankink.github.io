.DEFAULT_GOAL := github
github:
	flutter build web
	git add .
	git commit -m $(commit)
	git push
run:
	flutter run -d chrome