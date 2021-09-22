
const Jimp = require("jimp");

const name = "src/icon.png"
const target = "android/app/src/main/res"


//mipmap-hdpi
Jimp.read(name, (err, icon) => {
  if (err) throw err;
  icon.resize(72, 72).write(target + "/mipmap-hdpi/ic_launcher.png");
  icon.circle().write(target + "/mipmap-hdpi/ic_launcher_round.png");
});

//mipmap-mdpi
Jimp.read(name, (err, icon) => {
  if (err) throw err;
  icon.resize(48, 48).write(target + "/mipmap-mdpi/ic_launcher.png");

  icon.circle().write(target + "/mipmap-mdpi/ic_launcher_round.png");
});

//mipmap-xhdpi
Jimp.read(name, (err, icon) => {
  if (err) throw err;
  icon.resize(96, 96).write(target + "/mipmap-xhdpi/ic_launcher.png");

  icon.circle().write(target + "/mipmap-xhdpi/ic_launcher_round.png");
});

//mipmap-xxhdpi
Jimp.read(name, (err, icon) => {
  if (err) throw err;
  icon.resize(144, 144).write(target + "/mipmap-xxhdpi/ic_launcher.png");
  icon.circle().write(target + "/mipmap-xxhdpi/ic_launcher_round.png");
});

//mipmap-xxxhdpi
Jimp.read(name, (err, icon) => {
  if (err) throw err;
  icon.resize(192, 192).write(target + "/mipmap-xxxhdpi/ic_launcher.png");

  icon.circle().write(target + "/mipmap-xxxhdpi/ic_launcher_round.png");
});



// FOREGROUND

//mipmap-hdpi
Jimp.read(name, (err, icon) => {
  if (err) throw err;
  icon.resize(162, 162).write(target + "/mipmap-hdpi/ic_launcher_foreground.png");
});

//mipmap-mdpi
Jimp.read(name, (err, icon) => {
  if (err) throw err;
  icon.resize(108, 108).write(target + "/mipmap-mdpi/ic_launcher_foreground.png");
});

//mipmap-xhdpi
Jimp.read(name, (err, icon) => {
  if (err) throw err;
  icon.resize(216, 216).write(target + "/mipmap-xhdpi/ic_launcher_foreground.png");
});

//mipmap-xxhdpi
Jimp.read(name, (err, icon) => {
  if (err) throw err;
  icon.resize(324, 324).write(target + "/mipmap-xxhdpi/ic_launcher_foreground.png");
});

//mipmap-xxxhdpi
Jimp.read(name, (err, icon) => {
  if (err) throw err;
  icon.resize(432, 432).write(target + "/mipmap-xxxhdpi/ic_launcher_foreground.png");
});

