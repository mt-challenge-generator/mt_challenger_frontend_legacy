import { Tokenizer, NNTokenizer, WordPieceTokenizer } from 'nlp-tokenizer';

function tokenizeSentence(inputSentence) {

  let tokenizer = new Tokenizer()

  // list of tokens and "+" signs in between
  const tokens_plus = new Array();

  // tokenize sentence
  const tokens = tokenizer.tokenize( inputSentence );

  // populate list of tokens
  let tLen = tokens.length;
  for (let i = 0; i < tLen; i++) {
    tokens_plus.push('+');
    tokens_plus.push(tokens[i]);
  }
  tokens_plus.push('+')

  return tokens_plus;
}

// helper function
function _generateSentences2(a, b) {
  return [].concat(...a.map(d => b.map(e => [].concat(d, e).join(' '))));
}

// function to generate all sentences with different possible combinations
function _generateSentences(a, b, ...c) {
  return (b ? _generateSentences(_generateSentences2(a, b), ...c) : a);
}

// function to extract buckets from list and expand
function generateSentences(itemList) {
    let bucketList = itemList.map(({bucket})=>bucket);
    const bucketListFilt = bucketList.filter((element) => { return element.length > 0;})
    return _generateSentences(...bucketListFilt);
}
