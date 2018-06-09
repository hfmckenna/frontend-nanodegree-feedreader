$(function () {
    /* This first suite basically ensures that we have defined an array of
     * objects to loop through and that each object has a name and URL. These
     * will be used to dynamically generate the text and links in HTML.
     */
    describe('RSS Feeds', function () {
        /* Ensures that firstly there is a variable declared and that
         * it is an array with at least 1 entry.
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Checks that a URL is present within each entry and that it
         * looks like a URL using Regex. There are many guides online for
         * regex matching as many URL permutations as possible, not all are
         * simple to implement in JS so this is a reasonable compromise.
         */
        it('have urls', function () {
            for (let object of allFeeds) {
                expect(object.url).toBeDefined();
                expect(object.url).toMatch(/(http|https):\/\/.*?\./);
            }
        });


        /* Similar to the URL, checks the name contains some kind of string.
         */
        it('have names', function () {
            for (let object of allFeeds) {
                expect(object.name).toBeDefined;
                // Might need further conditions to be tested
                expect(object.name).not.toBe('');
            }
        });


    });


    /* Testing the UI behaves appropriately. */
    describe('The menu', function () {
        /* Simply tests that CSS is used to hide the menu. Changes to the CSS
         * will not be checked. Could be worth adding conditions to ensure a 
         * negative, off canvas value is set for Translated3d.
         */

        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })

        //Invokes methods but works fine.
        it('displays or hides when clicked upon', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);;
        })
    });
    /* Make sure the app initialises properly. */
    describe('Initial Entries', function () {
        /* Async testing to make sure that once the feed info has been 
         * requested that it is successful.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });
        //Could simply have found document.getElementsByClassName('entry') but
        //this confirms the relationship as well, just in case of changes.
        it('should contain at least one entry', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* Another async test to make sure the content updates when a new feed loads. */
    describe('New Feed Selection', function () {
        var oldFeed,
            newFeed;

        beforeEach(function (done) {
            loadFeed(0, function () {
                oldFeed = $('.feed').html();
            });
            loadFeed(1, function () {
                newFeed = $('.feed').html();
                done();
            });
        });

        it('should load new content.', function () {
            expect(oldFeed).not.toEqual(newFeed);
        });

        afterEach(function () {
            loadFeed(0);
        })

    });

}());