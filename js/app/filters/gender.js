function gender() {
	return function (items, gender) {
		return items.filter(function (item) {
			return item.gender === gender;
		});
	};
}

angular
	.module('app')
	.filter('gender', gender);