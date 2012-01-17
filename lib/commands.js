(function() {
  var HALF_SPEED_ROTATION_RATE, HALF_SPEED_TRANSLATION_RATE, ROTATION_RATE, ROTATION_SPEED_FRACTION, TRANSLATION_RATE, TRANSLATION_SPEED_FRACTION, back, degrees, forward, issueCommandsFor, left, limit, pseudoGauss, right, rotationWait, round, sd, translationWait, type, vertices;

  if (typeof process === "undefined" || process === null) {
    process = {
      argv: 'x x logo'
    };
  }

  left = right = back = forward = function() {};

  pseudoGauss = function() {
    var a, i, n;
    a = 0;
    n = 20;
    for (i = 1; 1 <= n ? i <= n : i >= n; 1 <= n ? i++ : i--) {
      a = a + Math.random();
    }
    return (a - n / 2) * Math.sqrt(12 / n);
  };

  round = function(x) {
    return Math.round(x * 100) / 100;
  };

  degrees = function(theta) {
    return theta * 180 / Math.PI;
  };

  limit = function(radians) {
    return radians - 2 * Math.PI * Math.round(radians / (2 * Math.PI));
  };

  issueCommandsFor = function(vertices, sd) {
    var dtheta, dx, dy, goleft, goright, r, theta, theta1, vertex, x, x1, y, y1, _i, _len, _ref, _ref2, _ref3, _ref4, _results;
    if (sd == null) sd = 0;
    _ref = vertices[0], x = _ref[0], y = _ref[1];
    theta = Math.PI / 2;
    _ref2 = vertices.slice(1, vertices.length + 1 || 9e9);
    _results = [];
    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
      vertex = _ref2[_i];
      x1 = vertex[0], y1 = vertex[1];
      _ref3 = [x1 - x, y1 - y], dx = _ref3[0], dy = _ref3[1];
      r = Math.sqrt(dx * dx + dy * dy);
      theta1 = Math.atan2(dy, dx);
      dtheta = limit(theta1 - theta);
      goleft = function(angle) {
        if (angle > 0.001) {
          theta = limit(theta + angle);
          return left(angle * (1 + pseudoGauss() * sd));
        }
      };
      goright = function(angle) {
        if (angle > 0.001) {
          theta = limit(theta - angle);
          return right(angle * (1 + pseudoGauss() * sd));
        }
      };
      if ((0 <= dtheta && dtheta <= Math.PI / 2)) {
        goleft(dtheta);
        forward(r * (1 + pseudoGauss() * sd));
      } else if ((Math.PI / 2 <= dtheta && dtheta < Math.PI)) {
        goright(Math.PI - dtheta);
        back(r * (1 + pseudoGauss() * sd));
      } else if ((-Math.PI / 2 <= dtheta && dtheta <= 0)) {
        goright(-dtheta);
        forward(r * (1 + pseudoGauss() * sd));
      } else if ((-Math.PI <= dtheta && dtheta < -Math.PI / 2)) {
        goleft(dtheta + Math.PI);
        back(r * (1 + pseudoGauss() * sd));
      } else {
        console.error("WHOOPS; dtheta = " + dtheta);
      }
      _results.push((_ref4 = [x1, y1], x = _ref4[0], y = _ref4[1], _ref4));
    }
    return _results;
  };

  vertices = [[0, 0], [1, 6], [4, 6], [1, 3], [2, 0], [4, 0], [5, 6], [9, 6], [6, 6], [5, 0], [9, 0], [10, 6], [9.5, 3], [12.5, 3], [13, 6], [12, 0], [13, 0], [16, 6], [17, 0], [18, 0], [19, 6], [22, 6], [19, 3], [20, 0], [22, 0], [23, 6], [25, 3], [22, 0]];

  type = process.argv[2];

  if (type === 'logo') {
    console.log("penup\nright 90\nback 250\nleft 90\npendown");
    if (process.argv[3] != null) sd = parseFloat(process.argv[3], 10);
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
    issueCommandsFor(vertices, sd);
  }

  if (type === 'm3pi') {
    console.log("#include \"mbed.h\"\n#include \"m3pi.h\"\n\nm3pi m3pi;\n\nint main() {\n\n    m3pi.locate(0,1);\n    m3pi.printf(\"LO World\");\n\n    wait (2.0);\n    ");
    HALF_SPEED_ROTATION_RATE = 720;
    ROTATION_SPEED_FRACTION = 0.1;
    ROTATION_RATE = 2 * HALF_SPEED_ROTATION_RATE * ROTATION_SPEED_FRACTION;
    HALF_SPEED_TRANSLATION_RATE = 18.5;
    TRANSLATION_SPEED_FRACTION = 0.1;
    TRANSLATION_RATE = 2 * HALF_SPEED_TRANSLATION_RATE * TRANSLATION_SPEED_FRACTION;
    rotationWait = function(theta) {
      return degrees(theta) / ROTATION_RATE;
    };
    translationWait = function(r) {
      return 2 * r / TRANSLATION_RATE;
    };
    left = function(theta) {
      console.log("    // left " + (round(degrees(theta))) + " degrees");
      console.log("    m3pi.left(" + ROTATION_SPEED_FRACTION + ");");
      console.log("    wait(" + (rotationWait(theta)) + ");");
      return console.log("");
    };
    right = function(theta) {
      console.log("    // right " + (round(degrees(theta))) + " degrees");
      console.log("    m3pi.right(" + ROTATION_SPEED_FRACTION + ");");
      console.log("    wait(" + (rotationWait(theta)) + ");");
      return console.log("");
    };
    back = function(r) {
      console.log("    // backwards " + (round(2 * r)) + " inches");
      console.log("    m3pi.backward(" + TRANSLATION_SPEED_FRACTION + ");");
      console.log("    wait(" + (translationWait(r)) + ");");
      return console.log("");
    };
    forward = function(r) {
      console.log("    // forwards " + (round(2 * r)) + " inches");
      console.log("    m3pi.forward(" + TRANSLATION_SPEED_FRACTION + ");");
      console.log("    wait(" + (translationWait(r)) + ");");
      return console.log("");
    };
    issueCommandsFor(vertices);
    console.log("    m3pi.stop();");
    console.log("}\n");
  }

}).call(this);
