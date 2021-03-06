$(function() {
	function getBrowserInfo(n) {
		var ua = navigator.userAgent.toLowerCase(),
			s,
			name = '',
			ver = 0;
		(s = ua.match(/msie ([\d.]+)/)) ? _set("ie", _toFixedVersion(s[1])):
			(s = ua.match(/firefox\/([\d.]+)/)) ? _set("firefox", _toFixedVersion(s[1])) :
			(s = ua.match(/chrome\/([\d.]+)/)) ? _set("chrome", _toFixedVersion(s[1])) :
			(s = ua.match(/opera.([\d.]+)/)) ? _set("opera", _toFixedVersion(s[1])) :
			(s = ua.match(/version\/([\d.]+).*safari/)) ? _set("safari", _toFixedVersion(s[1])) : 0;

		function _toFixedVersion(ver, floatLength) {
			ver = ('' + ver).replace(/_/g, '.');
			floatLength = floatLength || 1;
			ver = String(ver).split('.');
			ver = ver[0] + '.' + (ver[1] || '0');
			ver = Number(ver).toFixed(floatLength);
			return ver;
		}

		function _set(bname, bver) {
			name = bname;
			ver = bver;
		}
		return(n == 'n' ? name : (n == 'v' ? ver : name + ver));
	};
	if(Number(getBrowserInfo("v")) < 9 && getBrowserInfo("n") == "ie") {
		location.href = "/view/old";
	}
});