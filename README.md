## Feed Reader Test Suite

Collates RSS feeds from a number of popular web development sites. Needs to be run within a browser (tested on Windows 10, Linux Mint 18.04 in both Chrome and Firefox).

### Installation

Clone the Git repo [here](https://github.com/hfmckenna/frontend-nanodegree-feedreader) then open the /index.html file within your browser.

### Testing

Project includes a Jasmine test suite to ensure source feeds are loading. The tests are basic, testing for a single RSS entry to validate that the feed is responding. Tests could be added for the following.

- Test for an error response from the source.
- Improve 'has URLs' test regex.
- Some tests invoke methods on page load, less than ideal.