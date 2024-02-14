{
    function deepClone(obj, newObj) {
        for (key in obj) {
            if (typeof(obj[key]) === 'object' && obj[key] !== null) {
                newObj[key] = {};
                deepClone(obj[key], newObj[key]);
            } else {
            newObj[key] = obj[key];
            }
        }
    }

    const firstObj = {
        first : 5,
        second : 'dfsd',
        third21 : null,
        forth : -321,
        third : {
            fifth : 234,
            sixth : 'dsd',
        }
    }
    const secondObj = {}

    deepClone(firstObj, secondObj);
    console.log(firstObj);
    console.log(secondObj);
}