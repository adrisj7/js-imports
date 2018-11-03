function factorial(n) {
	var m = 1;
	for(var i = 1; i <= n; i++)
		m*=i;
	return m;
}
function perm(n, k) {
	return factorial(n)/factorial(n-k);
}
function comb(n, k) {
	return perm(n, k)/factorial(k);
}
