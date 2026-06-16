(function () {
  const config = window.LP_CONFIG;

  if (!config) {
    return;
  }

  const serviceName = config.service.nameJa;
  const replaceServiceName = (value) =>
    String(value || "")
      .replaceAll("{serviceNameJa}", config.service.nameJa)
      .replaceAll("{serviceNameEn}", config.service.nameEn)
      .replaceAll("{companyName}", config.service.companyName);

  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) {
      node.textContent = replaceServiceName(value);
    }
  };

  const setMeta = () => {
    document.title = `${serviceName} | ${config.service.nameEn}`;
    const meta = document.querySelector('[data-config-meta="description"]');
    if (meta) {
      meta.setAttribute("content", config.service.description);
    }
  };

  const applyTheme = () => {
    const root = document.documentElement;
    Object.entries(config.theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  };

  const linkButton = (item, variant = "secondary") => {
    const anchor = document.createElement("a");
    anchor.className = `button ${variant}`;
    anchor.href = item.href;
    anchor.textContent = replaceServiceName(item.label);
    return anchor;
  };

  const renderNav = () => {
    const nav = document.querySelector("[data-nav]");
    const actions = document.querySelector("[data-header-actions]");
    if (!nav || !actions) {
      return;
    }

    config.navigation.forEach((item) => {
      const anchor = document.createElement("a");
      anchor.href = item.href;
      anchor.textContent = item.label;
      nav.append(anchor);
    });

    actions.append(linkButton(config.cta.login, "ghost"));
    actions.append(linkButton(config.cta.primary, "primary small"));
  };

  const renderHero = () => {
    const image = document.querySelector("[data-hero-image]");
    if (image) {
      image.src = config.assets.heroImage;
      image.alt = config.assets.heroImageAlt;
    }

    setText("[data-hero-eyebrow]", config.hero.eyebrow);
    setText("[data-hero-title]", config.hero.titleTemplate);
    setText("[data-hero-lead]", config.hero.lead);

    const heroActions = document.querySelector("[data-hero-actions]");
    if (heroActions) {
      heroActions.append(linkButton(config.cta.primary, "primary"));
      heroActions.append(linkButton(config.cta.secondary, "secondary"));
    }

    const points = document.querySelector("[data-hero-points]");
    if (points) {
      config.hero.points.forEach((point) => {
        const item = document.createElement("li");
        item.textContent = point;
        points.append(item);
      });
    }

    const panel = document.querySelector("[data-hero-panel]");
    if (panel) {
      panel.innerHTML = `
        <p class="panel-label">${config.hero.panel.label}</p>
        <h2>${config.hero.panel.title}</h2>
        <div class="panel-metrics"></div>
        <div class="panel-insight">
          <span>${config.hero.panel.insightTitle}</span>
          <p>${config.hero.panel.insight}</p>
        </div>
      `;

      const metrics = panel.querySelector(".panel-metrics");
      config.hero.panel.metrics.forEach((metric) => {
        const item = document.createElement("div");
        item.className = "panel-metric";
        item.innerHTML = `<strong>${metric.value}</strong><span>${metric.label}</span>`;
        metrics.append(item);
      });
    }
  };

  const renderProblems = () => {
    setText("[data-problem-eyebrow]", config.problems.eyebrow);
    setText("[data-problem-title]", config.problems.title);
    setText("[data-problem-lead]", config.problems.lead);

    const grid = document.querySelector("[data-problems]");
    config.problems.items.forEach((item, index) => {
      const card = document.createElement("article");
      card.className = "problem-card";
      card.innerHTML = `
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      `;
      grid.append(card);
    });
  };

  const renderSolution = () => {
    setText("[data-solution-eyebrow]", config.solution.eyebrow);
    setText("[data-solution-title]", config.solution.title);
    setText("[data-solution-lead]", config.solution.lead);

    const target = document.querySelector("[data-solution-steps]");
    config.solution.items.forEach((solutionItem) => {
      const card = document.createElement("article");
      card.className = "feature-card solution-card";
      card.innerHTML = `
        <h3>${solutionItem.title}</h3>
        <p>${solutionItem.text}</p>
        <ul>${solutionItem.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
      `;
      target.append(card);
    });
  };

  const renderWorkflow = () => {
    setText("[data-workflow-eyebrow]", config.workflow.eyebrow);
    setText("[data-workflow-title]", config.workflow.title);
    setText("[data-workflow-lead]", config.workflow.lead);

    const list = document.querySelector("[data-workflow]");
    config.workflow.items.forEach((step) => {
      const item = document.createElement("li");
      item.innerHTML = `<h3>${step.title}</h3><p>${step.text}</p>`;
      list.append(item);
    });
  };

  const renderUseCases = () => {
    setText("[data-usecase-eyebrow]", config.useCases.eyebrow);
    setText("[data-usecase-title]", config.useCases.title);
    setText("[data-usecase-lead]", config.useCases.lead);

    const grid = document.querySelector("[data-usecases]");
    config.useCases.items.forEach((useCase) => {
      const item = document.createElement("article");
      item.className = "usecase-card";
      item.innerHTML = `<h3>${useCase.title}</h3><p>${useCase.text}</p>`;
      grid.append(item);
    });
  };

  const renderPricing = () => {
    setText("[data-pricing-eyebrow]", config.pricing.eyebrow);
    setText("[data-pricing-title]", config.pricing.title);
    setText("[data-pricing-lead]", config.pricing.lead);
    setText("[data-pricing-note]", config.pricing.note);

    const grid = document.querySelector("[data-pricing]");
    config.pricing.plans.forEach((plan) => {
      const item = document.createElement("article");
      item.className = `pricing-card${plan.highlighted ? " highlighted" : ""}`;
      item.innerHTML = `
        <h3>${plan.name}</h3>
        <p>${plan.description}</p>
        <div class="price"><strong>${plan.price}</strong><span>${plan.unit}</span></div>
        <ul>${plan.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
      `;
      grid.append(item);
    });
  };

  const renderFaq = () => {
    setText("[data-faq-eyebrow]", config.faq.eyebrow);
    setText("[data-faq-title]", config.faq.title);
    setText("[data-faq-lead]", config.faq.lead);

    const list = document.querySelector("[data-faq]");
    config.faq.items.forEach((item) => {
      const details = document.createElement("details");
      details.innerHTML = `<summary>${item.question}</summary><p>${item.answer}</p>`;
      list.append(details);
    });
  };

  const renderContact = () => {
    setText("[data-contact-eyebrow]", config.contact.eyebrow);
    setText("[data-contact-title]", config.contact.title);
    setText("[data-contact-lead]", config.contact.lead);
    setText("[data-contact-submit]", config.contact.submitLabel);
    setText("[data-contact-note]", config.contact.note);

    const points = document.querySelector("[data-contact-points]");
    config.contact.points.forEach((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      points.append(item);
    });

    const fields = document.querySelector("[data-form-fields]");
    config.contact.fields.forEach((field) => {
      const wrapper = document.createElement("label");
      wrapper.className = "form-field";
      const required = field.required ? "required" : "";
      if (field.type === "textarea") {
        wrapper.innerHTML = `<span>${field.label}</span><textarea name="${field.name}" rows="5" ${required}></textarea>`;
      } else {
        wrapper.innerHTML = `<span>${field.label}</span><input name="${field.name}" type="${field.type}" ${required} />`;
      }
      fields.append(wrapper);
    });

    const form = document.querySelector("[data-contact-form]");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const subject = encodeURIComponent(`${serviceName} LPからの問い合わせ`);
      const body = encodeURIComponent(
        "フォーム送信先が未設定です。実運用ではAPIまたはフォームサービスへ接続してください。"
      );
      window.location.href = `mailto:${config.service.contactEmail}?subject=${subject}&body=${body}`;
    });
  };

  const renderFooter = () => {
    setText("[data-footer-brand]", serviceName);
    setText("[data-footer-description]", config.footer.description);

    const links = document.querySelector("[data-footer-links]");
    config.footer.links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.textContent = link.label;
      links.append(anchor);
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    setMeta();
    applyTheme();
    setText("[data-brand-name]", serviceName);
    renderNav();
    renderHero();
    renderProblems();
    renderSolution();
    renderWorkflow();
    renderUseCases();
    renderPricing();
    renderFaq();
    renderContact();
    renderFooter();
  });
})();
