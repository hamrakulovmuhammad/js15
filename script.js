
let say = +prompt('фибоначчи')

function fl(n) {
    let f1 = 0, f2 = 1, cf = 1;
    for (let i = 1; i <= n; i++) {
        cf = f1 + f2;
        f1 = f2;
        f2 = cf;
    }
    return cf;

}
alert(fl(say))
