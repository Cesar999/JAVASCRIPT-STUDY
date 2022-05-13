
async function doMagic() {
    const newArr = [1, 2, 3, 4, 5];
    const asyncRes = await newArr.reduce(async (acc, num) => {
        const newAcc = await acc;
        console.log(num);
        return new Promise((res) => setTimeout(()=>res(newAcc + num), 1000));
    }, 0);

    console.log(asyncRes);
}

doMagic();