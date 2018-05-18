/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops over each feed in allFeeds object to make sure that
         * Feed had URL defined and it is not empty
         */

        it('has URL defined and not empty', function () {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* This test test that loops over each feed in the allFeeds object
         * to make sure that feed has non empty name
         */

        it('has non empty name defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    // Test suite named 'The menu' for hamburger menu in our application

    describe('The menu', function () {
        /*This test ensures that the menu element is
        * hidden by default.
        */
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // This test validates proper functioning of the hamburger menu in our application.

        it('changes visibility on click', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    // Initial Entries test suite.

    describe('Initial Entries', function () {

        //beforeEach is used for testing asynchronous loadFeed()

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        // test for checking at least one entry is present.
        it('are present', function () {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    // New Feed Selection test suite

    describe('New Feed Selection', function () {
        // tests that new content is loaded by loadFeed().

        var feedOne;

        beforeEach(function (done) {
            loadFeed(0, function () {
                feedOne = $('.feed').html();
                done();
            });
        });

        it('should change feed content after loading feed', function (done) {
            loadFeed(1, function () {
                expect($('.feed').html()).not.toEqual(feedOne);
                done();
            });
        });
    });
}());
