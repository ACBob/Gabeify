//function Run() //HACK HACK! I don't understand this script enough to do it in any other way.
//{
javascript: function GabeN(ratio, imageurl) {
  this.ratio = ratio;
  this.imageurl = imageurl
}

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
} //Give arrays a "Random Element" option.

var getGabeN = {
  init: function(myGabeN) {
    this.myGabeN = myGabeN
  },
  horizontal: function() {
    return this.myGabeN.filter(function(myGabeN) {
      return myGabeN.ratio === "horizontal"
    })
  },
  vertical: function() {
    return this.myGabeN.filter(function(myGabeN) {
      return myGabeN.ratio === "vertical"
    })
  },
  square: function() {
    return this.myGabeN.filter(function(myGabeN) {
      return myGabeN.ratio === "square"
    })
  }
};

function Randomize(images) {
  return Math.floor(Math.random() * images.length)
}

var myGabeN = [
new GabeN("horizontal", "http://i.imgur.com/uLMbKmj.jpg"),
new GabeN("horizontal", "http://i.imgur.com/5DXQ7tx.jpg"),
new GabeN("horizontal", "http://i.imgur.com/dldrXOf.jpg"),
new GabeN("horizontal", "http://i.imgur.com/8uH9TQb.jpg"),
new GabeN("horizontal", "http://i.imgur.com/7wU40jQ.jpg"),
new GabeN("horizontal", "http://i.imgur.com/ajxvdWo.jpg"),
new GabeN("vertical", "http://i.imgur.com/aRCPVmX.jpg"),
new GabeN("vertical", "http://i.imgur.com/FU2unZO.jpg"),
new GabeN("vertical", "http://i.imgur.com/3brJDRx.jpg"),
new GabeN("vertical", "http://i.imgur.com/j9KOnWm.jpg"),
new GabeN("square", "http://i.imgur.com/sWCcEwV.jpg"),
new GabeN("square", "http://i.imgur.com/ecbdpfL.jpg"),
new GabeN("square", "http://i.imgur.com/lDkMf5P.jpg"),
new GabeN("square", "http://i.imgur.com/qkcP48v.jpg")];

var GabenTexts = [
"GabeN",
"gAbEn",
"Gabe Newell",
"All you need is Gaben.",
"Gabe newell.",
"Gabeity Gabe.",
"Gabe Gabe Gabe",
"Gabe is love, Gabe is life.",
"A little bit of GabeN in my life",
"A little bit of GabeN by my side",
"A little bit of GabeN is all I need",
"A little bit of GabeN is what I see",
"A little bit of GabeN in the sun",
"(GabeN #5)",
"Gaben is our god, truly.",
"GAABENN"
]

function imageRatio(image) {
  var proportion = image.height / image.width;
  if (proportion > 1) return "vertical";
  else if (proportion === 1) return "square";
  else if (proportion < 1) return "horizontal"
  }(function(document) {
    getGabeN.init(myGabeN);
    var images = document.getElementsByTagName("img");
    var paragraphs = document.querySelectorAll("p,h1,h2,h3,h4,h5,h6,span");
    imgslength = images.length;
    pslength = paragraphs.length;
    //console.log(pslength);
    for (var i = 0; i < imgslength; i++) {
      var ratio = imageRatio(images[i]);
      //console.log("Image Change");
      if (ratio === "horizontal") {
        var number = Randomize(getGabeN.horizontal());
        var img = getGabeN.horizontal()[number];
        images[i].src = img.imageurl
      } else if (ratio === "square") {
        var number = Randomize(getGabeN.square());
        var img = getGabeN.square()[number];
        images[i].src = img.imageurl
      } else if (ratio === "vertical") {
        var number = Randomize(getGabeN.vertical());
        var img = getGabeN.vertical()[number];
        images[i].src = img.imageurl
      }
    }
    for (var i = 0; i < pslength; i++)
    {
        //console.log(paragraphs[i]);
        paragraphs[i].innerHTML = GabenTexts.randomElement();
        //console.log("Paragraph Change");
    }
  })(document);
//}