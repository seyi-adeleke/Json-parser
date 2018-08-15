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
    const isValidJson: boolean = isJSON(text);
    if(isValidJson) {
        const arrayValues = [].concat.apply([], (<any>Object).values(JSON.parse(text)));
        arrayValues.forEach((element: any, index: number) => {
            // this means its a child
            if (element.parent_id !== null) {
                //now we find the parent and push it to the child array of that element
                const parent = arrayValues.find((parent: any) => {
                    return parent.id === element.parent_id;
                })
                if (parent !== undefined) {
                    parent.children.push(element);
                    output.push(parent)
                }
            }
        });
        return JSON.stringify(output[0], null, 2)
    }
}

const utils = {
    parseJson,
    isJSON,
}

export default utils;