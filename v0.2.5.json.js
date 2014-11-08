window["distri/sandbox:v0.2.5"]({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "mode": "100644",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "content": "sandbox\n=======\n\nRun code in a popup window filled with sand.\n",
      "mode": "100644",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "content": "Sandbox\n=======\n\nSandbox creates a popup window in which you can run code.\n\nYou can pass in a width and a height to set the size of the window.\n\n    module.exports = ({name, width, height, methods}={}) ->\n      name ?= \"sandbox-#{Math.random()}\"\n      width ?= 800\n      height ?= 600\n      methods ?= {}\n\n      sandbox = window.open(\n        \"\"\n        name\n        \"width=#{width},height=#{height}\"\n      )\n\nPass in functions to attach to the running window. Useful for things like\n`onerror` or other utilities if you would like the running code to be able to\ncommunicate back to the parent.\n\n      extend sandbox, methods\n\n      autoClose(sandbox)\n\nThe newly created window is returned.\n\n      return sandbox\n\nHelpers\n-------\n\n    extend = (target, sources...) ->\n      for source in sources\n        for name of source\n          target[name] = source[name]\n\n      return target\n\nClose sandbox when closing our window.\n\n    autoClose = (sandbox) ->\n      closer = ->\n        window.removeEventListener \"unload\", closer\n        sandbox.close()\n\n      sandbox.addEventListener \"unload\", closer\n      window.addEventListener \"unload\", closer\n",
      "mode": "100644",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "content": "version: \"0.2.5\"\n",
      "mode": "100644",
      "type": "blob"
    },
    "test/sandbox.coffee": {
      "path": "test/sandbox.coffee",
      "content": "Sandbox = require \"../main\"\n\ndescribe \"sandbox\", ->\n  it \"should be able to open a window\", ->\n    sandbox = Sandbox()\n\n    assert sandbox\n\n    assert sandbox != window, \"Popup should not be this window\"\n\n    sandbox.close()\n",
      "mode": "100644",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  var autoClose, extend,\n    __slice = [].slice;\n\n  module.exports = function(_arg) {\n    var height, methods, name, sandbox, width, _ref;\n    _ref = _arg != null ? _arg : {}, name = _ref.name, width = _ref.width, height = _ref.height, methods = _ref.methods;\n    if (name == null) {\n      name = \"sandbox-\" + (Math.random());\n    }\n    if (width == null) {\n      width = 800;\n    }\n    if (height == null) {\n      height = 600;\n    }\n    if (methods == null) {\n      methods = {};\n    }\n    sandbox = window.open(\"\", name, \"width=\" + width + \",height=\" + height);\n    extend(sandbox, methods);\n    autoClose(sandbox);\n    return sandbox;\n  };\n\n  extend = function() {\n    var name, source, sources, target, _i, _len;\n    target = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];\n    for (_i = 0, _len = sources.length; _i < _len; _i++) {\n      source = sources[_i];\n      for (name in source) {\n        target[name] = source[name];\n      }\n    }\n    return target;\n  };\n\n  autoClose = function(sandbox) {\n    var closer;\n    closer = function() {\n      window.removeEventListener(\"unload\", closer);\n      return sandbox.close();\n    };\n    sandbox.addEventListener(\"unload\", closer);\n    return window.addEventListener(\"unload\", closer);\n  };\n\n}).call(this);\n",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.2.5\"};",
      "type": "blob"
    },
    "test/sandbox": {
      "path": "test/sandbox",
      "content": "(function() {\n  var Sandbox;\n\n  Sandbox = require(\"../main\");\n\n  describe(\"sandbox\", function() {\n    return it(\"should be able to open a window\", function() {\n      var sandbox;\n      sandbox = Sandbox();\n      assert(sandbox);\n      assert(sandbox !== window, \"Popup should not be this window\");\n      return sandbox.close();\n    });\n  });\n\n}).call(this);\n",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://www.danielx.net/editor/"
  },
  "version": "0.2.5",
  "entryPoint": "main",
  "repository": {
    "branch": "v0.2.5",
    "default_branch": "master",
    "full_name": "distri/sandbox",
    "homepage": null,
    "description": "Run code in a popup window filled with sand.",
    "html_url": "https://github.com/distri/sandbox",
    "url": "https://api.github.com/repos/distri/sandbox",
    "publishBranch": "gh-pages"
  },
  "dependencies": {}
});