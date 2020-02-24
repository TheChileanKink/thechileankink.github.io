.DEFAULT_GOAL = github
github:
	flutter build web
	git add .
	git commit -m "New Commit"
	git push