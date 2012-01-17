# `coffee src/commands.coffee` or `node lib/commands.js`

console.log """
  penup
  right 90
  back 250
  left 90
  pendown
"""

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

left = (theta) ->
  console.log "left #{round(degrees(theta))}" if Math.abs(theta) > 0.01
  
right = (theta) -> 
  console.log "right #{round(degrees(theta))}" if Math.abs(theta) > 0.01
  
back = (r) ->
  console.log "back #{round r*20}" if Math.abs(r) > 0.01

forward = (r) ->
  console.log "forward #{round r*20}" if Math.abs(r) > 0.01
  
round = (x) ->
  Math.round(x*100)/100
  
degrees = (theta) ->
  theta * 180 / Math.PI

# where am i?
# in which direction am i pointed?

[x, y] = vertices[0]
theta = Math.PI/2

limit = (radians) ->
  radians - 2*Math.PI * Math.round(radians / (2*Math.PI))
    
for vertex in vertices[1..vertices.length]
  [x1, y1] = vertex
  [dx, dy] = [x1-x, y1-y]
  r = Math.sqrt dx*dx+dy*dy
  
  theta1 = Math.atan2 dy, dx
  dtheta = limit(theta1 - theta) # -PI < dtheta < PI
  
  # helpers that also update theta
  goleft = (angle) ->
    left angle
    theta = limit(theta + angle)
  
  goright = (angle) ->
    right angle
    theta = limit(theta - angle)

  if 0 <= dtheta <= Math.PI/2 
    # turn left, go forward
    goleft dtheta
    forward r

  else if Math.PI/2 <= dtheta < Math.PI
    # turn right, go backward
    goright Math.PI - dtheta
    back r
              
  else if -Math.PI/2 <= dtheta <= 0
    # turn right, go forward
    goright -dtheta
    forward r
  
  else if -Math.PI <= dtheta < -Math.PI/2
    # turn left, go backward
    goleft dtheta + Math.PI
    back r
  
  else
    console.error "WHOOPS; dtheta = #{dtheta}"

  [x, y] = [x1, y1]
