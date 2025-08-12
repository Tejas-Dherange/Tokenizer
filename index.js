const readline = require("readline");

class Tokenizer {
  constructor() {
    this.tokenToId = {};
    this.idToToken = {};
    this.tokenFrequency = {};
    this.specialTokens = {
      "<PAD>": 0,
      "<UNK>": 1,
      "<START>": 2,
      "<END>": 3,
    };

    // Initialize special tokens in vocab
    for (const [token, id] of Object.entries(this.specialTokens)) {
      this.tokenToId[token] = id;
      this.idToToken[id] = token;
    }

    this.nextId = Object.keys(this.specialTokens).length; // start after special tokens
  }

  // Normalize and clean text
  preprocess(text) {
    return text
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "") // remove punctuation
      .replace(/\s+/g, " "); // normalize spaces
  }

  // Learn vocabulary from new text
  learnVocab(text) {
    const cleanText = this.preprocess(text);
    const tokens = cleanText.split(" ");

    for (const token of tokens) {
      if (!this.tokenToId[token]) {
        this.tokenToId[token] = this.nextId;
        this.idToToken[this.nextId] = token;
        this.nextId++;
      }
      this.tokenFrequency[token] = (this.tokenFrequency[token] || 0) + 1;
    }
  }

  // Encode: text → IDs
  encode(text) {
    const cleanText = this.preprocess(text);
    this.learnVocab(cleanText);
    const tokens = cleanText.split(" ");
    return tokens.map(
      (token) => this.tokenToId[token] ?? this.specialTokens["<UNK>"]
    );
  }

  // Decode: IDs → text
  decode(ids) {
    return ids.map((id) => this.idToToken[id] ?? "<UNK>").join(" ");
  }

  // Get current vocabulary
  getVocab() {
    return this.tokenToId;
  }
}

const tokenizer = new Tokenizer();

// Step 1: Learn vocab from first text
tokenizer.learnVocab("Hello, my name is Tejas");
tokenizer.learnVocab("My friend is learning JavaScript");

// Step 2: Encode and decode
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter query for tokenzation ", (query) => {
  //   console.log(`Hello, ${name}!`);
  const encoded = tokenizer.encode(query);

  const decoded = tokenizer.decode(encoded);

  console.log("Encoded:", encoded);
  console.log("Decoded:", decoded);

  rl.close();
});
