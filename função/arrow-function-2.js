function Pessoa(){
    this.idade = 0

    setInterval(() => { // arrow funtion 
        this.idade ++
        console.log(this.idade) // p this não muda
    }, 1000)
}

new Pessoa