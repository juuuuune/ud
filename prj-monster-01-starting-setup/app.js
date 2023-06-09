function getRandomValue(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        };
    },
    computed: {
        monsterBarStyle(){
            return {width: this.monsterHealth+'%'};
        },
        playerBarStyle(){
            return {width: this.playerHealth+'%'};
        },
        mayUseSpecialAttack(){
            if(this.currentRound % 3 === 0){
                return false;
            }
            return true;
        }


    },
    methods: {
        attackMonster(){
            this.currentRound++;
            const attackValue =  getRandomValue(5,12)
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue =  getRandomValue(8,15)
            this.playerHealth -= attackValue;
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue =  getRandomValue(10,25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        }
    }

});

app.mount('#game');