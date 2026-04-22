import Icon from "@/components/ui/icon";

const integrations = [
  { name: "Slack", emoji: "💬" },
  { name: "Notion", emoji: "📝" },
  { name: "Google", emoji: "🔵" },
  { name: "Telegram", emoji: "✈️" },
  { name: "Zapier", emoji: "⚡" },
  { name: "Airtable", emoji: "🗃️" },
  { name: "HubSpot", emoji: "🟠" },
  { name: "1C", emoji: "🏢" },
  { name: "Битрикс", emoji: "🔶" },
  { name: "amoCRM", emoji: "💼" },
  { name: "Stripe", emoji: "💳" },
  { name: "WhatsApp", emoji: "🟢" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 overflow-x-hidden">

      <div className="h-px bg-neutral-900 animate-line-grow" />

      <header className="px-8 py-6 flex items-center justify-between max-w-5xl mx-auto">
        <span
          className="font-display italic text-2xl text-neutral-400 tracking-wide opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          sync.
        </span>
        <a
          href="mailto:hello@example.com"
          className="opacity-0 animate-fade-in text-xs tracking-widest uppercase text-neutral-500 border-b border-neutral-300 pb-px hover:text-neutral-900 hover:border-neutral-900 transition-colors duration-200"
          style={{ animationDelay: "0.3s" }}
        >
          Связаться
        </a>
      </header>

      <main className="max-w-5xl mx-auto px-8 pt-20 pb-32">

        <section className="mb-32">
          <p
            className="opacity-0 animate-fade-in text-xs tracking-[0.25em] uppercase text-neutral-400 mb-8"
            style={{ animationDelay: "0.4s" }}
          >
            Интеграции · Синхронизация · Автоматизация
          </p>
          <h1
            className="opacity-0 animate-fade-in font-display text-[clamp(3rem,8vw,7rem)] leading-none font-light text-neutral-900 mb-8"
            style={{ animationDelay: "0.5s" }}
          >
            Ваши сервисы<br />
            <em className="not-italic text-neutral-400">работают вместе</em>
          </h1>
          <div
            className="opacity-0 animate-fade-in max-w-md"
            style={{ animationDelay: "0.7s" }}
          >
            <p className="text-neutral-500 text-lg leading-relaxed">
              Подключаем и синхронизируем популярные сервисы — данные всегда актуальны,
              процессы работают без ручного труда.
            </p>
          </div>
        </section>

        <div
          className="opacity-0 animate-fade-in flex items-center gap-6 mb-16"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="text-xs tracking-widest uppercase text-neutral-400">
            Интеграции
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <section
          className="opacity-0 animate-fade-in mb-32"
          style={{ animationDelay: "1.0s" }}
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 border border-neutral-200">
            {integrations.map((item, i) => (
              <div
                key={item.name}
                className="group border-r border-b border-neutral-200 p-6 flex flex-col items-center gap-2 hover:bg-neutral-50 transition-colors duration-200 cursor-default"
                style={{
                  borderRight: (i + 1) % 6 === 0 ? "none" : undefined,
                }}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-xs text-neutral-500 tracking-wide group-hover:text-neutral-900 transition-colors duration-200">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-400 text-center">
            и другие системы по запросу
          </p>
        </section>

        <section
          className="opacity-0 animate-fade-in mb-32"
          style={{ animationDelay: "1.1s" }}
        >
          <div className="grid md:grid-cols-3 gap-0 border-t border-neutral-200">
            {[
              {
                icon: "Zap",
                title: "Быстрое подключение",
                desc: "Интеграция настраивается за часы, а не недели. Без длинных ТЗ и согласований.",
              },
              {
                icon: "RefreshCw",
                title: "Синхронизация в реальном времени",
                desc: "Данные обновляются мгновенно. Никаких задержек и ручного переноса.",
              },
              {
                icon: "Shield",
                title: "Надёжность",
                desc: "Мониторинг 24/7, уведомления о сбоях, история изменений.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="border-b md:border-b-0 md:border-r last:border-r-0 border-neutral-200 pt-10 pr-8 pb-10"
                style={{ paddingLeft: i === 0 ? 0 : "2rem" }}
              >
                <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center mb-6">
                  <Icon name={item.icon} size={14} className="text-neutral-500" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-3 text-sm tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="border border-neutral-200 p-12 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="font-display italic text-3xl md:text-4xl font-light text-neutral-900 mb-2">
                Готовы начать?
              </h2>
              <p className="text-neutral-500 text-sm">
                Расскажите о вашем проекте — подберём решение.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 bg-neutral-900 text-white text-sm tracking-wide px-8 py-4 hover:bg-neutral-700 transition-colors duration-200"
              >
                Написать
                <Icon name="ArrowRight" size={14} />
              </a>
              <a
                href="tel:+79000000000"
                className="inline-flex items-center gap-2 border border-neutral-200 text-neutral-700 text-sm tracking-wide px-8 py-4 hover:border-neutral-900 hover:text-neutral-900 transition-colors duration-200"
              >
                <Icon name="Phone" size={14} />
                +7 900 000-00-00
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 px-8 py-8 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display italic text-neutral-400 text-lg">sync.</span>
        <p className="text-xs text-neutral-400 tracking-wide">
          © 2026 — Интеграции и синхронизация данных
        </p>
        <a
          href="mailto:hello@example.com"
          className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors duration-200 tracking-wide"
        >
          hello@example.com
        </a>
      </footer>

      <div className="h-px bg-neutral-900" />
    </div>
  );
}
