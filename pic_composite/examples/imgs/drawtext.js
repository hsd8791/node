var gm = require('gm')
  , dir = __dirname + '/imgs'

gm(dir + "/original.jpg")
  //.crop(140,100)
  .background("#fff")
 // .extent(340,300)
  .stroke("#cccccc")
  .gravity('Center')
//.drawCircle(10, 10, 20, 10)
.font("Arial.ttf")
 .font( __dirname + '/fonts/consola.ttf')
//.fill('#cccccc')
.fontSize(116)
.drawText(0, 0, "GMagick!")
.write(dir+"/drawing1.png", function (err) {
  if (!err) console.log('done');
  console.log(err)
});
