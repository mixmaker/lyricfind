#! /usr/bin/env node

const LyricFind = require("..");

const args = process.argv.slice(2, process.argv.length);

const mainFunc = async() => {
  const searchStr = args[0];
  if (!searchStr || searchStr === "") return console.log("Invalid input");
  const lyrics = await LyricFind.getLyrics(searchStr);
  console.log(lyrics)
};
mainFunc();
