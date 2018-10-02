function getTemp(bool) {
    var tempUS = Math.floor(Math.random() * 101) + 1;
    var tempUK = Math.floor(((tempUS - 32) * 5) / 9);
    if (bool === true) {
      x = tempUK + " degrees celcius";
    } else {
      x = tempUS + " degrees fahrenheit";
    }
    return x;
  }
  
  function getWeight(bool) {
    var weightUS = Math.floor(Math.random() * 201) + 100;
    var weightUK = Math.floor(weightUS * 0.0714286);
    if (bool === true) {
      x = weightUS + " pounds";
    } else {
      x = weightUK + " stone";
    }
    return x;
  }
  
  function getPlace(bool) {
    var placeUS = ["New York", "Los Angelas", "Chicago"];
    var placeUK = ["London", "Mancheser", "Liverpool"];
    var placeSelector = Math.floor(Math.random() * 3);
    if (bool === true) {
      x = placeUK[placeSelector];
    } else {
      x = placeUS[placeSelector];
    }
    return x;
  }
  
  function storyMaker(name, temp, weight, place) {
    var firstSentence1 = name + " who was " + weight + " went for a jog.";
    var firstSentence2 = name + " who was " + weight + " went for a swim.";
    var firstSentence3 = name + " who was " + weight + " went for a hike.";
    var firstSentenceArray = [firstSentence1, firstSentence2, firstSentence3];
    var secondSentence1 = " It seemed like it was cold in " + place + ".";
    var secondSentence2 = " It seemed like it was warm in " + place + ".";
    var secondSentence3 = " It seemed like it was hot in " + place + ".";
    var secondSentenceArray = [secondSentence1, secondSentence2, secondSentence3];
    var thirdSentence1 = "It was in fact " + temp + " outside.";
    var thirdSentence2 = "It was in fact " + temp + " outside.";
    var thirdSentence3 = "It was in fact " + temp + " outside.";
    var thirdSentenceArray = [thirdSentence1, thirdSentence2, thirdSentence3];
    var firstSentenceSelector = Math.floor(Math.random() * 3);
    var firstSentence = firstSentenceArray[firstSentenceSelector];
    var secondSentenceSelector = Math.floor(Math.random() * 3);
    var secondSentence = secondSentenceArray[secondSentenceSelector];
    var thirdSentenceSelector = Math.floor(Math.random() * 3);
    var thirdSentence = thirdSentenceArray[thirdSentenceSelector];
    var x = firstSentence + secondSentence + thirdSentence;
    return x;
  }