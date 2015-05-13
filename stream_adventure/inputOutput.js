function inOut(streamIn){
    streamIn.pipe(process.stdout);
}

inOut(process.stdin);