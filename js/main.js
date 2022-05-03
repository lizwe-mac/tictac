//TODO Show X's and O's on the UI
let pos_1 = document.querySelector('.pos_1')
let pos_2 = document.querySelector('.pos_2')
let pos_3 = document.querySelector('.pos_3')
let pos_4 = document.querySelector('.pos_4')
let pos_5 = document.querySelector('.pos_5')
let pos_6 = document.querySelector('.pos_6')
let pos_7 = document.querySelector('.pos_7')
let pos_8 = document.querySelector('.pos_8')
let pos_9 = document.querySelector('.pos_9')


function Tictac(){
    let score_count=0;
    let com_count=0;
    let player_count=0;
    let game_count=0;
    let com_pos
    // constructor(){}
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      }
      
    let comPlay = () => {
        // index = index + 1
        com_pos= getRandomIntInclusive(1,9)
        if (game_count%2!=0){
            // if(com_pos==index && com_pos!=9){
            //     document.querySelector(`.pos_${com_pos+1}`).innerText = 'o'
            // }
            // else if(com_pos==index && com_pos==9){
            //     document.querySelector(`.pos_${com_pos-1}`).innerText = 'o'
            // }
            
            if(document.querySelector(`.pos_${com_pos}`).innerText !=''){
                comPlay()
                console.log("mistake")
            }
            else{
                console.log(`pos_${com_pos}`);
                document.querySelector(`.pos_${com_pos}`).innerText = 'o';
                document.querySelector('.message').innerText='Player1\'s turn';
                game_count++
                com_count++


            }
        }else{
            document.querySelector('.message').innerText='Player1\'s turn'

        }
    }

    this.addString = (element) => {
        console.log('Pressed xx')
        // console.log(game_count)
    }
    
    this.restart = () => {
        arrayPosition.forEach(element => element.innerText='')
        player_count=0
        com_count=0
        game_count=0
        document.querySelector('.message').innerText=''

    
    }
    
    this.playGame = (element, index) => {
        
        if(game_count%2==0){
            element.innerText = 'x'
            player_count++
            game_count++
            console.log(player_count)
            document.querySelector('.message').innerText='Computer\'s turn'
            comPlay(index)


        }
        else if(player_count>5){
            document.querySelector('.message').innerText='You have played all your moves'
        }
        else if (game_count%2!=0){
            console.log('whatsss!!!')
            document.querySelector('.message').innerText='Computer\'s turn'

        }
    }
}

let arrayPosition = [
    pos_1,
    pos_2,
    pos_3,
    pos_4,
    pos_5,
    pos_6,
    pos_7,
    pos_8,
    pos_9
]
// for(let i=1; i=9; i++){
//    let `position_${i}` = document.querySelector(`.pos_${i}`)
//     arrayPosition.push(`position_${i}`)
// }
const tictac = new Tictac()

arrayPosition.forEach((element, index) =>{
     element.addEventListener('click', () => tictac.playGame(element))
})

document.querySelector('.start').addEventListener('click', tictac.restart)


//TODO Toggle start and restart button

//TODO Select player or COM
//Use a counter
