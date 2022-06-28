
# Lyricfind

Find lyrics of any song on the go...


## Installation

Install lyricfind with npm

```bash
  npm install lyricfind
```

using yarn
```bash
  yarn add lyricfind
```
## Usage/Examples

```javascript
const LyricFind = require('lyricfind');

const MyFunc = async (query) => {
  const lyrics = await LyricFind.getLyrics(query);
  console.log(lyrics);
};

MyFunc("yaad piya ki aane lagi");
```

## API Reference

#### Default search

```javascript
  const lyrics = LyricFind.getLyrics(query)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` | **Required**. name of song |

#### Search in [Gaana]('https://gaana.com')

```javascript
  const gaanaLyrics = LyricFind.lyricsFromGaana(query)
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `string` | **Required**. name of song |


