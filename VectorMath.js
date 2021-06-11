let solution = {
    'add': function addVectors(vec1, vec2) {
        return console.log([(vec1[0] + vec2[0]), (vec1[1] + vec2[1])]);
    },
    'multiply': function multiplyVectors(vec1, scalar) {
        return console.log([(vec1[0] * scalar), (vec1[1] * scalar)]);
    },
    'length': function vectorLength(vec1) {
        return console.log(Math.sqrt(Math.pow(vec1[0], 2) + Math.pow(vec1[1], 2)));
    },
    'dot': function vectorsDotProduct(vec1, vec2) {
        return console.log(((vec1[0] * vec2[0]) + (vec1[1] * vec2[1])));
    },
    'cross': function vectorsCrossProduct(vec1, vec2) {
        return console.log(((vec1[0] * vec2[1]) - (vec1[1] * vec2[0])));
    }
}

solution.add([1, 1], [1, 0]);
solution.multiply([3.5, -2], 2);
solution.length([3, -4]);;
solution.dot([1, 0], [0, -1]);
solution.cross([3, 7], [1, 0]);
