import React from "react";

function App() {
  return (
    <div className="App">
      <header>
        <hgroup>
          <h1>Header</h1>
          <h2>Subheader</h2>
        </hgroup>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">Menu Option 1</a>
          </li>
          <li>
            <a href="#">Menu Option 2</a>
          </li>
        </ul>
      </nav>
      <section>
        <article>
          <header>
            <h1>Article #1</h1>
          </header>
          <section>This is the first article.</section>
        </article>
        <article>
          <header>
            <h1>Article #2</h1>
          </header>
          <section>This is the second article.</section>
        </article>
      </section>
      <aside>
        <section>
          <h1>Links</h1>
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
          </ul>
        </section>
        <figure>
          <img
            width="85"
            height="85"
            src="http://domain.tld/path/to/image.jpg"
            alt="foobar"
          />
          <figcaption>Foobar</figcaption>
        </figure>
      </aside>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
