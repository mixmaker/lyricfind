const puppeteer = require("puppeteer");
const fetchFromGaana = require("./gaana");

const getLyrics = async (searchQuery) => {
  if (!searchQuery || searchQuery === "") return "Query cannot be empty";
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const query = `${searchQuery} lyrics`;
  try {
    await page.goto(`https://google.com/search?q=${query}`);

    const lyr = await page.evaluate(() =>
      document.querySelectorAll(".bbVIQb > .ujudUb").forEach(
        (div) => [...div.querySelectorAll("span")].map((span) => span.innerHTML)
        // .replace(/^\s*\n/gm, "")
      )
    );
    if (lyr) {
      await browser.close();
      return lyr;
    }
    if (!lyr) {
      const gaanaLyr = await fetchFromGaana(page);
      await browser.close();
      return gaanaLyr;
    }
  } catch (e) {
    if (e) {
      await browser.close();
      return e.message;
    }
  }
};

const lyricsFromGaana = async (searchQuery) => {
  if (!searchQuery || searchQuery === "") return "Query cannot be empty";
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const query = `${searchQuery} lyrics gaana.com`;
  try {
    await page.goto(`https://google.com/search?q=${query}`);
    const gaanaLyr = await fetchFromGaana(page);
    await browser.close();
    return gaanaLyr;
  } catch (e) {
    return e.message;
  }
};
const LyricFind = { getLyrics, lyricsFromGaana };
module.exports = LyricFind;
