export function stringArrayToObjArray(array: string[]){
    return array.map((item, index) => ({id: index, name: item}))
}