//Global variable.
let populationMap;

//Monitor the page, when the "DOM" is loaded, invoke the makeMap function.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    populationMap.makeMap();
});

populationMap = {

    //State populations by census year.
    populations: {

        alabama: {
            name: "Alabama",
            c1980: 3891000,
            c1990: 4040587,
            c2000: 4447100,
            c2010: 4779736
        },
        alaska: {
            name: "Alaska",
            c1980: 400000,
            c1990: 550043,
            c2000: 626932,
            c2010: 710231
        },
        arizona: {
            name: "Arizona",
            c1980: 2718000,
            c1990: 3665228,
            c2000: 5130632,
            c2010: 6392017
        },
        arkansas: {
            name: "Arkansas",
            c1980: 2285000,
            c1990: 2350725,
            c2000: 2673400,
            c2010: 2915918
        },
        california: {
            name: "California",
            c1980: 23662809,
            c1990: 29760021,
            c2000: 33871648,
            c2010: 37253956
        },
        colorado: {
            name: "Colorado",
            c1980: 2890000,
            c1990: 3294394,
            c2000: 4301261,
            c2010: 5029196
        },
        connecticut: {
            name: "Connecticut",
            c1980: 3107000,
            c1990: 3287116,
            c2000: 3405565,
            c2010: 3574097
        },
        delaware: {
            name: "Delaware",
            c1980: 596000,
            c1990: 666168,
            c2000: 783600,
            c2010: 897934
        },
        districtofcolumbia: {
            name: "Washington, DC",
            c1980: 638000,
            c1990: 606900,
            c2000: 572059,
            c2010: 601723
        },
        florida: {
            name: "Florida",
            c1980: 9739000,
            c1990: 12937926,
            c2000: 15982378,
            c2010: 18801310
        },
        georgia: {
            name: "Georgia",
            c1980: 5464000,
            c1990: 6478216,
            c2000: 8186453,
            c2010: 9687653
        },
        hawaii: {
            name: "Hawaii",
            c1980: 985000,
            c1990: 1108229,
            c2000: 1211537,
            c2010: 1360301
        },
        idaho: {
            name: "Idaho",
            c1980: 945000,
            c1990: 1006749,
            c2000: 1293953,
            c2010: 1567582
        },
        illinois: {
            name: "Illinois",
            c1980: 11419000,
            c1990: 11430602,
            c2000: 12419293,
            c2010: 12830632
        },
        indiana: {
            name: "Indiana",
            c1980: 5491000,
            c1990: 5544159,
            c2000: 6080485,
            c2010: 6483802
        },
        iowa: {
            name: "Iowa",
            c1980: 2914000,
            c1990: 2776755,
            c2000: 2926324,
            c2010: 3046355
        },
        kansas: {
            name: "Kansas",
            c1980: 2363000,
            c1990: 2477574,
            c2000: 2688418,
            c2010: 2853118
        },
        kentucky: {
            name: "Kentucky",
            c1980: 3661000,
            c1990: 3685296,
            c2000: 4041769,
            c2010: 4339367
        },
        louisiana: {
            name: "Louisiana",
            c1980: 4203000,
            c1990: 4219973,
            c2000: 4468976,
            c2010: 4533372
        },
        maine: {
            name: "Maine",
            c1980: 1125000,
            c1990: 1227928,
            c2000: 1274923,
            c2010: 1328361
        },
        maryland: {
            name: "Maryland",
            c1980: 4216000,
            c1990: 4781468,
            c2000: 5296486,
            c2010: 5773552
        },
        massachusetts: {
            name: "Massachusetts",
            c1980: 5481890,
            c1990: 6016425,
            c2000: 6349097,
            c2010: 6547629
        },
        michigan: {
            name: "Michigan",
            c1980: 9259000,
            c1990: 9295297,
            c2000: 9938444,
            c2010: 9883640
        },
        minnesota: {
            name: "Minnesota",
            c1980: 4070578,
            c1990: 4375099,
            c2000: 4919479,
            c2010: 5303925
        },
        mississippi: {
            name: "Mississippi",
            c1980: 2520000,
            c1990: 2573216,
            c2000: 2844658,
            c2010: 2967297
        },
        missouri: {
            name: "Missouri",
            c1980: 4917000,
            c1990: 5117073,
            c2000: 5595211,
            c2010: 5988927
        },
        montana: {
            name: "Montana",
            c1980: 787000,
            c1990: 799065,
            c2000: 902195,
            c2010: 989415
        },
        nebraska: {
            name: "Nebraska",
            c1980: 1570000,
            c1990: 1578385,
            c2000: 1711263,
            c2010: 1826341
        },
        nevada: {
            name: "Nevada",
            c1980: 799000,
            c1990: 1201833,
            c2000: 1998257,
            c2010: 2700551
        },
        newhampshire: {
            name: "New Hampshire",
            c1980: 921000,
            c1990: 1109252,
            c2000: 1235786,
            c2010: 1316470
        },
        newjersey: {
            name: "New Jersey",
            c1980: 7364000,
            c1990: 7730188,
            c2000: 8414350,
            c2010: 8791894
        },
        newmexico: {
            name: "New Mexico",
            c1980: 1299000,
            c1990: 1515069,
            c2000: 1819046,
            c2010: 2059179
        },
        newyork: {
            name: "New York",
            c1980: 17557000,
            c1990: 17990455,
            c2000: 18976457,
            c2010: 19378102
        },
        northcarolina: {
            name: "North Carolina",
            c1980: 5874000,
            c1990: 6628637,
            c2000: 8049313,
            c2010: 9535483
        },
        northdakota: {
            name: "North Dakota",
            c1980: 654000,
            c1990: 638800,
            c2000: 642200,
            c2010: 672591
        },
        ohio: {
            name: "Ohio",
            c1980: 10797000,
            c1990: 10847115,
            c2000: 11353140,
            c2010: 11536504
        },
        oklahoma: {
            name: "Oklahoma",
            c1980: 3026000,
            c1990: 3145585,
            c2000: 3450654,
            c2010: 3751351
        },
        oregon: {
            name: "Oregon",
            c1980: 2632000,
            c1990: 2842321,
            c2000: 3421399,
            c2010: 3831074
        },
        pennsylvania: {
            name: "Pennsylvania",
            c1980: 11867000,
            c1990: 11881643,
            c2000: 12281054,
            c2010: 12702379
        },
        rhodeisland: {
            name: "Rhode Island",
            c1980: 948000,
            c1990: 1003464,
            c2000: 1048319,
            c2010: 1052567
        },
        southcarolina: {
            name: "South Carolina",
            c1980: 3119000,
            c1990: 3486703,
            c2000: 4012012,
            c2010: 4625364
        },
        southdakota: {
            name: "South Dakota",
            c1980: 690000,
            c1990: 696004,
            c2000: 754844,
            c2010: 814180
        },
        tennessee: {
            name: "Tennessee",
            c1980: 4591000,
            c1990: 4877185,
            c2000: 5689283,
            c2010: 6346105
        },
        texas: {
            name: "Texas",
            c1980: 14228000,
            c1990: 16986510,
            c2000: 20851820,
            c2010: 25145561
        },
        utah: {
            name: "Utah",
            c1980: 1461000,
            c1990: 1722850,
            c2000: 2233169,
            c2010: 2763885
        },
        vermont: {
            name: "Vermont",
            c1980: 512000,
            c1990: 562758,
            c2000: 608827,
            c2010: 625741
        },
        virginia: {
            name: "Virginia",
            c1980: 5346000,
            c1990: 6187358,
            c2000: 7078515,
            c2010: 8001024
        },
        washington: {
            name: "Washington",
            c1980: 4130000,
            c1990: 4866692,
            c2000: 5894121,
            c2010: 6724540
        },
        westvirginia: {
            name: "West Virginia",
            c1980: 1950000,
            c1990: 1793477,
            c2000: 1808344,
            c2010: 1852994
        },
        wisconsin: {
            name: "Wisconsin",
            c1980: 4706000,
            c1990: 4891769,
            c2000: 5363675,
            c2010: 5686986
        },
        wyoming: {
            name: "Wyoming",
            c1980: 471000,
            c1990: 453588,
            c2000: 493782,
            c2010: 563626
        }
    },

    makeMap: function () {
        "use strict";

        //Retrieve the map.
        const blankMap = document.getElementById("outlines");

        //When user mouses over state, make background color lighter blue.
        function mouseOver(event) {
            const targetId = event.target.id;
            const getTarget = document.getElementById(targetId);
            const currentFill = getTarget.getAttribute("fill");

            if (currentFill === "#039BE5") {
                getTarget.setAttribute("fill", "#03A9F4");
            }
        }

        //When user "mouses off" state, return background color to darker blue.
        function mouseOut(event) {
            const targetId = event.target.id;
            const getTarget = document.getElementById(targetId);
            const currentFill = getTarget.getAttribute("fill");

            if (currentFill === "#03A9F4") {
                getTarget.setAttribute("fill", "#039BE5");
            }
        }

        //When user clicks on a state...
        function mouseClick(event) {

            //Retrieve all states.
            const states = document.getElementsByClassName("states");

            //Modify the nodelist to real array.
            const statesArray = Array.from(states);

            //Reset each state's fill to the default color.
            statesArray.forEach(function (st) {
                st.setAttribute("fill", "#039BE5");
            });

            //Modify the target state's fill to the highlight color.
            const targetId = event.target.id;
            document.getElementById(targetId).setAttribute("fill", "#FF6F60");

            //Retrieve the "results" id and spans.
            const resultState = document.getElementById("result-state");
            const result1980 = document.getElementById("result-1980");
            const result1990 = document.getElementById("result-1990");
            const result2000 = document.getElementById("result-2000");
            const result2010 = document.getElementById("result-2010");

            //Retrieve the state from the "populations" object.
            const stateArray = populationMap.populations[targetId];

            //Assign objects from target state's object to its span
            //toLocalString() adds commas to numbers > three digits
            resultState.textContent = stateArray.name;
            result1980.textContent = stateArray.c1980.toLocaleString();
            result1990.textContent = stateArray.c1990.toLocaleString();
            result2000.textContent = stateArray.c2000.toLocaleString();
            result2010.textContent = stateArray.c2010.toLocaleString();

        } //close mouseClick function

        //Add an event listener. When user mouses-over, mouses-out, clicks...
        //Functions are above. They must be defined before invoked.
        blankMap.addEventListener("mouseover", mouseOver);
        blankMap.addEventListener("mouseout", mouseOut);
        blankMap.addEventListener("click", mouseClick);

    } //close makeMap function
    
}; //close populationMap