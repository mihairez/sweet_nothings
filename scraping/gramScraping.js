// scraping logic:
// scroll an incremental amount of pixels.
// save all the links matching the /p/ pattern
// wait a random amount of time to mimic human behaviour
// don't stop till reaching the bottom


// input min and a maximum scroll wait time.
// this is random in order to mimic human behaviour.
// this is in milliseconds
var MIN_SCROLL_INTERVAL = 3000;
var MAX_SCROLL_INTERVAL = 5000;

// how many pixels should the script scroll
// choosing a value to high will result in missing items with the viewport.
var SCROLL_STEP = 300;

// array to hold the URLs
var itemUrls = [];

// scroll the page function
function scrollPage() {
  // Scroll down by SCROLL_STEP number of pixels
  window.scrollBy(0, SCROLL_STEP);

  // Wait for a random amount of time between MIN_SCROLL_INTERVAL and MAX_SCROLL_INTERVAL
  var scrollInterval = Math.floor(Math.random() * (MAX_SCROLL_INTERVAL - MIN_SCROLL_INTERVAL + 1)) + MIN_SCROLL_INTERVAL;
  setTimeout(function() {
    // Extract the URLs of the items on the page
    var items = document.querySelectorAll('a[href^="/p/"]');
    for (var i = 0; i < items.length; i++) {
      var url = items[i].href;
      // Add the URL to the array if not present
      if (itemUrls.indexOf(url) < 0) {
        itemUrls.push(url);
      }
    }

    // Check if the bottom of the page has been reached
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      // Remove any duplicate URLs
      itemUrls = itemUrls.filter(function(item, pos) {
        return itemUrls.indexOf(item) == pos;
      });

      // Log the array of item URLs to the console
      console.log(itemUrls);
    } else {
      // Scroll down again after a random delay
      scrollPage();
    }
  }, scrollInterval);
}

// Call the scrollPage function to start the scroll process and collect the links
scrollPage();
