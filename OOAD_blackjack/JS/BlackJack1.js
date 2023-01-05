
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
        deck.shuffle();

        //ask for user bets (open command interface)

        //make hands?




    }

}

//CARD ------------------------------------------
function Card(v, suit, id, imgname)
{
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
};
//DECK------------------------------------------
class Deck
{
    constructor(){
        this.allCards = [];
        allCards.push(new Card("ACE","Diamond",0,"./acediamond.PNG"));
        allCards.push(new Card("ACE","Club",1,"./aceclub.PNG"));
        allCards.push(new Card("ACE","Heart",2,"./aceheart.PNG"));
        allCards.push(new Card("ACE","Spade",3,"./acespade.PNG"));
        allCards.push(new Card("ACE","Diamond",4,"./acediamond.PNG"));
        allCards.push(new Card("ACE","Club",5,"./aceclub.PNG"));
        allCards.push(new Card("ACE","Heart",6,"./aceheart.PNG"));
        allCards.push(new Card("ACE","Spade",7,"./acespade.PNG"));
        allCards.push(new Card("TWO","Diamond",8,"./twodiamond.PNG"));
        allCards.push(new Card("TWO","Club",9,"./twoclub.PNG"));
        allCards.push(new Card("TWO","Heart",10,"./twoheart.PNG"));
        allCards.push(new Card("TWO","Spade",11,"./twospade.PNG"));
        allCards.push(new Card("TWO","Diamond",12,"./twodiamond.PNG"));
        allCards.push(new Card("TWO","Club",13,"./twoclub.PNG"));
        allCards.push(new Card("TWO","Heart",14,"./twoheart.PNG"));
        allCards.push(new Card("TWO","Spade",15,"./twospade.PNG"));
        allCards.push(new Card("THREE","Diamond",16,"./threediamond.PNG"));
        allCards.push(new Card("THREE","Club",17,"./threeclub.PNG"));
        allCards.push(new Card("THREE","Heart",18,"./threeheart.PNG"));
        allCards.push(new Card("THREE","Spade",19,"./threespade.PNG"));
        allCards.push(new Card("THREE","Diamond",20,"./threediamond.PNG"));
        allCards.push(new Card("THREE","Club",21,"./threeclub.PNG"));
        allCards.push(new Card("THREE","Heart",22,"./threeheart.PNG"));
        allCards.push(new Card("THREE","Spade",23,"./threespade.PNG"));
        allCards.push(new Card("FOUR","Diamond",24,"./fourdiamond.PNG"));
        allCards.push(new Card("FOUR","Club",25,"./fourclub.PNG"));
        allCards.push(new Card("FOUR","Heart",26,"./fourheart.PNG"));
        allCards.push(new Card("FOUR","Spade",27,"./fourspade.PNG"));
        allCards.push(new Card("FOUR","Diamond",28,"./fourdiamond.PNG"));
        allCards.push(new Card("FOUR","Club",29,"./fourclub.PNG"));
        allCards.push(new Card("FOUR","Heart",30,"./fourheart.PNG"));
        allCards.push(new Card("FOUR","Spade",31,"./fourspade.PNG"));
        allCards.push(new Card("FIVE","Diamond",32,"./fivediamond.PNG"));
        allCards.push(new Card("FIVE","Club",33,"./fiveclub.PNG"));
        allCards.push(new Card("FIVE","Heart",34,"./fiveheart.PNG"));
        allCards.push(new Card("FIVE","Spade",35,"./fivespade.PNG"));
        allCards.push(new Card("FIVE","Diamond",36,"./fivediamond.PNG"));
        allCards.push(new Card("FIVE","Club",37,"./fiveclub.PNG"));
        allCards.push(new Card("FIVE","Heart",38,"./fiveheart.PNG"));
        allCards.push(new Card("FIVE","Spade",39,"./fivespade.PNG"));
        allCards.push(new Card("SIX","Diamond",40,"./sixdiamond.PNG"));
        allCards.push(new Card("SIX","Club",41,"./sixclub.PNG"));
        allCards.push(new Card("SIX","Heart",42,"./sixheart.PNG"));
        allCards.push(new Card("SIX","Spade",43,"./sixspade.PNG"));
        allCards.push(new Card("SIX","Diamond",44,"./sixdiamond.PNG"));
        allCards.push(new Card("SIX","Club",45,"./sixclub.PNG"));
        allCards.push(new Card("SIX","Heart",46,"./sixheart.PNG"));
        allCards.push(new Card("SIX","Spade",47,"./sixspade.PNG"));
        allCards.push(new Card("SEVEN","Diamond",48,"./sevendiamond.PNG"));
        allCards.push(new Card("SEVEN","Club",49,"./sevenclub.PNG"));
        allCards.push(new Card("SEVEN","Heart",50,"./sevenheart.PNG"));
        allCards.push(new Card("SEVEN","Spade",51,"./sevenspade.PNG"));
        allCards.push(new Card("SEVEN","Diamond",52,"./sevendiamond.PNG"));
        allCards.push(new Card("SEVEN","Club",53,"./sevenclub.PNG"));
        allCards.push(new Card("SEVEN","Heart",54,"./sevenheart.PNG"));
        allCards.push(new Card("SEVEN","Spade",55,"./sevenspade.PNG"));
        allCards.push(new Card("EIGHT","Diamond",56,"./eightdiamond.PNG"));
        allCards.push(new Card("EIGHT","Club",57,"./eightclub.PNG"));
        allCards.push(new Card("EIGHT","Heart",58,"./eightheart.PNG"));
        allCards.push(new Card("EIGHT","Spade",59,"./eightspade.PNG"));
        allCards.push(new Card("EIGHT","Diamond",60,"./eightdiamond.PNG"));
        allCards.push(new Card("EIGHT","Club",61,"./eightclub.PNG"));
        allCards.push(new Card("EIGHT","Heart",62,"./eightheart.PNG"));
        allCards.push(new Card("EIGHT","Spade",63,"./eightspade.PNG"));
        allCards.push(new Card("NINE","Diamond",64,"./ninediamond.PNG"));
        allCards.push(new Card("NINE","Club",65,"./nineclub.PNG"));
        allCards.push(new Card("NINE","Heart",66,"./nineheart.PNG"));
        allCards.push(new Card("NINE","Spade",67,"./ninespade.PNG"));
        allCards.push(new Card("NINE","Diamond",68,"./ninediamond.PNG"));
        allCards.push(new Card("NINE","Club",69,"./nineclub.PNG"));
        allCards.push(new Card("NINE","Heart",70,"./nineheart.PNG"));
        allCards.push(new Card("NINE","Spade",71,"./ninespade.PNG"));
        allCards.push(new Card("TEN","Diamond",72,"./tendiamond.PNG"));
        allCards.push(new Card("TEN","Club",73,"./tenclub.PNG"));
        allCards.push(new Card("TEN","Heart",74,"./tenheart.PNG"));
        allCards.push(new Card("TEN","Spade",75,"./tenspade.PNG"));
        allCards.push(new Card("TEN","Diamond",76,"./tendiamond.PNG"));
        allCards.push(new Card("TEN","Club",77,"./tenclub.PNG"));
        allCards.push(new Card("TEN","Heart",78,"./tenheart.PNG"));
        allCards.push(new Card("TEN","Spade",79,"./tenspade.PNG"));
        allCards.push(new Card("JACK","Diamond",80,"./jackdiamond.PNG"));
        allCards.push(new Card("JACK","Club",81,"./jackclub.PNG"));
        allCards.push(new Card("JACK","Heart",82,"./jackheart.PNG"));
        allCards.push(new Card("JACK","Spade",83,"./jackspade.PNG"));
        allCards.push(new Card("JACK","Diamond",84,"./jackdiamond.PNG"));
        allCards.push(new Card("JACK","Club",85,"./jackclub.PNG"));
        allCards.push(new Card("JACK","Heart",86,"./jackheart.PNG"));
        allCards.push(new Card("JACK","Spade",87,"./jackspade.PNG"));
        allCards.push(new Card("QUEEN","Diamond",88,"./queendiamond.PNG"));
        allCards.push(new Card("QUEEN","Club",89,"./queenclub.PNG"));
        allCards.push(new Card("QUEEN","Heart",90,"./queenheart.PNG"));
        allCards.push(new Card("QUEEN","Spade",91,"./queenspade.PNG"));
        allCards.push(new Card("QUEEN","Diamond",92,"./queendiamond.PNG"));
        allCards.push(new Card("QUEEN","Club",93,"./queenclub.PNG"));
        allCards.push(new Card("QUEEN","Heart",94,"./queenheart.PNG"));
        allCards.push(new Card("QUEEN","Spade",95,"./queenspade.PNG"));
        allCards.push(new Card("KING","Diamond",96,"./kingdiamond.PNG"));
        allCards.push(new Card("KING","Club",97,"./kingclub.PNG"));
        allCards.push(new Card("KING","Heart",98,"./kingheart.PNG"));
        allCards.push(new Card("KING","Spade",99,"./kingspade.PNG"));
        allCards.push(new Card("KING","Diamond",100,"./kingdiamond.PNG"));
        allCards.push(new Card("KING","Club",101,"./kingclub.PNG"));
        allCards.push(new Card("KING","Heart",102,"./kingheart.PNG"));
        allCards.push(new Card("KING","Spade",103,"./kingspade.PNG"));
    }

}

//BJDEALER (invoker)
class BJDEALER
{
    constructor(){
        this.name = "Dealer";
        //deck?
        this.commandList = [];
    }
    shuffle(Deck){
        //shuffle algorithm on deck's card list
    }
    //take/exec commands?
    executeCommand(){

    }

    deal(){
        //create hand object? deal cards from deck class variable
    }
}

//PLAYER-------------------------------------------------------------------
class Player
{
    //construct from values in database
    constructor(n, pp, cd, b){
        this.name = n;
        this.profilePic = pp;
        this.chipDesign = cd;
        this.balance = b;
    }
    //buy chips
    buyChips(num){

    }

    //cash out
    cashOut(num){

    }

}

//COMMAND
var Command = function(execute){
    this.execute = execute;
}
