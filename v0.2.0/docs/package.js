(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "sandbox\n=======\n\nRun code in a popup window filled with sand.\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "Sandbox\n=======\n\nSandbox creates a popup window in which you can run code.\n\nYou can pass in a width and a height to set the size of the window.\n\n    module.exports = ({name, width, height, methods}={}) ->\n      name ?= \"sandbox\" + new Date\n      width ?= 800\n      height ?= 600\n      methods ?= {}\n\n      sandbox = window.open(\n        \"\"\n        name\n        \"width=#{width},height=#{height}\"\n      )\n\nPass in functions to attach to the running window. Useful for things like\n`onerror` or other utilities if you would like the running code to be able to\ncommunicate back to the parent.\n\n      Object.extend sandbox, methods\n\nThe newly created window is returned.\n\n      return sandbox\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.2.0\"\n",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  module.exports = function(_arg) {\n    var height, methods, name, sandbox, width, _ref;\n    _ref = _arg != null ? _arg : {}, name = _ref.name, width = _ref.width, height = _ref.height, methods = _ref.methods;\n    if (name == null) {\n      name = \"sandbox\" + new Date;\n    }\n    if (width == null) {\n      width = 800;\n    }\n    if (height == null) {\n      height = 600;\n    }\n    if (methods == null) {\n      methods = {};\n    }\n    sandbox = window.open(\"\", name, \"width=\" + width + \",height=\" + height);\n    Object.extend(sandbox, methods);\n    return sandbox;\n  };\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.2.0\"};",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "version": "0.2.0",
  "entryPoint": "main",
  "repository": {
    "id": 12746310,
    "name": "sandbox",
    "full_name": "STRd6/sandbox",
    "owner": {
      "login": "STRd6",
      "id": 18894,
      "avatar_url": "https://1.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png&r=x",
      "gravatar_id": "33117162fff8a9cf50544a604f60c045",
      "url": "https://api.github.com/users/STRd6",
      "html_url": "https://github.com/STRd6",
      "followers_url": "https://api.github.com/users/STRd6/followers",
      "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
      "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
      "organizations_url": "https://api.github.com/users/STRd6/orgs",
      "repos_url": "https://api.github.com/users/STRd6/repos",
      "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/STRd6/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/STRd6/sandbox",
    "description": "Run code in a popup window filled with sand.",
    "fork": false,
    "url": "https://api.github.com/repos/STRd6/sandbox",
    "forks_url": "https://api.github.com/repos/STRd6/sandbox/forks",
    "keys_url": "https://api.github.com/repos/STRd6/sandbox/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/STRd6/sandbox/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/STRd6/sandbox/teams",
    "hooks_url": "https://api.github.com/repos/STRd6/sandbox/hooks",
    "issue_events_url": "https://api.github.com/repos/STRd6/sandbox/issues/events{/number}",
    "events_url": "https://api.github.com/repos/STRd6/sandbox/events",
    "assignees_url": "https://api.github.com/repos/STRd6/sandbox/assignees{/user}",
    "branches_url": "https://api.github.com/repos/STRd6/sandbox/branches{/branch}",
    "tags_url": "https://api.github.com/repos/STRd6/sandbox/tags",
    "blobs_url": "https://api.github.com/repos/STRd6/sandbox/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/STRd6/sandbox/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/STRd6/sandbox/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/STRd6/sandbox/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/STRd6/sandbox/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/STRd6/sandbox/languages",
    "stargazers_url": "https://api.github.com/repos/STRd6/sandbox/stargazers",
    "contributors_url": "https://api.github.com/repos/STRd6/sandbox/contributors",
    "subscribers_url": "https://api.github.com/repos/STRd6/sandbox/subscribers",
    "subscription_url": "https://api.github.com/repos/STRd6/sandbox/subscription",
    "commits_url": "https://api.github.com/repos/STRd6/sandbox/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/STRd6/sandbox/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/STRd6/sandbox/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/STRd6/sandbox/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/STRd6/sandbox/contents/{+path}",
    "compare_url": "https://api.github.com/repos/STRd6/sandbox/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/STRd6/sandbox/merges",
    "archive_url": "https://api.github.com/repos/STRd6/sandbox/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/STRd6/sandbox/downloads",
    "issues_url": "https://api.github.com/repos/STRd6/sandbox/issues{/number}",
    "pulls_url": "https://api.github.com/repos/STRd6/sandbox/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/STRd6/sandbox/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/STRd6/sandbox/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/STRd6/sandbox/labels{/name}",
    "releases_url": "https://api.github.com/repos/STRd6/sandbox/releases{/id}",
    "created_at": "2013-09-11T03:03:50Z",
    "updated_at": "2013-10-07T19:59:04Z",
    "pushed_at": "2013-10-07T19:59:04Z",
    "git_url": "git://github.com/STRd6/sandbox.git",
    "ssh_url": "git@github.com:STRd6/sandbox.git",
    "clone_url": "https://github.com/STRd6/sandbox.git",
    "svn_url": "https://github.com/STRd6/sandbox",
    "homepage": null,
    "size": 696,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "CoffeeScript",
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "v0.2.0",
    "defaultBranch": "master"
  },
  "dependencies": {}
});