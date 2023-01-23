import "./App.css";
import { Counter } from "./features/counter/Counter";
import { AddPostForm } from "./features/posts/AddPostForm";
import { PostsList } from "./features/posts/PostsList";

function App() {
  return (
    <div className="App">
      <h1>Redux test playground</h1>
      <section>
        <h2>Counter - 1st </h2>
        <Counter />
      </section>
      <section>
        <h2>Post List - 2nd</h2>
        <AddPostForm />
        <PostsList />
      </section>
    </div>
  );
}

export default App;
