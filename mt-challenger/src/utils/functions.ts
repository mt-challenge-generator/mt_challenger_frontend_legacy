import { Tokenizer } from "nlp-tokenizer"; // NNTokenizer, WordPieceTokenizer
import { PLUS } from "./index";
import { TemplateItem } from "@/interfaces/template-item.interface";

export function tokenizeSentence(inputSentence: string): TemplateItem[] {
  const tokenizer = new Tokenizer();

  // list of tokens and "+" signs in between
  const tokens_plus = [];

  // tokenize sentence
  const tokens = tokenizer.tokenize(inputSentence);

  // populate list of tokens
  const tLen = tokens.length;
  for (let i = 0; i < tLen; i++) {
    tokens_plus.push(PLUS);
    tokens_plus.push(tokens[i]);
  }
  tokens_plus.push(PLUS);

  return tokens_plus.map((token) => {
    return {
      label: token,
      bucket: token === PLUS ? [] : [token],
      is_selected: false,
    };
  });
}

// helper function
function _generateSentences2(a: string[], b: string[]) {
  const concated = a.map((d) =>
    b.map((e) => ([] as string[]).concat(d, e).join(" "))
  );
  return ([] as string[]).concat(...concated);
}

// function to generate all sentences with different possible combinations
function _generateSentences(
  a?: string[],
  b?: string[],
  ...c: string[][]
): string[] {
  return b
    ? _generateSentences(_generateSentences2(a as string[], b), ...c)
    : (a as string[]);
}

// function to extract buckets from list and expand
export function generateSentences(
  itemList: TemplateItem[]
): { source: string }[] {
  const bucketList = itemList.map(({ bucket }) => bucket);
  const bucketListFilt = bucketList.filter((element) => {
    return element.length > 0;
  });
  return _generateSentences(...bucketListFilt).map((sentence: string) => {
    return { source: sentence };
  });
}

// toggle the 'is_selected' property of the item at the given index and deselects all the other items in the list
export function deselect_all_else(itemList: TemplateItem[], index = -1): void {
  if (index < 0 || index >= itemList.length) {
    for (const item of itemList) {
      item.is_selected = false;
    }
  } else {
    for (let i = 0; i < index; i++) {
      itemList[i].is_selected = false;
    }
    itemList[index].is_selected = !itemList[index].is_selected;
    for (let i = index + 1; i < itemList.length; i++) {
      itemList[i].is_selected = false;
    }
  }
}
