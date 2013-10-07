Sandbox
=======

Sandbox creates a popup window in which you can run code.

You can pass in a width and a height to set the size of the window.

    module.exports = ({name, width, height, methods}={}) ->
      name ?= "sandbox" + new Date
      width ?= 800
      height ?= 600
      methods ?= {}

      sandbox = window.open(
        ""
        name
        "width=#{width},height=#{height}"
      )

Pass in functions to attach to the running window. Useful for things like
`onerror` or other utilities if you would like the running code to be able to
communicate back to the parent.

      Object.extend sandbox, methods

The newly created window is returned.

      return sandbox
