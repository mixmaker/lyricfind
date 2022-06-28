const fetchFromGaana = async (page) => {
  const link = await page.$('a[href*="gaana.com/lyrics"]');
  if (link) {
    await Promise.all([page.waitForNavigation(), link.click()]);
    const lyrics = await page.evaluate(() => {
      const text = document
        .querySelector(".lyr_data > ._inner > p ")
        .innerHTML.replaceAll("<br>", "\r\n");
      return text;
    });
    return lyrics;
  } else {
    return "Lyrics not found";
  }
};

module.exports = fetchFromGaana;
