(function() {
  var back, degrees, dtheta, dx, dy, forward, goleft, goright, left, limit, r, right, round, theta, theta1, vertex, vertices, x, x1, y, y1, _i, _len, _ref, _ref2, _ref3, _ref4;

  console.log("penup\nright 90\nback 250\nleft 90\npendown");

  vertices = [[0, 0], [1, 6], [4, 6], [1, 3], [2, 0], [4, 0], [5, 6], [9, 6], [6, 6], [5, 0], [9, 0], [10, 6], [9.5, 3], [12.5, 3], [13, 6], [12, 0], [13, 0], [16, 6], [17, 0], [18, 0], [19, 6], [22, 6], [19, 3], [20, 0], [22, 0], [23, 6], [25, 3], [22, 0]];

  left = function(theta) {
    if (Math.abs(theta) > 0.01) {
      return console.log("left " + (round(degrees(theta))));
    }
  };

  right = function(theta) {
    if (Math.abs(theta) > 0.01) {
      return console.log("right " + (round(degrees(theta))));
    }
  };

  back = function(r) {
    if (Math.abs(r) > 0.01) return console.log("back " + (round(r * 20)));
  };

  forward = function(r) {
    if (Math.abs(r) > 0.01) return console.log("forward " + (round(r * 20)));
  };

  round = function(x) {
    return Math.round(x * 100) / 100;
  };

  degrees = function(theta) {
    return theta * 180 / Math.PI;
  };

  _ref = vertices[0], x = _ref[0], y = _ref[1];

  theta = Math.PI / 2;

  limit = function(radians) {
    return radians - 2 * Math.PI * Math.round(radians / (2 * Math.PI));
  };

  _ref2 = vertices.slice(1, vertices.length + 1 || 9e9);
  for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
    vertex = _ref2[_i];
    x1 = vertex[0], y1 = vertex[1];
    _ref3 = [x1 - x, y1 - y], dx = _ref3[0], dy = _ref3[1];
    r = Math.sqrt(dx * dx + dy * dy);
    theta1 = Math.atan2(dy, dx);
    dtheta = limit(theta1 - theta);
    goleft = function(angle) {
      left(angle);
      return theta = limit(theta + angle);
    };
    goright = function(angle) {
      right(angle);
      return theta = limit(theta - angle);
    };
    if ((0 <= dtheta && dtheta <= Math.PI / 2)) {
      goleft(dtheta);
      forward(r);
    } else if ((Math.PI / 2 <= dtheta && dtheta < Math.PI)) {
      goright(Math.PI - dtheta);
      back(r);
    } else if ((-Math.PI / 2 <= dtheta && dtheta <= 0)) {
      goright(-dtheta);
      forward(r);
    } else if ((-Math.PI <= dtheta && dtheta < -Math.PI / 2)) {
      goleft(dtheta + Math.PI);
      back(r);
    } else {
      console.error("WHOOPS; dtheta = " + dtheta);
    }
    _ref4 = [x1, y1], x = _ref4[0], y = _ref4[1];
  }

}).call(this);
