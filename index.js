
//const receivesAFunction = spy
const receivesAFunction = callbackFunc =>callbackFunc()

const returnsANamedFunction = () => {
    function AFunc() {
    }
    return AFunc;
}

const returnsAnAnonymousFunction = () =>() => {};