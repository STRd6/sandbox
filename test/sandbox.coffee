Sandbox = require "../main"

describe "sandbox", ->
  it "should be able to open a window", ->
    sandbox = Sandbox()

    assert sandbox

    assert sandbox != window, "Popup should not be this window"

    sandbox.close()
