(() => {
  const basePath = "/ferdiaPortfolio/";
  const gbaHash = "#/projects/GBA";
  const gbaPath = `${basePath}${gbaHash}`;
  const asset = (path) => `${basePath}${path}`;

  const isGbaRoute = () => location.hash.toLowerCase() === gbaHash.toLowerCase();

  const gbaRow = () => `
    <article class="project-row gba-project-row" data-gba-project>
      <div class="project-index">04</div>
      <a class="project-image" href="${gbaPath}" aria-label="Play the Game Boy Advance emulator">
        <img src="${asset("projects/gba.png")}" alt="Game Boy Advance emulator gameplay">
      </a>
      <div class="project-copy">
        <h2><a href="${gbaPath}">Game Boy Advance Emulator</a></h2>
        <p>A browser-ready Game Boy Advance emulator written in C++. Its WebAssembly build runs the BIOS, cartridge, CPU, PPU and input loop directly in the browser.</p>
        <ul><li>C++</li><li>WebAssembly</li><li>Emscripten</li><li>CMake</li></ul>
      </div>
      <div class="project-links">
        <a href="${gbaPath}">↗ Play</a>
        <a href="https://github.com/FerdiaMT/GameboyAdvanced" target="_blank" rel="noreferrer">↗ Source</a>
      </div>
    </article>`;

  const addProjectRow = () => {
    const list = document.querySelector(".project-list");
    if (!list || list.querySelector("[data-gba-project]")) return;
    list.insertAdjacentHTML("beforeend", gbaRow());
    const count = document.querySelector(".page-footer span");
    if (count) count.textContent = "04 projects";
  };

  const updateHeaderLinks = (header) => {
    header.querySelectorAll("a").forEach((link) => {
      const label = link.textContent.trim();
      if (label === "About" || label === "Projects") link.href = basePath;
      if (label === "CV") link.href = asset("Ferdia_Matti_Treacy_CV.pdf");
      if (label === "Contact") link.href = "mailto:ferdiatreacy@gmail.com";
      if (label.includes("Ferdia Treacy")) link.href = basePath;
    });
  };

  const showGbaProject = () => {
    const root = document.getElementById("root");
    const existingHeader = document.querySelector(".site-header");
    if (!root || !existingHeader) return false;

    const header = existingHeader.cloneNode(true);
    updateHeaderLinks(header);
    root.replaceChildren();
    const shell = document.createElement("div");
    shell.className = "site-shell";
    shell.append(header);
    shell.insertAdjacentHTML("beforeend", `
      <main class="content-page projects-page page-enter">
        <header class="page-heading">
          <div>
            <p class="eyebrow">Systems / WebAssembly</p>
            <h1>Game Boy<br><em>Advance.</em></h1>
          </div>
          <p>A cycle-driven Game Boy Advance emulator built in modern C++ and compiled to WebAssembly for the browser.</p>
        </header>
        <section class="project-list" aria-label="Game Boy Advance emulator">
          <article class="project-row">
            <div class="project-index">01</div>
            <div class="project-image"><img src="${asset("projects/gba.png")}" alt="Game Boy Advance emulator gameplay"></div>
            <div class="project-copy">
              <h2>Play in the browser.</h2>
              <p>The page runs the actual emulator and bundled cartridge. Click the display, then use Z and X for A and B, arrow keys for the D-pad, Enter for Start, and Backspace for Select.</p>
              <ul><li>C++</li><li>WebAssembly</li><li>Emscripten</li><li>PPU rendering</li></ul>
            </div>
            <div class="project-links"><a href="https://github.com/FerdiaMT/GameboyAdvanced" target="_blank" rel="noreferrer">↗ Source</a></div>
          </article>
        </section>
        <section class="gba-player" aria-label="Playable Game Boy Advance emulator">
          <div class="gba-player-meta"><span>Super Mario Advance</span><span>Click the display to play</span></div>
          <div class="gba-player-frame"><iframe src="${asset("gba/index.html")}" title="Playable Game Boy Advance emulator" allowfullscreen></iframe></div>
          <p class="gba-note">This build runs locally within the portfolio: no external emulator page or download is required.</p>
        </section>
        <footer class="page-footer"><span>Game Boy Advance emulator</span><a href="${basePath}">Back to portfolio ↗</a></footer>
      </main>`);
    root.append(shell);
    return true;
  };

  const render = () => {
    if (isGbaRoute()) {
      if (!showGbaProject()) window.setTimeout(render, 25);
      return;
    }
    addProjectRow();
  };

  window.addEventListener("load", () => {
    render();
    const observer = new MutationObserver(render);
    observer.observe(document.getElementById("root"), { childList: true, subtree: true });
  });

  window.addEventListener("hashchange", () => {
    if (isGbaRoute()) render();
    else location.assign(basePath);
  });
})();
