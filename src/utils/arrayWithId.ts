export function stringArrayToObjArray(array: string[]): { id: number; value: string }[] {
    return array.map((item, index) => ({ id: index, value: item }));
  }
  