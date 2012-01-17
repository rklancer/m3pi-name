# Usage
# `coffee src/commands.coffee logo > richard.logo`
# `coffee src/commands.coffee m3pi > main.cpp`

left = right = back = forward = ->

pseudoGauss = ->
  a = 0
  n = 20
  a = a + Math.random() for i in [1..n]
  (a - n/2) / Math.sqrt(n)


round = (x) ->
  Math.round(x*100)/100

degrees = (theta) ->
  theta * 180 / Math.PI
  
# keep angles within (-PI, PI]
limit = (radians) ->
  radians - 2*Math.PI * Math.round(radians / (2*Math.PI))

issueCommandsFor = (vertices) ->
  # where am i?
  [x, y] = vertices[0]

  # in which direction am i pointed?
  theta = Math.PI/2

  for vertex in vertices[1..vertices.length]
    [x1, y1] = vertex
    [dx, dy] = [x1-x, y1-y]
    r = Math.sqrt dx*dx+dy*dy
  
    theta1 = Math.atan2 dy, dx
    factor = 1 + pseudoGauss()/10
    dtheta = limit(theta1 - theta) # -PI < dtheta < PI
  
    # helpers that also update theta
    goleft = (angle) ->
      if angle > 0.001
        theta = limit(theta + angle)
        left(angle * (1+pseudoGauss()/3))
  
    goright = (angle) ->
      if angle > 0.001
        theta = limit(theta - angle)
        right(angle * (1+pseudoGauss()/3))

    if 0 <= dtheta <= Math.PI/2 
      # turn left, go forward
      goleft dtheta
      forward(r * (1+pseudoGauss()/3))

    else if Math.PI/2 <= dtheta < Math.PI
      # turn right, go backward
      goright Math.PI - dtheta
      back(r * (1+pseudoGauss()/3))
              
    else if -Math.PI/2 <= dtheta <= 0
      # turn right, go forward
      goright -dtheta
      forward(r * (1+pseudoGauss()/3))
  
    else if -Math.PI <= dtheta < -Math.PI/2
      # turn left, go backward
      goleft dtheta + Math.PI
      back(r * (1+pseudoGauss()/3))
  
    else
      console.error "WHOOPS; dtheta = #{dtheta}"

    [x, y] = [x1, y1]


vertices = [
  [   0, 0]
  [   1, 6]
  [   4, 6]
  [   1, 3]
  [   2, 0]
  [   4, 0]
  [   5, 6]
  [   9, 6]
  [   6, 6]
  [   5, 0]
  [   9, 0]
  [  10, 6]
  [ 9.5, 3]
  [12.5, 3]
  [  13, 6]
  [  12, 0]
  [  13, 0]
  [  16, 6]
  [  17, 0]
  [  18, 0]
  [  19, 6]
  [  22, 6]
  [  19, 3]
  [  20, 0]
  [  22, 0]
  [  23, 6]
  [  25, 3]
  [  22, 0]
]

type = process.argv[2]

if type == 'logo'
  # try this out at http://www.amberfrog.com/logo/
  console.log """
    penup
    right 90
    back 250
    left 90
    pendown
  """

  left = (theta) ->
    console.log "left #{round(degrees(theta))}"

  right = (theta) -> 
    console.log "right #{round(degrees(theta))}"

  back = (r) ->
    console.log "back #{round r*20}"

  forward = (r) ->
    console.log "forward #{round r*20}"

  issueCommandsFor vertices
  

if type == 'm3pi'
  console.log """
    #include "mbed.h"
    #include "m3pi.h"

    m3pi m3pi;

    int main() {

        m3pi.locate(0,1);
        m3pi.printf("LO World");

        wait (2.0);
        
  """
  HALF_SPEED_ROTATION_RATE = 720 # degrees/sec
  ROTATION_SPEED_FRACTION  = 0.1  # as a fraction of "full speed"
  ROTATION_RATE = 2 * HALF_SPEED_ROTATION_RATE * ROTATION_SPEED_FRACTION  # degrees/sec

  HALF_SPEED_TRANSLATION_RATE = 18.5 # inches/sec
  TRANSLATION_SPEED_FRACTION  = 0.1  # as a fraction of "full speed"
  TRANSLATION_RATE = 2 * HALF_SPEED_TRANSLATION_RATE * TRANSLATION_SPEED_FRACTION # inches/sec

  rotationWait = (theta) ->
    degrees(theta) / ROTATION_RATE    # degrees / (degrees/sec) -> sec

  translationWait = (r) ->
    # 1 unit in r = 2 inches...
    2*r / TRANSLATION_RATE            # inches / (inches/sec) -> sec

  left = (theta) ->
    console.log "    // left #{round degrees theta} degrees"
    console.log "    m3pi.left(#{ROTATION_SPEED_FRACTION});"
    console.log "    wait(#{rotationWait(theta)});"
    console.log ""

  right = (theta) ->
    console.log "    // right #{round degrees theta} degrees"   
    console.log "    m3pi.right(#{ROTATION_SPEED_FRACTION});"
    console.log "    wait(#{rotationWait(theta)});"
    console.log ""

  back = (r) ->
    console.log "    // backwards #{round(2*r)} inches"
    console.log "    m3pi.backward(#{TRANSLATION_SPEED_FRACTION});"
    console.log "    wait(#{translationWait(r)});"
    console.log ""    

  forward = (r) ->
    console.log "    // forwards #{round(2*r)} inches"    
    console.log "    m3pi.forward(#{TRANSLATION_SPEED_FRACTION});"
    console.log "    wait(#{translationWait(r)});"
    console.log ""

  issueCommandsFor vertices

  console.log "    m3pi.stop();"
  console.log "}\n"