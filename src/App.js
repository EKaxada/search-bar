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
  const [predictions, setPredictions] = useState(null);
  const [suggestion, setSuggestion] = useState('');

  const onChange = (e) => {
    setPrefix(e.target.value);
    var trie_prefix = e.target.value;
    var found_words = myTrie.find(trie_prefix).sort((a, b) => {
      return a.length - b.length;
    });
    if (found_words.length>0) {
      setPredictions(found_words);
      setSuggestion(found_words[0]);
    } else if(found_words.length === 0){
      setPredictions(null)
      setSuggestion('');
    }
  }

  if (predictions !== null) {
    var listItems = predictions.map((prediction, index) => (
      <option key={index} value={prediction} />
    ));
  }

  return (
    <div className="App">
      <input
        list="words"
        type="search"
        name="search-bar"
        id="search-bar"
        placeholder="Search..."
        value={prefix}
        onChange={onChange}
      />
      <datalist id="words">{listItems}</datalist>
      <input
        type="search"
        name="search-bar2"
        id="search-bar2"
        value={prefix.length>0?suggestion:''}
      />
    </div>
  );
}

export default App;
