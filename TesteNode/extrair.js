var fs = require('fs');

  fs.readFile('paraestudar.txt', 'utf-8', function(err, data){
    if(err){
      throw err;
    }
    var linhas = data.split(/\r?\n/);
    linhas.forEach(function(linha){
        var duasposicoes = linha.toString().substring(0,3);
        console.log(duasposicoes);
    })
})