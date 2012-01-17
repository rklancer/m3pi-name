(function() {
  var back, degrees, dtheta, dx, dy, forward, left, r, right, round, theta, theta1, turn, vertex, vertices, x, x1, y, y1, _i, _len, _ref, _ref2, _ref3, _ref4;

  vertices = [[0, 0], [1, 6], [4, 6], [1, 3], [2, 0], [4, 0], [5, 6], [9, 6], [6, 6], [5, 0], [9, 0], [10, 6], [9.5, 3], [12.5, 3], [13, 6], [12, 0], [13, 0], [16, 6], [17, 0], [18, 0], [19, 6], [22, 6], [19, 3], [20, 0], [22, 0], [23, 6], [25, 3], [22, 0]];

  left = function(theta) {
    return console.log("left " + (round(degrees(theta))));
  };

  right = function(theta) {
    return console.log("right " + (round(degrees(theta))));
  };

  back = function(r) {
    return console.log("back " + (round(r * 20)));
  };

  forward = function(r) {
    return console.log("forward " + (round(r * 20)));
  };

  round = function(x) {
    return Math.round(x * 100) / 100;
  };

  degrees = function(theta) {
    return theta * 180 / Math.PI;
  };

  _ref = vertices[0], x = _ref[0], y = _ref[1];

  theta = Math.PI / 2;

  _ref2 = vertices.slice(1, vertices.length + 1 || 9e9);
  for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
    vertex = _ref2[_i];
    x1 = vertex[0], y1 = vertex[1];
    _ref3 = [x1 - x, y1 - y], dx = _ref3[0], dy = _ref3[1];
    r = Math.sqrt(dx * dx + dy * dy);
    theta1 = Math.atan2(dy, dx);
    dtheta = theta1 - theta;
    if (dtheta > Math.PI) dtheta = dtheta - Math.PI;
    if (dtheta < -Math.PI) dtheta = dtheta + Math.PI;
    turn = dtheta > 0 ? function() {
      return left(dtheta);
    } : function() {
      return right(-dtheta);
    };
    if (Math.abs(dtheta - Math.PI) < 0.001) {
      back(r);
    } else {
      turn();
      forward(r);
    }
    theta = theta1;
    _ref4 = [x1, y1], x = _ref4[0], y = _ref4[1];
  }

}).call(this);
