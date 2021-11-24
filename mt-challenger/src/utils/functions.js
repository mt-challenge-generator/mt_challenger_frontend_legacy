import { Tokenizer, NNTokenizer, WordPieceTokenizer } from 'nlp-tokenizer'

function tokenizeSentence(inputSentence) {

  let tokenizer = new Tokenizer()

  // list of tokens and "+" signs in between
  const tokens_plus = new Array();

  // tokenize sentence
  const tokens = tokenizer.tokenize( inputSentence );
  //const tokens = ["oui", "non", "tg"];

  // populate list of tokens
  let tLen = tokens.length;
  tokens_plus.push(tokens[0])

  for (let i = 1; i < tLen; i++) {
    tokens_plus.push('+');
    tokens_plus.push(tokens[i]);
	}

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

// function to expand list
function generateSentences(list) {
    return _generateSentences(...list);
}
