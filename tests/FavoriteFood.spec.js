describe('Favorite Food Filter', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));

  it('should filter the foods', function () {
      var mockedList = [{name: 'dave', favoriteFood: 'pizza'}, {name: 'peter', favoriteFood: 'burger'}]
      var results = $filter('favoriteFood')(mockedList, 'pizza');
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('dave');
  });

});