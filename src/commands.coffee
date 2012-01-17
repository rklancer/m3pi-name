# `coffee src/commands.coffee` or `node lib/commands.js`

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
  console.log "left #{round(degrees(theta))}"
  
right = (theta) -> 
  console.log "right #{round(degrees(theta))}"
  
back = (r) ->
  console.log "back #{round r*20}" 

forward = (r) ->
  console.log "forward #{round r*20}"
  
round = (x) ->
  Math.round(x*100)/100
  
degrees = (theta) ->
  theta * 180 / Math.PI

# where am i?
# in which direction am i pointed?

[x, y] = vertices[0]
theta = Math.PI/2

for vertex in vertices[1..vertices.length]
  [x1, y1] = vertex
  [dx, dy] = [x1-x, y1-y]
  r = Math.sqrt dx*dx+dy*dy
  
  theta1 = Math.atan2 dy, dx
  dtheta = theta1 - theta
  if dtheta >  Math.PI then dtheta = dtheta - Math.PI
  if dtheta < -Math.PI then dtheta = dtheta + Math.PI
  
  turn = if dtheta > 0 then () -> left(dtheta) else () -> right(-dtheta)
  
  if Math.abs(dtheta - Math.PI) < 0.001
    back r
  else
    turn()
    forward r
  
  theta = theta1
  [x, y] = [x1, y1]
