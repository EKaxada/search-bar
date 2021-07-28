import { useState } from "react";
import Trie from "./trie.js";
import "./App.css";
var myTrie = new Trie();
myTrie.insert("car");
myTrie.insert("helium");
myTrie.insert("carpet");
myTrie.insert("hello");
myTrie.insert("world");

function App() {
  const [prefix, setPrefix] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const onChange = (e) => {
    var value = e.target.value;
    setPrefix(value);
    var words = value.split(" ");
    var trie_prefix = words[words.length - 1];
    var found_words = myTrie.find(trie_prefix).sort((a, b) => {
      return a.length - b.length;
    });
    var first_word = found_words[0];
    if (value !== "" && value[value.length - 1] !== " ") {
      if (first_word!= null) {
        var remainder = first_word.slice(trie_prefix.length);
        setSuggestion(value + remainder);
      }
    }
  };

  return (
    <div className="App">
      <input
        list="words"
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Search..."
        value={prefix}
        onChange={onChange}
      />
      <input
        readOnly={true}
        type="text"
        name="search-bar2"
        id="search-bar2"
        value={suggestion}
      />
    </div>
  );
}

export default App;
