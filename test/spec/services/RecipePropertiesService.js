'use strict';

describe('Service: RecipePropertiesService', function () {

    // load the service's module
    beforeEach(module('ibmBiginsightsUiApp'));

    // instantiate service
    var mRecipePropertiesService;
    beforeEach(inject(function (RecipePropertiesService) {
        mRecipePropertiesService = RecipePropertiesService;
    }));

    it('should exist', function () {
        expect(!!mRecipePropertiesService).toBe(true);
    });

});
