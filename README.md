# UrbanDesignOptimisation WebUI

Live working files for FPO research team because working on onedrive is not sustainable anymore with more than 2 people.

## GIT WORKFLOW (IMPORTANT READ)

Currently, only Anna & the research GitHub account has the authority to merge updates. Please DO NOT log in to the shared research account to merge your changes yourself, let Anna know so that she can merge your updates for you. This is to prevent making any breaking updates in case more than 1 person has made updates.

The concept of a git workflow is that every team member will clone a copy of the most updated working files to their local machines, make their updates locally and the commit and push the updates to new branches. The new branches will then be merged to the main branch after resolving conflicts. This is done to maintain the main branch as a single source of truth.

## Getting Started

To work with a GitHub repo you can either use the command line (typically GitBash), Setup GitHub Desktop or add the repo folder to your Visual Studio Code and make your git commits etc from VSC.

1. CLONE THE REPO
Either click 'set up on desktop' on GitHub or go to the command line and type
```git clone <https://githubaddress>```

2. MAKE YOUR EDITS
Please do not change the file name of the script that you are editing. Also please be mindful that GitHub only allow uploading files up to 100MB in size.

3. COMMIT
Write an identifiable commit message eg. very briefly describe what you've just updated and who you are

4. PUSH TO A NEW BRANCH (IMPORTANT) 
Please do a git pull before pushing to make sure you have the most updated set. Since the main branch is a protected branch, attempting to push to the main branch will not be successful. Instead, push to a new branch. Name the new branch anything that is identifiable (The branch will be deleted upon merging)

5. REQUEST MERGE
From VSC or GitHub dekstop, you should be able to find a 'merge branch' command. If you can't, you can go to GitHub straight and submit a pull request directly. Anna should be alerted and will then review and approve the merging

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
insert code
```

## Quick Installation

Install Visual Studio Code 
Install Python 3, pip and Node.
Install requirements.txt

## To make changes on command line
Git clone main branch to your local drive.
bash
git clone https://github.com/SUTD-UDOpt/UDO_Web
Make desired changes locally.
Open a terminal with the directory set to the main folder.
Do the following:
bash
git init
git add .
git commit -m 'Your commit message'
git remote add https://github.com/SUTD-UDOpt/UDO_Web
git branch new-branch-name
git push -u origin new-branch-name
Go to the branch you made
https://github.com/SUTD-UDOpt/UDO_Web/tree/new-branch-name
At the top of the request, check for: "base:main <- comapre:new-branch-name"
Click on "create pull request" and wait for admin approval.

## License

SUTD!
