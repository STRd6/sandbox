Sandbox = require "../main"

describe "sandbox", ->
  it "should be able to open a window", ->
    sandbox = Sandbox()

    assert sandbox

    sandbox.close()
