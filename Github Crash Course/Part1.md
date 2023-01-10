### Git Crash Course Pt-1

`https://www.atlassian.com/git/tutorials/setting-up-a-repository`

Git is a version control system. It is used to track changes in files and directories. It is used to track changes in files and directories. It is used to track changes in files and directories.

```bash
git config --list

git config --global user.name "Your Name"
git config --global user.email "Your Email Address"
```


##### Git Tags

Create tags for GitHub by either using:

- Git command line, or
- GitHub's web interface.

Creating tags from the command line:

To create a tag on your current branch, run this:

```bash
git tag <tagname>
```

If you want to include a description with your tag, add -a to create an annotated tag:

```bash
git tag <tagname> -a -m "Tag message"
```


This will create a local tag with the current state of the branch you are on. When pushing to your remote repo, tags are NOT included by default. You will need to explicitly say that you want to push your tags to your remote repo:


```bash
git push origin --tags
```

Or if you just want to push a single tag:

```bash
git push origin <tagname>
```

Creating tags through GitHub's web interface:

1. Go to your repo's main page
2. Click on the "Tags" tab
3. Click on "Add tag"
4. Enter the tag name and description
5. Click on "Create tag"

then you can push the tag to your remote repo by running:

```bash
git fetch --tags
```

##### Git Commands

```
git init: Initialize a local git repository
git add: Add files to staging area
git commit: Commit changes to repository
git status: Check status of working tree
git log: Show commit logs
git diff: Show changes between commits, commit and working tree, etc
git checkout: Switch branches or restore working tree files
git tag: Create, list, delete or verify a tag object signed with GPG
```

git init - Create a new git repository in the current directory

```bash
git init
```

git add - Add files to staging area

```bash
git add <file>
git add .
```

git commit - Commit changes to repository

```bash
git commit -m "Commit message"

options: -a, --all
         -m, --message

git commit -a -m "Commit message"
-a option will add all the files to staging area and commit them
```

git status - Check status of working tree

```bash
git status

options: -s, --short
         -b, --branch
         -u, --untracked-files[=all|normal|no]
```

git log - Show commit logs

```bash
git log
```

git diff - Show changes between commits, commit and working tree, etc

```bash
git diff

options: --staged
         --color-words
         --word-diff=color
         --histogram
         --minimal
         


```

git checkout - Switch branches or restore working tree files

```bash
git checkout <branch>
git checkout -b <new-branch-name>
```

git branch - List, create, or delete branches

```bash
git branch
options: -d, -D
-d - Delete a branch
-D - Force delete a branch
```

git merge - Join two or more development histories together

```bash
git merge <branch>
```

git remote - Manage set of tracked repositories

```bash
git remote add origin <remote-url>
```

git push - Update remote refs along with associated objects

```bash
git push origin master
-u: Set the upstream branch for the current branch
-f: Force push
--all: Push all branches
```


UNSTAGING A STAGED FILE IN GIT: git reset HEAD <file>

```bash
git reset HEAD <file>
```

UNDOING A COMMIT IN GIT: git reset --

```bash
git reset --soft HEAD~1
git reset --hard HEAD~1
```

git reset --soft HEAD~1: This will undo the commit but keep the changes in the staging area.

git reset --hard HEAD~1: This will undo the commit and the changes in the working directory.

git reset --hard HEAD~2: This will undo the last two commits and the changes in the working directory.

git reset --hard HEAD~3: This will undo the last three commits and the changes in the working directory.
