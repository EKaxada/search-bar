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
  const [suggestion, setSuggestion] = useState('');

  const onChange = (e) => {
    setPrefix(e.target.value);
    var trie_prefix = e.target.value;
    var found_words = myTrie.find(trie_prefix).sort((a, b) => {
      return a.length - b.length;
    });
    if (found_words.length>0) {
      setSuggestion(found_words[0]);
    } else if(found_words.length === 0){
      setSuggestion('');
    }
  }

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
        type="text"
        name="search-bar2"
        id="search-bar2"
        value={prefix.length>0?suggestion:''}
      />
    </div>
  );
}

export default App;
