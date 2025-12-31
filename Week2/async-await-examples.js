function settimeoutpromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function solution() {
    await settimeoutpromisified(1000)
    console.log("hi");
    await settimeoutpromisified(3000);
    console.log("Hellow there");
    await settimeoutpromisified(5000);
    console.log("DSA");
}

solution();