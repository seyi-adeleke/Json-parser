function isJSON(text: string){
    try{
        JSON.parse(text);
        return true;
    }
    catch (error){
        return false;
    }
}

function parseJson(text: string) {
    const output: Array<object> = [];
    const jsonData: object = JSON.parse(text);
    const arrayValues = [].concat.apply([], (<any>Object).values(jsonData));

    arrayValues.map((value: any, index: number) => {
        if (value.parent_id !== null) {
            const particluarOne: any = arrayValues.find((elem: any) => {
                return elem.id === value.parent_id
            })
            particluarOne.children.push(value);
            output.push(particluarOne);
        }
    });

    return JSON.stringify(output[0], null, 2)
}

const utils = {
    parseJson,
    isJSON,
}

export default utils;