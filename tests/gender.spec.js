describe('Gender Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter on gender correctly', function () {
		var mockedList = [{
			name: 'Test',
			gender: 'male'
		}, {
			name: 'Test 2',
			gender: 'female'
		}, {
			name: 'Test 3',
			gender: 'male'
		}];

		var results = $filter('gender')(mockedList, 'male');

		expect(results.length).toBe(2);
		expect(results[0].name).toBe('Test');
	});
});
