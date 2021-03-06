window.onload = function () {

    var introPage = document.getElementById('intro_page');
    var introButton = document.getElementById('get_started');
    var racePage = document.getElementById('race_page');
    var racePic = document.getElementById('racePic');
    var classPage = document.getElementById('class_page');
    var race2ClassButton = document.getElementById('race2Class');
    var class2RaceButton = document.getElementById('class2Race');
    var class2NextButton = document.getElementById('class2Next')


    introButton.addEventListener('click', introChange, false);
    introButton.addEventListener('click', nameSet, false);
    race2ClassButton.addEventListener('click', race2classChange, false);
    race2ClassButton.addEventListener('click', raceSet, false);
    class2RaceButton.addEventListener('click', class2raceChange, false);
    class2NextButton.addEventListener('click', class2nextChange, false);
    class2NextButton.addEventListener('click', classSet, false);


    function introChange() {
        if (document.getElementById('charNameInput').value != '') {
            introPage.style.display = 'none';
            racePage.style.display = 'block';
            classPage.style.display = 'none';
            next.style.display = 'none';
        }
    };

    function race2classChange() {
        if (raceCheck()) {
            introPage.style.display = 'none';
            racePage.style.display = 'none';
            classPage.style.display = 'block';
            next.style.display = 'none';
        }
    };

    function class2raceChange() {
        introPage.style.display = 'none';
        racePage.style.display = 'block';
        classPage.style.display = 'none';
        next.style.display = 'none';
    }

    function class2nextChange() {
        if (classCheck()) {
            introPage.style.display = 'none';
            racePage.style.display = 'none';
            classPage.style.display = 'none';
            next.style.display = 'block';
        }
    }
};


class character {
    constructor() {
        this.charName = "None";

        this.charRace = "None";
        this.charClass = "None";
        this.charAlign = "None";

        this.charStr = 0;
        this.charDex = 0;
        this.charCon = 0;
        this.charInt = 0;
        this.charWis = 0;
        this.charChr = 0;

        this.HP = 0;

        this.inspiration = 0;
        this.proficiency = 0;

        this.armorClass = 0;
        this.initiative = 0;
        this.speed = 0;

        this.perception = 0;

        this.acrobatics = 0;
        this.animalHandling = 0;
        this.arcana = 0;
        this.athletics = 0;
        this.deception = 0;
        this.history = 0;
        this.insight = 0;
        this.intimidation = 0;
        this.investigation = 0;
        this.medicine = 0;
        this.nature = 0;
        this.perception = 0;
        this.performance = 0;
        this.persuasion = 0;
        this.religion = 0;
        this.sleightOfHand = 0;
        this.stealth = 0;
        this.survival = 0;

        this.weapons = ["none"];
        this.spells = ["none"];

        this.languages = ["none"];
        this.equipment = ["none"];

        this.feats = ["none"];
    }



}

/* Change the picture depending on race selection */
function ChangeRaceImage(image) {
    racePic.src = ('images/' + image + '.png');
}

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

/* Takes the user's name input and sets the object's name field */
function nameSet() {
    var nameText = "Name: ";
    var charName = document.getElementById('charNameInput').value;
    newChar.charName = charName;
    document.getElementById("sideName").innerHTML = nameText.concat(charName);
}

/* Takes the user's race selection and sets the object's race field */
function raceSet() {
    var raceText = "Race: ";
    var charRace = document.querySelector('input[name = "race"]:checked').value;
    newChar.charRace = charRace;
    document.getElementById("sideRace").innerHTML = raceText.concat(charRace);
}

/* Takes the user's class selection and sets the object's class field */
function classSet() {
    var classText = "Class: ";
    var charClass = document.querySelector('input[name = "class"]:checked').value;
    newChar.charClass = charClass;
    document.getElementById("sideClass").innerHTML = classText.concat(charClass);
}

/* Checks if a user has selected a race, otherwise won't let the user continue */
function raceCheck() {
    var raceForm = document.getElementById('racebuttons');

    for (var i = 0; i < raceForm.length; i++) {
        if (raceForm[i].checked) {
            return true;
        }
    }
    return false;
}

/* Checks if a user has selected a class, otherwise won't let the user continue */
function classCheck() {
    var classForm = document.getElementById('classbuttons');

    for (var i = 0; i < classForm.length; i++) {
        if (classForm[i].checked) {
            return true;
        }
    }
    return false;
}

/* Create the character for the user*/
const newChar = new character;
