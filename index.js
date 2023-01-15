function superbowlWin(record) {
    const wonGame = record.find(rec => rec.result === "W");
    if(wonGame){
        return wonGame.year;
     }
     return;
}