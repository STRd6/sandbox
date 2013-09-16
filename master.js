(function() {
  module.exports = function(_arg) {
    var height, methods, name, sandbox, width, _ref;
    _ref = _arg != null ? _arg : {}, name = _ref.name, width = _ref.width, height = _ref.height, methods = _ref.methods;
    if (name == null) {
      name = "sandbox" + new Date;
    }
    if (width == null) {
      width = 800;
    }
    if (height == null) {
      height = 600;
    }
    if (methods == null) {
      methods = {};
    }
    sandbox = window.open("", name, "width=" + width + ",height=" + height);
    Object.extend(sandbox, methods);
    return sandbox;
  };

}).call(this);
