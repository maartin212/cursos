const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');
const writeStream = fs.createWriteStream('quotes.csv');

async function init() {
  const $ = await request({
    uri: 'http://quotes.toscrape.com/',
    transform: (body) => cheerio.load(body),
  });

  // const websiteTitle = $('title');
  // console.log(websiteTitle.html());

  // const websiteHeading = $('h1');
  // console.log(websiteHeading.text().trim());

  // const quote = $('.quote').find('a');
  // console.log(quote.html());

  // const thirdQuote = $('.quote').next().next();
  // console.log(thirdQuote.html());

  // const container = $('.row .col-md-8').parent().next();
  // console.log(container.html());

  // const quotes = $('.quote span.text').each((i, el) => {
  //   console.log(i, $(el).text()),
  //   const quote_text = $(el).text();
  //   const qt = quote_text.replace(/(^\“|\”$)/g, '');
  //   console.log(i, qt);
  // });

  writeStream.write('Quot|Author|Tags\n');
  $('.quote').each((i, el) => {
    const text = $(el)
      .find('span.text')
      .text()
      .replace(/(^\“|\”$)/g, '');

    const author = $(el).find('span small.author').text();

    const tags = [];
    const tag = $(el)
      .find('.tags a.tag')
      .each((i, el) => {
        tags.push($(el).text());
      });
    // console.log(tags);
    // console.log(tags.join(', '));

    writeStream.write(`${text}|${author}|${tags}\n`);
  });
}
init();
