
var globalPlayer = null;

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function setup(){
    //W3Schools code source
    document.getElementById('bet').style.visibility="Hidden";
    let text;
    let person = prompt("Please enter your buyin amount:", "0");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
        window.location.href = "../HTML/home.html";
    } else {
        text = person;
    }
    document.getElementById("moneyLeft").innerHTML = "Money Left: "+text;
    globalPlayer=new Player('Ted',parseInt(text),"../image/ted.jpg");
    //document.getElementById("profPic").src="../image/ted.jpg";
}

//CASINO----------------------------------------
function Casino()
{

}

//BLACKJACK------------------------------------------
class BlackJack
{
    constructor(){
        this.deck = new Deck();
        //dealer
        this.dealer = new Dealer();
        //players
        this.players = [];

        //hands
        pHand = new Hand();
        dHand = new Hand();
        this.hands = [pHand, dHand];
    }

    addPlayer(p) {
        players.append(p);
    }

    play() {
        //play a game of blackjack
        this.deck.shuffle();

        //ask for user bets (open command interface)

        //make hands?




    }

}

//CARD
class Card
{
    constructor(v, suit, id, imgname){
        this.title = v;
        this.suit = suit;
        this.id = id;
        this.inDeck = false;
        this.imgname = imgname;

        if(v == "ACE")
        {
          this.number = 11;
        }
        if(v == "TWO")
        {
          this.number = 2;
        }
        if(v == "THREE")
        {
          this.number = 3;
        }
        if(v == "FOUR")
        {
          this.number = 4;
        }
        if(v == "FIVE")
        {
          this.number = 5;
        }
        if(v == "SIX")
        {
          this.number = 6;
        }
        if(v == "SEVEN")
        {
          this.number = 7;
        }
        if(v == "EIGHT")
        {
          this.number = 8;
        }
        if(v == "NINE")
        {
          this.number = 9;
        }
        if(v == "TEN")
        {
          this.number = 10;
        }
        if(v == "JACK")
        {
          this.number = 10;
        }
        if(v == "QUEEN")
        {
          this.number = 10;
        }
        if(v == "KING")
        {
          this.number = 10;
        }
    }

    getTitle(){
        return this.title;
    }

    getImg(){
        return this.imgname;
    }


};
//DECK------------------------------------------
class Deck
{
    constructor(){
        this.shuffledDeck = [];
        this.allCards = [];
        this.allCards.push(new Card("ACE","Diamond",0,"../image/acediamond.PNG"));
        this.allCards.push(new Card("ACE","Club",1,"../image/aceclub.PNG"));
        this.allCards.push(new Card("ACE","Heart",2,"../image/aceheart.PNG"));
        this.allCards.push(new Card("ACE","Spade",3,"../image/acespade.PNG"));
        this.allCards.push(new Card("ACE","Diamond",4,"../image/acediamond.PNG"));
        this.allCards.push(new Card("ACE","Club",5,"../image/aceclub.PNG"));
        this.allCards.push(new Card("ACE","Heart",6,"../image/aceheart.PNG"));
        this.allCards.push(new Card("ACE","Spade",7,"../image/acespade.PNG"));
        this.allCards.push(new Card("TWO","Diamond",8,"../image/twodiamond.PNG"));
        this.allCards.push(new Card("TWO","Club",9,"../image/twoclub.PNG"));
        this.allCards.push(new Card("TWO","Heart",10,"../image/twoheart.PNG"));
        this.allCards.push(new Card("TWO","Spade",11,"../image/twospade.PNG"));
        this.allCards.push(new Card("TWO","Diamond",12,"../image/twodiamond.PNG"));
        this.allCards.push(new Card("TWO","Club",13,"../image/twoclub.PNG"));
        this.allCards.push(new Card("TWO","Heart",14,"../image/twoheart.PNG"));
        this.allCards.push(new Card("TWO","Spade",15,"../image/twospade.PNG"));
        this.allCards.push(new Card("THREE","Diamond",16,"../image/threediamond.PNG"));
        this.allCards.push(new Card("THREE","Club",17,"../image/threeclub.PNG"));
        this.allCards.push(new Card("THREE","Heart",18,"../image/threeheart.PNG"));
        this.allCards.push(new Card("THREE","Spade",19,"../image/threespade.PNG"));
        this.allCards.push(new Card("THREE","Diamond",20,"../image/threediamond.PNG"));
        this.allCards.push(new Card("THREE","Club",21,"../image/threeclub.PNG"));
        this.allCards.push(new Card("THREE","Heart",22,"../image/threeheart.PNG"));
        this.allCards.push(new Card("THREE","Spade",23,"../image/threespade.PNG"));
        this.allCards.push(new Card("FOUR","Diamond",24,"../image/fourdiamond.PNG"));
        this.allCards.push(new Card("FOUR","Club",25,"../image/fourclub.PNG"));
        this.allCards.push(new Card("FOUR","Heart",26,"../image/fourheart.PNG"));
        this.allCards.push(new Card("FOUR","Spade",27,"../image/fourspade.PNG"));
        this.allCards.push(new Card("FOUR","Diamond",28,"../image/fourdiamond.PNG"));
        this.allCards.push(new Card("FOUR","Club",29,"../image/fourclub.PNG"));
        this.allCards.push(new Card("FOUR","Heart",30,"../image/fourheart.PNG"));
        this.allCards.push(new Card("FOUR","Spade",31,"../image/fourspade.PNG"));
        this.allCards.push(new Card("FIVE","Diamond",32,"../image/fivediamond.PNG"));
        this.allCards.push(new Card("FIVE","Club",33,"../image/fiveclub.PNG"));
        this.allCards.push(new Card("FIVE","Heart",34,"../image/fiveheart.PNG"));
        this.allCards.push(new Card("FIVE","Spade",35,"../image/fivespade.PNG"));
        this.allCards.push(new Card("FIVE","Diamond",36,"../image/fivediamond.PNG"));
        this.allCards.push(new Card("FIVE","Club",37,"../image/fiveclub.PNG"));
        this.allCards.push(new Card("FIVE","Heart",38,"../image/fiveheart.PNG"));
        this.allCards.push(new Card("FIVE","Spade",39,"../image/fivespade.PNG"));
        this.allCards.push(new Card("SIX","Diamond",40,"../image/sixdiamond.PNG"));
        this.allCards.push(new Card("SIX","Club",41,"../image/sixclub.PNG"));
        this.allCards.push(new Card("SIX","Heart",42,"../image/sixheart.PNG"));
        this.allCards.push(new Card("SIX","Spade",43,"../image/sixspade.PNG"));
        this.allCards.push(new Card("SIX","Diamond",44,"../image/sixdiamond.PNG"));
        this.allCards.push(new Card("SIX","Club",45,"../image/sixclub.PNG"));
        this.allCards.push(new Card("SIX","Heart",46,"../image/sixheart.PNG"));
        this.allCards.push(new Card("SIX","Spade",47,"../image/sixspade.PNG"));
        this.allCards.push(new Card("SEVEN","Diamond",48,"../image/sevendiamond.PNG"));
        this.allCards.push(new Card("SEVEN","Club",49,"../image/sevenclub.PNG"));
        this.allCards.push(new Card("SEVEN","Heart",50,"../image/sevenheart.PNG"));
        this.allCards.push(new Card("SEVEN","Spade",51,"../image/sevenspade.PNG"));
        this.allCards.push(new Card("SEVEN","Diamond",52,"../image/sevendiamond.PNG"));
        this.allCards.push(new Card("SEVEN","Club",53,"../image/sevenclub.PNG"));
        this.allCards.push(new Card("SEVEN","Heart",54,"../image/sevenheart.PNG"));
        this.allCards.push(new Card("SEVEN","Spade",55,"../image/sevenspade.PNG"));
        this.allCards.push(new Card("EIGHT","Diamond",56,"../image/eightdiamond.PNG"));
        this.allCards.push(new Card("EIGHT","Club",57,"../image/eightclub.PNG"));
        this.allCards.push(new Card("EIGHT","Heart",58,"../image/eightheart.PNG"));
        this.allCards.push(new Card("EIGHT","Spade",59,"../image/eightspade.PNG"));
        this.allCards.push(new Card("EIGHT","Diamond",60,"../image/eightdiamond.PNG"));
        this.allCards.push(new Card("EIGHT","Club",61,"../image/eightclub.PNG"));
        this.allCards.push(new Card("EIGHT","Heart",62,"../image/eightheart.PNG"));
        this.allCards.push(new Card("EIGHT","Spade",63,"../image/eightspade.PNG"));
        this.allCards.push(new Card("NINE","Diamond",64,"../image/ninediamond.PNG"));
        this.allCards.push(new Card("NINE","Club",65,"../image/nineclub.PNG"));
        this.allCards.push(new Card("NINE","Heart",66,"../image/nineheart.PNG"));
        this.allCards.push(new Card("NINE","Spade",67,"../image/ninespade.PNG"));
        this.allCards.push(new Card("NINE","Diamond",68,"../image/ninediamond.PNG"));
        this.allCards.push(new Card("NINE","Club",69,"../image/nineclub.PNG"));
        this.allCards.push(new Card("NINE","Heart",70,"../image/nineheart.PNG"));
        this.allCards.push(new Card("NINE","Spade",71,"../image/ninespade.PNG"));
        this.allCards.push(new Card("TEN","Diamond",72,"../image/tendiamond.PNG"));
        this.allCards.push(new Card("TEN","Club",73,"../image/tenclub.PNG"));
        this.allCards.push(new Card("TEN","Heart",74,"../image/tenheart.PNG"));
        this.allCards.push(new Card("TEN","Spade",75,"../image/tenspade.PNG"));
        this.allCards.push(new Card("TEN","Diamond",76,"../image/tendiamond.PNG"));
        this.allCards.push(new Card("TEN","Club",77,"../image/tenclub.PNG"));
        this.allCards.push(new Card("TEN","Heart",78,"../image/tenheart.PNG"));
        this.allCards.push(new Card("TEN","Spade",79,"../image/tenspade.PNG"));
        this.allCards.push(new Card("JACK","Diamond",80,"../image/jackdiamond.PNG"));
        this.allCards.push(new Card("JACK","Club",81,"../image/jackclub.PNG"));
        this.allCards.push(new Card("JACK","Heart",82,"../image/jackheart.PNG"));
        this.allCards.push(new Card("JACK","Spade",83,"../image/jackspade.PNG"));
        this.allCards.push(new Card("JACK","Diamond",84,"../image/jackdiamond.PNG"));
        this.allCards.push(new Card("JACK","Club",85,"../image/jackclub.PNG"));
        this.allCards.push(new Card("JACK","Heart",86,"../image/jackheart.PNG"));
        this.allCards.push(new Card("JACK","Spade",87,"../image/jackspade.PNG"));
        this.allCards.push(new Card("QUEEN","Diamond",88,"../image/queendiamond.PNG"));
        this.allCards.push(new Card("QUEEN","Club",89,"../image/queenclub.PNG"));
        this.allCards.push(new Card("QUEEN","Heart",90,"../image/queenheart.PNG"));
        this.allCards.push(new Card("QUEEN","Spade",91,"../image/queenspade.PNG"));
        this.allCards.push(new Card("QUEEN","Diamond",92,"../image/queendiamond.PNG"));
        this.allCards.push(new Card("QUEEN","Club",93,"../image/queenclub.PNG"));
        this.allCards.push(new Card("QUEEN","Heart",94,"../image/queenheart.PNG"));
        this.allCards.push(new Card("QUEEN","Spade",95,"../image/queenspade.PNG"));
        this.allCards.push(new Card("KING","Diamond",96,"../image/kingdiamond.PNG"));
        this.allCards.push(new Card("KING","Club",97,"../image/kingclub.PNG"));
        this.allCards.push(new Card("KING","Heart",98,"../image/kingheart.PNG"));
        this.allCards.push(new Card("KING","Spade",99,"../image/kingspade.PNG"));
        this.allCards.push(new Card("KING","Diamond",100,"../image/kingdiamond.PNG"));
        this.allCards.push(new Card("KING","Club",101,"../image/kingclub.PNG"));
        this.allCards.push(new Card("KING","Heart",102,"../image/kingheart.PNG"));
        this.allCards.push(new Card("KING","Spade",103,"../image/kingspade.PNG"));
    }
    //shuffle deck
    shuffle(){
        //shuffledDeck = [];

        for(var j = 0; j < 104; j++) //add 2 decks / 104 cards
        {
          var n = Math.floor(Math.random() * 104); //randomize number between 0 and 103
          while(this.allCards[n].inDeck == true) //rendomize new number until new card can be added to deck
          {
            n = Math.floor(Math.random() * 104);
          }
          //when new card can be added
          this.allCards[n].inDeck = true; //now in deck
          this.shuffledDeck.push(this.allCards[n]);
        }

        //return shuffledDeck;
    }

    //deal cards:
    //takes in list of hands
    deal(hands){
        for(var i = 0; i < 2; i++) //2 cards
        {
            for(var j = 0; j < hands.length; j++)
            {
                hands[j].cards.push(this.shuffledDeck.pop());
            }
        }
        //showHands(false); //dont show dealers second card
        document.getElementById("cardsLeft").innerHTML = "Cards Left: " + this.getCardsLeft();
    }

    dealOne(){ //h param?
        //deal the next card in the deck to hand 'h'

        //h.cards.push(this.shuffledDeck.pop());
        return this.shuffledDeck.pop();
    }

    getCardsLeft(){
        return this.shuffledDeck.length;
    }


}

var deckPrinter = function (deck) {
    //alert("suh");
    document.write(deck.length);
    for (var i = 0; i < deck.length; i++)
    {
        //console.log(deck[i].name);
        document.write(deck[i].title + " , ");
    }
    return
}

//BJDEALER
// class BJDealer
// {
//     constructor(){
//         this.name = "Dealer";
//         this.hand = null;
//         //deck?
//         //this.commandList = [];
//     }
//     setHand(h){
//         this.hand = h;
//     }
//     getHand(){
//         return this.hand;
//     }
// }

class AbstractPlayer
{
    constructor(n,b){
        this.name = n;
        //this.profilePic = pp;
        //this.chipDesign = cd;
        this.balance = b;
        this.hand = null;
        this.bet = 0;
    }

    getName(){
        return this.name;
    }
    setHand(h){
        this.hand = h;
    }

    getHand(){
        return this.hand;
    }

}

class Player extends AbstractPlayer
{
    constructor(n,b){
        super(n,b);
        //this.elemID = player hand element
    }

    // getName(){
    //     return this.name;
    // }
    getBalance(){
        return this.balance;
    }
    placeBet(num){
        this.bet = num;
        document.getElementById('currbet').innerHTML = "Your bet: " + num;
        document.getElementById('moneyLeft').innerHTML = "Money Left: " + (this.balance - this.bet);
    }
    getBet(){
        return this.bet;
    }
    // setHand(h){
    //     this.hand = h;
    // }
    //
    // getHand(){
    //     return this.hand;
    // }
    //buy chips
    win(){
        alert("Player Wins");
        this.balance += this.bet;
        this.bet = 0;
        document.getElementById('currbet').innerHTML = "Your bet: " + this.bet;
        document.getElementById('moneyLeft').innerHTML = "Money Left: " + this.balance;
    }

    lose(){
        alert("Dealer Wins");
        this.balance -= this.bet;
        this.bet = 0;
        document.getElementById('currbet').innerHTML = "Your bet: " + this.bet;
        document.getElementById('moneyLeft').innerHTML = "Money Left: " + this.balance;
    }

    draw(){
        alert("It's a Draw");
        this.bet = 0;
        document.getElementById('currbet').innerHTML = "Your bet: " + this.bet;
        document.getElementById('moneyLeft').innerHTML = "Money Left: " + this.balance;
    }

    blackJack(){
        alert("BlackJack!");
        this.balance += 2*this.bet;
        this.bet = 0;
        document.getElementById('currbet').innerHTML = "Your bet: " + this.bet;
        document.getElementById('moneyLeft').innerHTML = "Money Left: " + this.balance;
    }

}

class BJDealer extends AbstractPlayer
{
    constructor(n){
        super(n,0);
        //this.elemID = dealer hand element
        this.name = "Dealer";

    }

}

//PLAYER-------------------------------------------------------------------
// class Player
// {
//     //construct from values in database
//     constructor(n, b, pp){
//         this.name = n;
//         this.profilePic = pp;
//         //this.chipDesign = cd;
//         this.balance = b;
//         this.hand = null;
//         this.bet = 0;
//     }
//
//     getName(){
//         return this.name;
//     }
//     getBalance(){
//         return this.balance;
//     }
//     placeBet(num){
//         this.bet = num;
//         document.getElementById('currbet').innerHTML = "Your bet: " + num;
//         document.getElementById('moneyLeft').innerHTML = "Money Left: " + (this.balance - this.bet);
//     }
//     getBet(){
//         return this.bet;
//     }
//     setHand(h){
//         this.hand = h;
//     }
//
//     getHand(){
//         return this.hand;
//     }
//     //buy chips
//     win(){
//         alert("Player Wins");
//         this.balance += this.bet;
//         this.bet = 0;
//         document.getElementById('currbet').innerHTML = "Your bet: " + this.bet;
//         document.getElementById('moneyLeft').innerHTML = "Money Left: " + this.balance;
//     }
//
//     lose(){
//         alert("Dealer Wins");
//         this.balance -= this.bet;
//         this.bet = 0;
//         document.getElementById('currbet').innerHTML = "Your bet: " + this.bet;
//         document.getElementById('moneyLeft').innerHTML = "Money Left: " + this.balance;
//     }
//
//     draw(){
//         alert("It's a Draw");
//         this.bet = 0;
//         document.getElementById('currbet').innerHTML = "Your bet: " + this.bet;
//         document.getElementById('moneyLeft').innerHTML = "Money Left: " + this.balance;
//     }
//
//     blackJack(){
//         alert("BlackJack!");
//         this.balance += 2*this.bet;
//         this.bet = 0;
//         document.getElementById('currbet').innerHTML = "Your bet: " + this.bet;
//         document.getElementById('moneyLeft').innerHTML = "Money Left: " + this.balance;
//     }
//
//     //cash out
//     //cashOut(num){
//         //move chips from balance to player's bank account in database
//     //}
//
// }

//HAND Class options--------------------------------------------------
class Hand
{
    constructor(pname, hid, cid1, cid2, htid, t){
        this.cards = [];
        this.cardValue = 0;
        this.owner = pname;
        //type of hand?
        this.type = t; //0 = player, 1 = dealer
        this.handID = hid;
        this.cardID1 = cid1;
        this.cardID2 = cid2;
        this.handTotalID = htid;
        //this.bet = b;
        this.observers = [];
    }

    getHandSize(){
        return this.cards.length;
    }
    getCards(){
        return this.cards;
    }
    getType(){
        return this.type;
    }
    getHandId(){
        return this.handID;
    }
    getCardId1(){
        return this.cardID1;
    }
    getCardId2(){
        return this.cardID2;
    }
    getHandTotalId(){
        return this.handTotalID;
    }

    //get hand total
    calculateHandTotal(show){
        this.cardValue = 0; //reset cardVal and recalculate
        var numAces = 0;
        //check for aces
        for(var i = 0; i < this.cards.length; i++){
            if(this.cards[i].getTitle() == "ACE"){
                numAces+=1;
            }
        }

        //case: no aces
        if(numAces==0){
            for(var i = 0; i < this.cards.length; i++){
                this.cardValue += this.cards[i].number;
            }
        }

        //case: one ace
        else if(numAces == 1){
            //add up values of non ace cards
            //if sum + 11 <= 21, ace counts as 11
            //esle ace counts as 1
            for(var i = 0; i < this.cards.length; i++){
                if(this.cards[i].getTitle() != "ACE"){
                    this.cardValue += this.cards[i].number;
                }
            }

            for(var j = 0; j < this.cards.length; j++){
                if(this.cards[j].getTitle() == "ACE"){
                    if(this.cardValue + 11 <= 21)
                    {
                      this.cardValue += 11;
                    }
                    else
                    {
                      this.cardValue += 1;
                    }
                }
            }
        }

        //case: more than 1 ace
        else{
            //add up values of non ace cards
            //loop through i=0 -> numAces
            // if i < numAces-1 (not last ace)
            // ace counts as 1
            // last ace can count as 1 or 11

            for(var i = 0; i < this.cards.length; i++){
                if(this.cards[i].getTitle() != "ACE"){
                    this.cardValue += this.cards[i].number;
                }
            }

            var aceCounter = 0;
            for(var j = 0; j < this.cards.length; j++){
                if(this.cards[j].getTitle() == "ACE" && aceCounter < (numAces-1) ){
                    //if not last ace
                    this.cardValue += 1;
                }
                else if(this.cards[j].getTitle() == "ACE" && aceCounter == (numAces-1) ){
                    //if last ace
                    if(this.cardValue + 11 <= 21)
                    {
                      this.cardValue += 11;
                    }
                    else
                    {
                      this.cardValue += 1;
                    }
                }
                aceCounter += 1;
            }

        }
        //display new total
        if(this.type == 0){
            document.getElementById(this.handTotalID).innerHTML = "Your Hand Total: " + this.cardValue;
        } else{
            //dealer
            if(show == true){
                document.getElementById(this.handTotalID).innerHTML = "Dealer Hand Total: " + this.cardValue;
            }else{
                document.getElementById(this.handTotalID).innerHTML = "Dealer Hand Total: ?";
            }

        }

    }

    getHandValue(){
        return this.cardValue;
    }

    //show hand (polymorphic? strategy?)
    showHand(showSecond){
        var pc1 = document.getElementById(this.cardID1);
        pc1.setAttribute("src", (this.cards[0]).imgname);
        var pc2 = document.getElementById(this.cardID2);
        if(showSecond == true)
        {
            pc2.setAttribute("src", (this.cards[1]).imgname);
        }
        else{
            pc2.setAttribute("src", "../image/cardback.PNG");
        }
    }

    addCard(c){
        //push card c into this.cards
        this.cards.push(c);
        //add an img element to this.handID
        document.getElementById(this.handID).innerHTML += "&nbsp;";

        var img = document.createElement("img");

        img.src = c.getImg();
        img.id = this.cards.length;
        img.width = "50";
        img.height = "80";
        var src = document.getElementById(this.handID);
        src.appendChild(img);
        //sleep(3000);
        // this.calculateHandTotal();
        // this.notifyObservers(this);
        //return true;
        // if(document.getElementById(img.id)){
        //     return;
        // }
        // while(!document.getElementById(img.id)){
        //     //wait
        // }
        // return;
    }

    //observer pattern
    addObserver(obs) {
        this.observers.push(obs);
    }

    notifyObservers(event) {
        //sleep(1000);
        this.observers.forEach( o => o.update(event));
        // setTimeout(nofunc(event),1000);
        // function nofunc(event){
        //     this.observers.forEach( o => o.update(event));
        // }
    }

}

// class AbstractHand
// {
//     constructor(pname){
//         this.cards = [];
//         this.cardValue = 0;
//         this.owner = pname;
//         //type of hand?
//         //this.type = t;
//         this.elemID;
//         // if(this.constructor == AbstractHand){
//         //     throw new Error("can't instantiate abstract hand");
//         }
//     }
//
//     //get hand total
//     getHandTotal(){
//         //generic method, no error
//         throw new Error("no implementation")
//     }
//     //show hand (polymorphic? strategy?)
//     showHand(){
//         throw new Error("no implementation")
//     }
//
// }
//
// class PlayerHand extends AbstractHand
// {
//     constructor(pname){
//         super(pname);
//         //this.elemID = player hand element
//     }
//
//     //get hand total: implementation optional
//
//     //show hand
//     showHand(){
//         //show both cards
//     }
// }
//
// class DealerHand extends AbstractHand
// {
//     constructor(pname){
//         super(pname);
//         //this.elemID = dealer hand element
//     }
//
//     //get hand total: implementation optional
//
//     //show hand
//     showHand(){
//         //show only first card
//     }
//}



//----------------------------------------------------------------------

//OBSERVER
class Observer
{
    update(event){
        if(this.isRelevent(event)){
            // setTimeout(dfunc(event), 1000);
            //
            // function dfunc(event){
            //     this.react(event);
            // }
            this.react(event);
        }
    }
    isRelevent(){
        //throw error
    }
    react(){
        //throw error
    }
}

class BustObserver extends Observer
{
    constructor(m,r){
        super();
        this.mgr = m;
        this.rnd = r;
    }
    isRelevent(h){
        return (h.getHandValue() > 21);
    }
    //setTimeout(react(h), 1000);
    react(h){
        //var ok = false;
        const m = this.mgr;
        const r = this.rnd;

        this.mgr.execute(new StayCommand(h));
        h.showHand(true);
        setTimeout(dfunc(r),1000);
        function dfunc(r){
            //alert("bust: end round");
            r.endRound();
        }
        //setTimeout(dfunc(m,r,h), 1000);

        // function dfunc(m,r,h){
        //     alert("busted");
        //     m.execute(new StayCommand(h));
        //     //end round
        //     r.endRound();
        // }
        //sleep(1000);
        // alert("busted");
        // this.mgr.execute(new StayCommand(h));
        // //end round
        // this.rnd.endRound();
    }
}


//COMMAND
class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

//command manager:
//after cards are dealt, call display() to show hit/stand options
//upon clicking a command, call execute on the type of command clicked
// command parameters include a hand object, the deck object, (and the elementID of the player's hand?)
class CommandManager {
  constructor() {
    this.commands = [];
  }

  execute(command, ...args) {
    return command.execute(this.commands, ...args);
  }

  //diplay function
  //displays hit,stand buttons and opens command interface
}

function HitCommand(h, d) {
  return new Command(commands => {
    //add next card from deck to hand
    //var ok = false;
    //d.dealOne(h);

    h.addCard(d.dealOne());
    //ok = h.addCard(d.dealOne());
    //alert("card added");
    sleep(300);
    //document.getElementById('ptotal').innerHTML = "Your Hand Total: " + phand.getHandValue();
    h.calculateHandTotal(true);
    //console.log(`Hit`);
    document.getElementById("cardsLeft").innerHTML = "Cards Left: " + d.getCardsLeft();

    var elem = document.getElementById("doublebutton");
    if(elem != null){
        document.getElementById("doublebutton").remove();
    }

    //check for bust?
    // if(h.getType()==0){
    //     sleep(1000);
    //     h.notifyObservers(h);
    // }
    //return;
    // if(ok){
    //     h.notifyObservers(h);
    // }
    //sleep(3000);
    //h.showHand(true);
    setTimeout(funcc(h),3000);
    function funcc(h){
        h.showHand(true);
        h.notifyObservers(h);
    }
    //h.notifyObservers(h);

  });
  //h.notifyObservers(h);
}

function StayCommand(h) {
    return new Command(commands => {
        //end interface loop : closeComms(); ? h.clear() ?
        if(h.getType()==0){
            //alert("remove buttons");
            document.getElementById('hitbutton').remove();
            document.getElementById('staybutton').remove();
            var elem = document.getElementById("doublebutton");
            if(elem != null){
                document.getElementById("doublebutton").remove();
            }
            //document.getElementById('doublebutton').remove();
        }

        //return hand value?
        h.calculateHandTotal(true);
        //bj.nextTurn()

    });
}

function DealerStayCommand(h,d) {
    return new Command(commands => {
        h.calculateHandTotal(true);
        //return hand value?
    });
}

function DoubleCommand(p,d) {
    return new Command(commands => {
        var h = p.getHand();

        //double player bet
        p.placeBet(p.getBet()*2);
        //deal one card
        h.addCard(d.dealOne());
        //calculate hand Total
        h.calculateHandTotal(true);
        //end command interface loop
        document.getElementById('hitbutton').remove();
        document.getElementById('staybutton').remove();
        document.getElementById('doublebutton').remove();

        document.getElementById("cardsLeft").innerHTML = "Cards Left: " + d.getCardsLeft();
    });
}

function SplitCommand(p,d) {
    return new Command(commands => {
        alert("split");
        //get original hand and its cards
        var ogHand = p.getHand();
        var ogCards = ogHand.getCards();

        //create new hand element in html
        document.getElementById(ogHand.getHandId()).innerHTML += "&nbsp;";

        var newSlot1 = document.createElement("img");
        newSlot1.src = "../image/emptycardslot.PNG";
        newSlot1.id = "pcard21";
        newSlot1.width = "50";
        newSlot1.height = "80";
        var src = document.getElementById(ogHand.getHandId());
        src.appendChild(newSlot1);

        var newSlot2 = document.createElement("img");
        newSlot2.src = "../image/emptycardslot.PNG";
        newSlot2.id = "pcard22";
        newSlot2.width = "50";
        newSlot2.height = "80";
        //var src = document.getElementById(p.getHandId());
        src.appendChild(newSlot2);


    });
}


//STATE MACHINE-----------------------------------------------------------------------------------
var Round = function(game,players,deck){
    var currState = new PlayerTurn(this);
    var done = false;

    //state transition
    this.changeState = function(state){
        //transition conditions?
        if(done == true){
            //alert("round over");
            return;
        }
        //alert("change state");
        currState = state;
        currState.playTurn(players[1],deck);
    };

    //start a round of blackjack
    this.startRound = function(){
        currState.playTurn(players[0],deck);
    };

    //this.endRound ?
    this.endRound = function(){
        //alert("end round");
        done = true;
        for(var i = 0; i<players.length;i++){
            var h = players[i].getHand();
            if(h.getType()==0){
                h.showHand(true);
            }
        }

        setTimeout(d,1000);
        function d(){
            game.end();
        }
        //game.end();

    }
}


var PlayerTurn = function(round){
    this.round = round;
    this.playTurn = function(p,d){
        var h = p.getHand();
        const manager = new CommandManager();
        //check blackjack
        ht = h.getHandValue();
        if(ht==21){
            //alert("Blackjack!");
            //manager.execute(new StayCommand(h));
            setTimeout(delaybj, 1000);

            function delaybj(){
                // Code that will run
            	// after 3 seconds.
                round.endRound();
                //round.changeState(new RoundEnd(round));
            }
        }else{
            //register observers
            var bustobs = new BustObserver(manager, round);
            h.addObserver(bustobs);
            //display command interface
            var myDiv = document.getElementById("buttons");

            var hitButton = document.createElement('BUTTON');
            hitButton.className="subbutton button2";
            hitButton.id = 'hitbutton';
            var hitText = document.createTextNode("Hit");
            hitButton.appendChild(hitText);
            myDiv.appendChild(hitButton);

            var stayButton = document.createElement('BUTTON');
            stayButton.className="subbutton button2";
            stayButton.id = 'staybutton';
            var stayText = document.createTextNode("Stand");
            stayButton.appendChild(stayText);
            myDiv.appendChild(stayButton);

            var doubleButton = document.createElement('BUTTON');
            doubleButton.className="subbutton button2";
            doubleButton.id = 'doublebutton';
            var doubleText = document.createTextNode("Double Down");
            doubleButton.appendChild(doubleText);
            myDiv.appendChild(doubleButton);

            // var splitButton = document.createElement('BUTTON');
            // splitButton.id = 'splitbutton';
            // var splitText = document.createTextNode("Split");
            // splitButton.appendChild(splitText);
            // myDiv.appendChild(splitButton);

            //create event listeners for buttons
            document.getElementById("hitbutton").addEventListener("click", function(){
                //execute hit command
                manager.execute(new HitCommand(h,d));
                //check for bust with observer pattern?

                //setTimeout(h.notifyObservers(h), 1000);

                // function dfunc(h){
                //     h.notifyObservers(h);
                // }
                //sleep(3000);
                //h.notifyObservers(h);
            });

            document.getElementById("staybutton").addEventListener("click", function(){
                //execute hit command
                manager.execute(new StayCommand(h));
                //tranfer state to dealer turn
                round.changeState(new DealerTurn(round));
                //return true;
            });

            document.getElementById("doublebutton").addEventListener("click", function(){
                //execute hit command
                manager.execute(new DoubleCommand(p,d));
                round.changeState(new DealerTurn(round));
                //return true;
            });

            // document.getElementById("splitbutton").addEventListener("click", function(){
            //     //execute split command
            //     manager.execute(new SplitCommand(p,d));
            //     //return true;
            // });
            //return;
        }


    }
};

var DealerTurn = function(round){
    this.round = round;
    this.playTurn = function(p,d){
        var h = p.getHand();
        var done = false;
        const manager = new CommandManager(); //command manager instantiation

        //h.showHand(true);

        //add observers
        //var bustobs = new BustObserver(manager, round);
        //h.addObserver(bustobs);

        //start turn loop
        while(!done){
            //get dealer hand value
            var handTotal = h.getHandValue();

            //show second card
            //h.showHand();
            h.showHand(true);

            //determine dealer move based on handTotal , use command pattern
            if(handTotal < 17){
                //hit
                manager.execute(new HitCommand(h,d));
                sleep(300);
                //h.notifyObservers(h);
                // function delay1(){
                //     // Code that will run
                // 	// after 1 seconds.
                //     manager.execute(new HitCommand(h,d));
                // }

            }
            else{
                manager.execute(new StayCommand(h));
                done = true;
            }

        } // end of loop
        //transition to end round state
        setTimeout( delay, 1000);

        function delay(){
            // Code that will run
        	// after 3 seconds.
            round.endRound();
            //round.changeState(new RoundEnd(round));
        }
        //round.endRound();

    }
};

//end round state
var RoundEnd = function(round){
    this.round = round;
    this.playTurn = function(p,d){
        //do nothing

        //round.endRound();
    }
}

//------------------------------------------------------------------------------------------------
var writeBet = function()
{
    //check if input is an int using ASCII

    var userInput = parseInt(appData.pBet.value);
    var ml = parseInt(appData.money.value)
    if(userInput >= ml)
    {
        alert("All In");
        userInput = ml;
        appData.pBet.value = ml;
    }
    document.getElementById('currbet').innerHTML = "Your bet: " + appData.pBet.value;
    appData.canPlayTurn = true;
    play();
}


function test1(){
    //deal cards
    //display hands
    //calculate and display hand Total

    //PLAYER TURN
    //open command pattern interface
    //once command loop ends, start dealer turn

    alert("test1")
    this.deck = new Deck();
    this.deck.shuffle();
    this.player1 = new Player('Ted',100);
    this.dealer = new BJDealer()
    var phand = new Hand("Ted", "playerHand", "pcard1", "pcard2", "ptotal");
    var dhand = new Hand("Dealer", "dealerHand", "dcard1", "dcard2", "dtotal");
    this.hands = [phand,dhand];
    this.deck.deal(this.hands);

    //PRE-HAND SETUP---------------------------------------------------

    //display cards
    // pc1 = document.getElementById('pcard1');
    // pc1.setAttribute("src", (phand.cards[0]).imgname);
    // pc2 = document.getElementById('pcard2');
    // pc2.setAttribute("src", (phand.cards[1]).imgname);
    // dc1 = document.getElementById('dcard1');
    // dc1.setAttribute("src", (dhand.cards[0]).imgname);
    // dc2 = document.getElementById('dcard2');
    // dc2.setAttribute("src", (dhand.cards[1]).imgname);
    phand.showHand();
    dhand.showHand();

    //calculate/display hand total
    for(var i = 0; i < this.hands.length; i++){
        this.hands[i].calculateHandTotal(true);
    }

    // document.getElementById('ptotal').innerHTML = "Your Hand Total: " + phand.getHandValue();

    //Player turn ----------------------------------------------------------------------------
    //use strategy pattern for turns
    const strategyManager = new TurnStrategyManager(this.deck);
    const playerStrategy = new PlayerTurn();
    const dealerStrategy = new DealerTurn();

    //loop through players, call setStrategy(players[i].getType())
    strategyManager.setStrategy(phand,playerStrategy);
    strategyManager.playTurn();
    alert("done");
    // strategyManager.setStrategy(dhand,dealerStrategy);
    // strategyManager.playTurn();

    // playerTurn(phand,this.deck);
    // dealerTurn(dhand,this.deck);

    //endTurn()
}

class TestGame
{
    constructor(){
        this.deck = new Deck();
        this.deck.shuffle();
        // this.player1 = new Player('Ted',100);
        this.player1 = globalPlayer;
        this.dealer = new BJDealer("Dealer");
        this.phand = null;
        this.dhand = null;
        this.hands = [];
        // this.player1.setHand(this.phand);
        // this.dealer.setHand(this.dhand);
    }

    setupGame(){

        //get player account balance
        var money = this.player1.getBalance();
        document.getElementById('moneyLeft').innerHTML = "Money Left: " + money;
        //valid bet condition
        var validBet = false;
        //take bet input
        var betInput = parseInt(document.getElementById('bet').value);
        // var ml = parseInt(appData.money.value)
        // if(userInput >= ml)
        // {
        //     alert("All In");
        //     userInput = ml;
        //     appData.pBet.value = ml;
        // }

        //check for valid bet
        if(betInput <= money){
            // document.getElementById('currbet').innerHTML = "Your bet: " + betInput;
            this.player1.placeBet(betInput);
            //if valid bet, play game, disable bet input
            document.getElementById('bet').style.visibility = "hidden";
            document.getElementById('startgame').style.visibility = "hidden";
            this.play();
        }

    }

    play(){

        this.phand = new Hand("Ted", "playerHand", "pcard1", "pcard2", "ptotal",0);
        this.dhand = new Hand("Dealer", "dealerHand", "dcard1", "dcard2", "dtotal",1);
        this.player1.setHand(this.phand);
        this.dealer.setHand(this.dhand);
        this.players = [this.player1,this.dealer];
        this.hands = [this.phand,this.dhand];

        this.deck.deal(this.hands);

        //PRE-HAND SETUP---------------------------------------------------
        this.phand.showHand(true);
        this.dhand.showHand(false);
        //sleep(1000);
        //calculate/display hand total
        for(var i = 0; i < this.hands.length; i++){
            if(this.hands[i].getType()==0){
                this.hands[i].calculateHandTotal(true);
            } else{
                this.hands[i].calculateHandTotal(false);
            }
            //this.hands[i].calculateHandTotal(true);
        }

        //check for blackjack

        // if(this.phand.getHandValue() == 21){
        //     this.player1.blackJack();
        //     this.clearTable();
        // }
        // else{
        //     //START ROUND--------------------------------------------
        //     var round = new Round(this,this.hands, this.deck);
        //     round.startRound();
        // }

        var round = new Round(this,this.players, this.deck);
        round.startRound();

    }

    end(){
        //alert("round ended");
        //Determine Winner ----------------------
        var dealerTotal = this.hands[this.hands.length-1].getHandValue();
        var playerTotal = this.hands[0].getHandValue();

        if ((playerTotal == 21) && (this.hands[0].getHandSize() == 2)){
            this.player1.blackJack();
        }
        else if (playerTotal > 21){
            //player loses money equal to hand's bet
            this.player1.lose();
        }
        else if(dealerTotal > 21){
            this.player1.win();
        }
        else if(playerTotal > dealerTotal){
            this.player1.win();
        }
        else if(playerTotal < dealerTotal){
            this.player1.lose();
        }
        else{
            //draw
            this.player1.draw();
        }

        //clear table and setup new round
        this.clearTable();
        //this.setupGame();

    }

    clearTable(){

        this.player1.setHand(null);
        this.dealer.setHand(null);
        // for(var i = 0; i < appData.players.length; i++)
        // {
        //     var l = appData.players[i].hand.length;
        //     for(var j = 0; j < l; j++)
        //     {
        //         appData.players[i].hand.pop();
        //     }
        // }

        //clear cards from table
        document.getElementById('dealerHand').innerHTML = '<img id="dcard1" width="50" height="80" src="../image/emptycardslot.PNG">&nbsp;<img id="dcard2" width="50" height="80" src="../image/emptycardslot.PNG">';
        document.getElementById('playerHand').innerHTML = '<img id="pcard1" width="50" height="80" src="../image/emptycardslot.PNG">&nbsp;<img id="pcard2" width="50" height="80" src="../image/emptycardslot.PNG">';

        document.getElementById('ptotal').innerHTML = "Your Hand Total: 0";
        document.getElementById('dtotal').innerHTML = "Dealer Hand Total: ?";

        //display setup buttons/inputs
        document.getElementById('bet').style.visibility = "visible";
        document.getElementById('startgame').style.visibility = "visible";

        // appData.startButton.innerHTML = "Quit Game";
        // appData.startButton.setAttribute('onclick', 'endGame()');

        //check bankrupt
        this.checkBankrupt();
        //check for reshuffle



    }

    checkBankrupt(){
        var money = this.player1.getBalance();
        if(money <= 0){
            alert("Player is bankrupt");
            //return to main menu
            window.location.href = "../HTML/home.html";
        }
        else{
            this.checkReshuffle();
        }
    }

    checkReshuffle(){
        if(this.deck.getCardsLeft() < 6*this.hands.length){
            alert("reshuffle");
            this.deck = new Deck();
            this.deck.shuffle();
            document.getElementById("cardsLeft").innerHTML = this.deck.getCardsLeft();
        }

    }

}

function main(){
    bj = new TestGame();

    //create player object from database values
    //bj.addPlayer(player);
    //display player money left in html

    //request player bets
    // document.getElementById("start").addEventListener("click", function(){
    //     //setup game
    //     bj.setupGame();
    // });

    document.getElementById("start").innerHTML = "Submit Bet";
    document.getElementById("start").setAttribute('onclick', 'bj.setupGame()');
    document.getElementById("bet").style.visibility= "visible";
    //bj.setupGame();

    //bj.play();
}
