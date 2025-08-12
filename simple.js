const tokenToId = new Map();
const idToToken = new Map();

specialTokens = {
  "<PAD>": 0,
  "<UNK>": 1,
  "<START>": 2,
  "<END>": 3,
};

let nextId = 4;

for (const [token, id] of Object.entries(specialTokens)) {
  tokenToId.set(token, id);
  idToToken.set(id, token);
}

//preprocessing
function preproces(query) {
  //preprocess text
  query = query.trim().toLowerCase();
  query = query
    .replace(/[^a-z0-9\s]/g, "") // remove punctuation
    .replace(/\s+/g, " "); // normalize spaces

  return query;
}

const tokenFrequency = new Map();
// learning ftokenToId

function learntokenToId(text) {
  const tokens = text.split(" ");

  for (const token of tokens) {
    if (!tokenToId.has(token)) {
      tokenToId.set(token, nextId);
      idToToken.set(nextId, token);
      nextId++;
    }
    tokenFrequency.set(token, (tokenFrequency.get(token) || 0) + 1);
  }
}

console.log(idToToken);

function encode(query) {
  const cleanText = preproces(query);
  learntokenToId(cleanText);
  const tokens = cleanText.split(" ");
  console.log(tokenToId);

  return tokens.map((token) => tokenToId.get(token) || tokenToId.get("<UNK>"));
}

function decode(ids) {
  return ids.map((id) => idToToken.get(id));
}

learntokenToId(preproces("Hello, my name is Tejas"));
learntokenToId(preproces("My friend is learning JavaScript"));

const arr = encode("Hello mre vn ? jfnv,");
const arr2 = decode(arr);
console.log("Ids tokens ", arr);
console.log("Decoded ", arr2);
