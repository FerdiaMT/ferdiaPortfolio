(() => {
  const projects = [
    {
      title: "Microsoft Subtitle Translator",
      summary:
        "A full-stack subtitle translation and editing tool built by a team of six over eight weeks with Microsoft mentorship. It supports subtitle upload, translation, editing and export.",
      image: "projects/mstranslator.PNG",
      alt: "Microsoft Subtitle Translator application interface",
      stack: ["React", "JavaScript", "MongoDB", "Azure"],
      source: "https://github.com/Shelja-Pugaliya/subtitle-translator",
    },
    {
      title: "ContextDeck",
      summary:
        "A language-learning platform built around a durable, fault-tolerant processing pipeline. A Go API, Postgres job queue and independent worker fleet use leases, retries and idempotent recovery.",
      image: "projects/contextdeck.png",
      alt: "ContextDeck language-learning dashboard",
      stack: ["Go", "PostgreSQL", "Docker", "Distributed systems"],
      source: "https://github.com/FerdiaMT/contextdeck",
      live: "https://52-17-244-107.sslip.io/app",
    },
    {
      title: "DMG Game Boy Emulator",
      summary:
        "A Game Boy emulator built from scratch in modern C++ with SDL3. It models cycle-accurate CPU, PPU, memory and LCD timing, including pixel FIFO rendering, and passes the CPU instruction test suite.",
      image: "projects/tetris.png",
      alt: "Tetris running in Ferdia's Game Boy emulator",
      stack: ["C++", "SDL3", "CMake", "Assembly"],
      source: "https://github.com/FerdiaMT/Gameboy_Emu_CPP",
    },
  ];

  const applyProjectRefresh = () => {
    const list = document.querySelector('[aria-label="Selected projects"]');
    if (!list) return;

    const headingCopy = document.querySelector(".projects-page .page-heading > p");
    if (
      headingCopy &&
      headingCopy.textContent !==
        "Four projects spanning emulation, product engineering and distributed systems."
    ) {
      headingCopy.textContent =
        "Four projects spanning emulation, product engineering and distributed systems.";
    }

    list.querySelectorAll(".project-row:not([data-gba-project])").forEach((row, index) => {
      const project = projects[index];
      if (!project || row.dataset.projectRefresh === "true") return;

      const title = row.querySelector("h2");
      const summary = row.querySelector(".project-copy > p");
      const image = row.querySelector(".project-image img");
      const stack = row.querySelector(".project-copy ul");
      const source = row.querySelector(".project-links a");
      const links = row.querySelector(".project-links");

      if (title) title.textContent = project.title;
      if (summary) summary.textContent = project.summary;
      if (image) {
        image.src = new URL(project.image, document.baseURI).href;
        image.alt = project.alt;
      }
      if (stack) {
        stack.replaceChildren(
          ...project.stack.map((label) => {
            const item = document.createElement("li");
            item.textContent = label;
            return item;
          }),
        );
      }
      if (source) source.href = project.source;
      if (links) {
        links.querySelectorAll("a:nth-child(n + 2)").forEach((link) => link.remove());
        if (project.live) {
          const live = document.createElement("a");
          live.href = project.live;
          live.target = "_blank";
          live.rel = "noreferrer";
          live.innerHTML =
            '<svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg><span>Live</span>';
          links.append(live);
        }
      }
      row.dataset.projectRefresh = "true";
    });
  };

  const observer = new MutationObserver(applyProjectRefresh);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  applyProjectRefresh();
})();
