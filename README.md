
# 📝 Custom Tokenizer in JavaScript

A simple tokenizer built in **JavaScript (Node.js)** that:

* **Learns vocabulary** from given text
* Assigns **unique IDs** to tokens
* Supports **special tokens** (`<PAD>`, `<UNK>`, `<START>`, `<END>`)
* Can **encode** text into token IDs and **decode** IDs back into text

---

## 📌 Features

* **Automatic vocabulary learning** from input text
* **Preprocessing**: lowercasing, punctuation removal, space normalization
* **Special token handling**
* **Bidirectional mapping**: text ↔ IDs
* **Token frequency tracking**

---

## 📂 Project Structure

```
.
├── index.js   # Main source code
├── README.md      # Documentation

```

---

## ⚙️ Setup

### 1️⃣ Clone the Repository

```bash
git clone [https://github.com/yourusername/custom-tokenizer-js.git](https://github.com/Tejas-Dherange/Tokenizer)
cd Tokenizer
```

### 2️⃣ Install Node.js (if not already installed)

[Download & Install Node.js](https://nodejs.org/)

### 3️⃣ Run the Program

```bash
node index.js
```

---

## 🚀 Usage Example

### Input

```
Enter query for tokenization: Hello mre vn ? jfnv,
```

### Output

```
Encoded: [ 4, 1, 1, 1, 1 ]
Decoded: hello mre vn <UNK> jfnv <UNK>
```

---

## 🛠 Code Overview

### Main Methods

* **`preprocess(text)`** → Cleans and normalizes text
* **`learnVocab(text)`** → Learns new tokens and updates vocabulary
* **`encode(text)`** → Converts text to token IDs
* **`decode(ids)`** → Converts IDs back to text
* **`getVocab()`** → Returns the vocabulary map

---

## 📸 Screenshots

**1. Encoding & Decoding Example**
<img width="1917" height="740" alt="image" src="https://github.com/user-attachments/assets/e2319192-c484-4584-b613-86112393c222" />

