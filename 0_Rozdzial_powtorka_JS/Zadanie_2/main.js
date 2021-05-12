const palidrom = "kajak";
const palidrom2 = "A to kawa kota";
const palidrom3 = "Ala ma kota";

function checkIsPalidrom(palidrom) {
    let palidromToLower = palidrom.toLowerCase();
    let palidromFiltredTab = [...palidromToLower].filter(el => el !== " ");
    let palidromFiltred = palidromFiltredTab.join("");
    let reverse = palidromFiltredTab.reverse().join("");
    console.log(palidromFiltred, reverse);
    if (palidromFiltred === reverse) {
        console.log(true);
        return true;
    }
    else {
        console.log(false);
        return false;
    }
}

checkIsPalidrom(palidrom);
checkIsPalidrom(palidrom2);
checkIsPalidrom(palidrom3);