function gender() {
	return function (sex) {
		return sex.filter(function (item) {
			return item.gender === sex;
		});
	};
}

angular
	.module('app')
	.filter('gender', gender);