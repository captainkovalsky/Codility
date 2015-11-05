function solution(A) { 
	var N = A.length;
	var realSum = A.reduce(function (prev, current) { return prev + current; }, 0);
	var shouldBe = (N + 1) * (N + 2) / 2; //Add +1 because array is zero-base
	return shouldBe - realSum;
}

var test = [2, 3, 1, 5];

var result = solution(test);
console.log('result:%s  %d', result === 4 ? 'OK' : 'WRONG', result);