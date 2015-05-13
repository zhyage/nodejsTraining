function getShortMessages(obj){
    var res = [];
    obj.filter(function(ele){
        (ele.message.length < 50) ? res.push(ele.message) : console.info("");
    })
    return res;
}

module.exports = getShortMessages