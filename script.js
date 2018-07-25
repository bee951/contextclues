$(document).ready(function() {
    for (let index = 1; index < 101; index++) {
        $("body").append("<h3>Accusation "+index+"</h3>");
        $("h3:last").attr("id",index);} 
        $("h3").on("click",function() {
            var i=this.id-1
            var i2=i+1
            if (i>4) {
                var fi=i%5
                var li=i
                var wi=i
                if(i>9){
                    var li=i%10
                    if(i>19){
                        var wi=i%20
                    }}}else{
                            var fi=i
                            var li=i
                            var wi=i
            }
            console.log(i,i2,fi,li,wi)
            alert("Accusation "+i2+": I accuse "+friends[fi]+", with the "+weapon[wi]+" in the "+locat[li]+"!")
        })
var friends=["Colin","James","Hans","Fred","George"];
var locat=["Pool Room","Balcony","Bedroom","Bathroom","Hallway","Closet","Dinning Room","Deck","Library","Bridge"];
var weapon=["Rifle","Potato","Potassium Cyanide","Pistol","Shotgun","Candlestick","Chandelier","Playing Card","Rope","Bomb","Panzer Battalion","Napalm","Sword","Tomato","Flamewerfer","Panzerfaust","Hammer","Bucket","Cake","Fly Swatter"];
})