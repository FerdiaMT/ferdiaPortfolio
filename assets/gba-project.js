(() => {
  const basePath = location.pathname.startsWith("/ferdiaPortfolio/") ? "/ferdiaPortfolio/" : "/";
  const gbaHash = "#/projects/GBA";
  const gbaPath = `${basePath}${gbaHash}`;
  const standaloneGbaPage = location.pathname.endsWith("/gba-project.html");
  const gbaDocumentPath = `${basePath}gba-project.html`;
  const asset = (path) => `${basePath}${path}`;

  const isGbaRoute = () => standaloneGbaPage || location.hash.toLowerCase() === gbaHash.toLowerCase();

  const gbaRow = () => `
    <article class="project-row gba-project-row" data-gba-project>
      <div class="project-index">04</div>
      <a class="project-image" href="${gbaDocumentPath}" aria-label="Play the Game Boy Advance emulator">
        <img src="${asset("projects/gba.png")}" alt="Game Boy Advance emulator gameplay">
      </a>
      <div class="project-copy">
        <h2><a href="${gbaDocumentPath}">Game Boy Advance Emulator</a></h2>
        <p>A browser-ready Game Boy Advance emulator written in C++. Its WebAssembly build runs the BIOS, cartridge, CPU, PPU and input loop directly in the browser.</p>
        <ul><li>C++</li><li>WebAssembly</li><li>Emscripten</li><li>CMake</li></ul>
      </div>
      <div class="project-links">
        <a href="${gbaDocumentPath}">↗ Play</a>
        <a href="https://github.com/FerdiaMT/GameboyAdvanced" target="_blank" rel="noreferrer">↗ Source</a>
      </div>
    </article>`;

  const addProjectRow = () => {
    const list = document.querySelector(".project-list");
    if (!list) return;
    if (!list.querySelector("[data-gba-project]")) list.insertAdjacentHTML("afterbegin", gbaRow());

    const rows = [...list.querySelectorAll(".project-row")];
    const dmgProject = rows
      .find((row) => row.textContent.includes("DMG Game Boy Emulator"));
    if (dmgProject && rows.at(-1) !== dmgProject) list.append(dmgProject);
    [...list.querySelectorAll(".project-row")].forEach((row, index) => {
      const number = row.querySelector(".project-index");
      const expectedNumber = String(index + 1).padStart(2, "0");
      if (number && number.textContent !== expectedNumber) number.textContent = expectedNumber;
    });

    const count = document.querySelector(".page-footer span");
    if (count) count.textContent = "04 projects";
  };

  const createHeader = () => {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <a class="wordmark" href="${basePath}"><span>FT</span>Ferdia Treacy</a>
      <nav class="main-nav" aria-label="Main navigation">
        <a class="nav-link" href="${basePath}">About</a>
        <a class="nav-link is-active" href="${basePath}">Projects</a>
        <a class="nav-link" href="${asset("Ferdia_Matti_Treacy_CV.pdf")}">CV</a>
      </nav>
      <a class="header-contact" href="mailto:ferdiatreacy@gmail.com">Contact</a>`;
    return header;
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
    if (!root) return false;

    document.documentElement.classList.add("gba-project-route");
    document.body.classList.add("gba-project-route");
    const header = existingHeader ? existingHeader.cloneNode(true) : createHeader();
    updateHeaderLinks(header);
    root.replaceChildren();
    const shell = document.createElement("div");
    shell.className = "site-shell";
    shell.append(header);
    shell.insertAdjacentHTML("beforeend", `
      <main class="content-page gba-page page-enter">
        <header class="gba-play-heading">
          <h1>Game Boy Advance Emulator</h1>
          <a href="https://github.com/FerdiaMT/GameboyAdvanced" target="_blank" rel="noreferrer">↗ View source</a>
        </header>
        <section class="gba-player" aria-label="Playable Game Boy Advance emulator">
          <div class="gba-player-frame"><iframe src="${asset("gba/index.html")}" title="Playable Game Boy Advance emulator" scrolling="no"></iframe></div>
        </section>
      </main>`);
    root.append(shell);
    return true;
  };

  const scheduleProjectRow = () => {
    let attempts = 0;
    const tryAdd = () => {
      if (document.querySelector(".project-list")) {
        addProjectRow();
        return;
      }
      if (++attempts < 50) window.setTimeout(tryAdd, 50);
    };
    tryAdd();
  };

  const boot = () => {
    if (isGbaRoute()) {
      if (standaloneGbaPage) history.replaceState(null, "", gbaPath);
      showGbaProject();
      return;
    }
    scheduleProjectRow();
    document.addEventListener("click", (event) => {
      if (event.target.closest("a.nav-link")) window.setTimeout(scheduleProjectRow, 0);
    });
    window.addEventListener("popstate", scheduleProjectRow);
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
