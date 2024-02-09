let tanya=true;
while(tanya){
    let player = prompt('pilih salah satu gajah semut atau orang');

    let comp = Math.floor(Math.random() * 10);
    if (comp <= 3) {
        comp = 'gajah'
    } else if (comp >= 4 && comp <= 6) {
        comp = 'semut';
    } else {
        comp = 'orang';
    }
    
    if (player == 'gajah' && comp == 'orang') {
        alert(`pilihan kamu ${player},pilihan computer ${comp} \n selamat kamu menang`);
      
    }else if(player == 'orang' && comp == 'gajah'){
        alert(`pilihan kamu ${player},pilihan computer ${comp} \n maaf anda kalah`);
    }else if(player == 'semut' && comp == 'orang'){
        alert(`pilihan kamu ${player},pilihan computer ${comp} \n maaf anda kalah`);
    }else if(player == 'orang' && comp == 'semut'){
        alert(`pilihan kamu ${player},pilihan computer ${comp} \n selamat anda menang`);
    }else if(player == 'orang' && comp == 'orang'){
        alert(`pilihan kamu ${player},pilihan computer ${comp} \n anda seri`);
    }else if(player == 'gajah' && comp == 'gajah'){
        alert(`pilihan kamu ${player},pilihan computer ${comp} \n anda seri`);
    }else if(player == 'semut' && comp == 'semut'){
        alert(`pilihan kamu ${player},pilihan computer ${comp} \n anda seri`);
    }

    tanya= confirm('main lagi?');
}
alert ('terimakah sudah bermain')
