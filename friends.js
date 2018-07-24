console.log("js loaded")

$(document).ready(function () {
    let friends = [
        {
            "name": "Bugs",
            "photo": "https://vignette.wikia.nocookie.net/characters/images/1/15/Bugs.jpg/revision/latest?cb=20110224072532",
            "scores": [
                "5",
                "1",
                "4",
                "4",
                "5",
                "1",
                "2",
                "5",
                "4",
                "1"
            ]
        },

        {
            "name": "Elmer",
            "photo": "https://www.wbkidsgo.com/Portals/4/Images/Content/Characters/Elmer%20Fudd/fudd-body.png",
            "scores": [
                "4",
                "2",
                "5",
                "1",
                "3",
                "2",
                "2",
                "1",
                "3",
                "2"

            ]

        },

        {
            "name": "Daffy",
            "photo": "data:image/png;base64,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",
            "scores": [
                "5",
                "2",
                "2",
                "2",
                "4",
                "1",
                "3",
                "2",
                "5",
                "5"
            ]
        },

        {
            "name": "Porky",
            "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0biDSKDkkuRD5Ex4nX8sBl9-HQVsMPVEusKmyzugZsGnkUOGb",
            "scores": [
                "3",
                "3",
                "4",
                "2",
                "2",
                "1",
                "3",
                "2",
                "2",
                "3"
            ]
        },

        {
            "name": "Foghorn",
            "photo": "data:image/png;base64,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",
            "scores": [
                "4",
                "3",
                "4",
                "1",
                "5",
                "2",
                "5",
                "3",
                "1",
                "4"
            ]
        }
    ]

    app.get("/api/friends", function(req, res) {
        for(var i = 0; i<friends.length; i++) {
        return res.json(friends[i]);
    }
      });

    //Values of existing friends:
    for(var i = 0; i<friends.length; i++) {
        let friendsValues = friends[i].scores;
        console.log("These are the friendsValues: " + friendsValues);
    }
    

   
//Array for just the scores from user:
    var inputValues = [
        $('#q1').val(),
        $('#q2').val(),
        $('#q3').val(),
        $('#q4').val(),
        $('#q5').val(),
        $('#q6').val(),
        $('#q7').val(),
        $('#q8').val(),
        $('#q9').val(),
        $('#q10').val()
    ]
 console.log("These are the inputValues: " + inputValues);

//friendsValues: scores of existing friends
//inputValues: scores of new input

//find the difference between the scores:
function difference(inputValues, friendsValues) {
    let diffValues = Math.abs(inputValues - friendsValues); 
    return diffValues;
}
console.log("This is the difference bewtween the inputValues and the friends values: " + difference);
//hopefully this is five different arrays? Or need to create empty array to push the results into?

//now add the numbers in the array:
let sumValues = diffValues.reduce((a, b) => a + b, 0)
console.log(sumValues); 
// hopefully this is an array of 5 numbers??

//compare the numbers, find the smallest value in the array.
let index = 0;
let value = sumValues[0];
for (let i = 1; i < sumValues.length; i++) {
  if (sumValues[i] < value) {
    value = sumValues[i];
    index = i;
  }
}
console.log("this is the value: " + value + " and this is the index: " + index);

// index is the closest match to the user, so take that object out of the friends array.

console.log(friends[index]);

//attach that to the modal box
$("#match").append(friends[index])

});