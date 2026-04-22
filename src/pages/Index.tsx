import Icon from "@/components/ui/icon";

const integrations = [
  { name: "1C", emoji: "🏢" },
  { name: "Битрикс24", emoji: "🔶" },
  { name: "amoCRM", emoji: "💼" },
  { name: "Telegram", emoji: "✈️" },
  { name: "WhatsApp", emoji: "🟢" },
  { name: "Google", emoji: "🔵" },
  { name: "Slack", emoji: "💬" },
  { name: "Notion", emoji: "📝" },
  { name: "Zapier", emoji: "⚡" },
  { name: "HubSpot", emoji: "🟠" },
  { name: "Stripe", emoji: "💳" },
  { name: "Airtable", emoji: "🗃️" },
];

const cases = [
  {
    number: "01",
    title: "Заявки без потерь",
    desc: "Автоматический приём заявок с сайта, почты и мессенджеров — все попадают в CRM без участия менеджера.",
  },
  {
    number: "02",
    title: "Документооборот",
    desc: "Счета, акты и договоры формируются и отправляются клиенту автоматически по шаблону.",
  },
  {
    number: "03",
    title: "Отчётность",
    desc: "Ежедневные отчёты по продажам, складу и финансам — в одном дашборде без Excel.",
  },
  {
    number: "04",
    title: "Уведомления",
    desc: "Сотрудники и клиенты получают нужную информацию в нужный момент — в Telegram или на почту.",
  },
];

const features = [
  {
    icon: "Zap",
    title: "Быстрый старт",
    desc: "Первые автоматизации запускаем за 3–5 дней. Без долгих согласований и ТЗ на 50 страниц.",
  },
  {
    icon: "RefreshCw",
    title: "Работает само",
    desc: "Процессы идут 24/7. Люди занимаются задачами, а не перекладыванием данных.",
  },
  {
    icon: "TrendingUp",
    title: "Измеримый результат",
    desc: "Считаем, сколько часов и денег экономит каждая автоматизация.",
  },
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
          autoflow.
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

        {/* Hero */}
        <section className="mb-36">
          <p
            className="opacity-0 animate-fade-in text-xs tracking-[0.25em] uppercase text-neutral-400 mb-8"
            style={{ animationDelay: "0.4s" }}
          >
            Автоматизация · Интеграции · Рост эффективности
          </p>
          <h1
            className="opacity-0 animate-fade-in font-display text-[clamp(3rem,8vw,7rem)] leading-none font-light text-neutral-900 mb-8"
            style={{ animationDelay: "0.5s" }}
          >
            Вы можете вести<br />
            <em className="not-italic text-neutral-400">бизнес в разы эффективнее</em>
          </h1>
          <div
            className="opacity-0 animate-fade-in max-w-lg"
            style={{ animationDelay: "0.7s" }}
          >
            <p className="text-neutral-500 text-lg leading-relaxed">
              Автоматизируем бизнес-процессы: заявки, документы, отчёты, уведомления.
              Ваши сотрудники делают то, что важно, — остальное работает само.
            </p>
          </div>
          <div
            className="opacity-0 animate-fade-in flex gap-4 mt-10"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white text-sm tracking-wide px-8 py-4 hover:bg-neutral-700 transition-colors duration-200"
            >
              Обсудить проект
              <Icon name="ArrowRight" size={14} />
            </a>
          </div>
        </section>

        {/* Excel-боли */}
        <section
          className="opacity-0 animate-fade-in mb-36"
          style={{ animationDelay: "1.0s" }}
        >
          <div className="border border-neutral-200 p-10 md:p-14">
            <div className="flex items-start gap-4 mb-10">
              <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 mt-1">
                <Icon name="FileSpreadsheet" size={14} className="text-neutral-500" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Узнаёте себя?</p>
                <h2 className="font-display italic text-3xl md:text-4xl font-light text-neutral-900 leading-tight">
                  Работа в Excel<br />
                  <span className="text-neutral-400">съедает ваше время</span>
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-0 border-t border-neutral-200">
              {[
                "Используете большое количество Excel-файлов в работе?",
                "Монотонное копирование данных из файла в файл отнимает часы?",
                "Сотрудники допускают ошибки и опечатки при переносе данных?",
                "Формулы и связи в таблицах постоянно слетают?",
                "Сборка отчёта из нескольких файлов превращается в настоящий ад?",
                "Таблицы стали огромными и нечитабельными?",
                "Собрать данные из разных источников в один файл — долго, трудно, а иногда невозможно?",
              ].map((pain, i) => (
                <div
                  key={i}
                  className="border-b border-r border-neutral-200 py-5 px-0 flex items-start gap-4 group"
                  style={{
                    borderRight: (i + 1) % 2 === 0 ? "none" : undefined,
                    borderBottom: i >= 6 ? "none" : undefined,
                    paddingLeft: (i + 1) % 2 === 0 ? "2rem" : 0,
                  }}
                >
                  <span className="text-neutral-300 font-display text-lg shrink-0 mt-0.5">—</span>
                  <p className="text-sm text-neutral-600 leading-relaxed">{pain}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-neutral-200">
              <p className="text-neutral-900 font-semibold text-sm tracking-wide">
                Мы решаем все эти проблемы — один раз и навсегда.
              </p>
              <p className="text-neutral-500 text-sm mt-1">
                Процессы автоматизируются, данные перемещаются сами, ошибок не бывает.
              </p>
            </div>
          </div>
        </section>

        {/* Что автоматизируем */}
        <div
          className="opacity-0 animate-fade-in flex items-center gap-6 mb-16"
          style={{ animationDelay: "1.05s" }}
        >
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="text-xs tracking-widest uppercase text-neutral-400">
            Что автоматизируем
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <section
          className="opacity-0 animate-fade-in mb-36"
          style={{ animationDelay: "1.05s" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 border border-neutral-200">
            {cases.map((item, i) => (
              <div
                key={item.number}
                className="group border-b border-r border-neutral-200 p-10 hover:bg-neutral-50 transition-colors duration-200 cursor-default"
                style={{
                  borderRight: (i + 1) % 2 === 0 ? "none" : undefined,
                  borderBottom: i >= cases.length - 2 ? "none" : undefined,
                }}
              >
                <span className="font-display text-4xl text-neutral-200 font-light block mb-4 group-hover:text-neutral-300 transition-colors duration-200">
                  {item.number}
                </span>
                <h3 className="font-semibold text-neutral-900 mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Преимущества */}
        <div
          className="opacity-0 animate-fade-in flex items-center gap-6 mb-16"
          style={{ animationDelay: "1.1s" }}
        >
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="text-xs tracking-widest uppercase text-neutral-400">
            Подход
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <section
          className="opacity-0 animate-fade-in mb-36"
          style={{ animationDelay: "1.15s" }}
        >
          <div className="grid md:grid-cols-3 border-t border-neutral-200">
            {features.map((item, i) => (
              <div
                key={item.title}
                className="border-b md:border-b-0 md:border-r last:border-r-0 border-neutral-200 pt-10 pb-10"
                style={{ paddingLeft: i === 0 ? 0 : "2rem", paddingRight: "2rem" }}
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

        {/* Интеграции */}
        <div
          className="opacity-0 animate-fade-in flex items-center gap-6 mb-16"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="text-xs tracking-widest uppercase text-neutral-400">
            Интеграции
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <section
          className="opacity-0 animate-fade-in mb-36"
          style={{ animationDelay: "1.25s" }}
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 border border-neutral-200">
            {integrations.map((item, i) => (
              <div
                key={item.name}
                className="group border-r border-b border-neutral-200 p-5 flex flex-col items-center gap-2 hover:bg-neutral-50 transition-colors duration-200 cursor-default"
                style={{
                  borderRight: (i + 1) % 6 === 0 ? "none" : undefined,
                  borderBottom: i >= integrations.length - 6 ? "none" : undefined,
                }}
              >
                <span className="text-xl">{item.emoji}</span>
                <span className="text-xs text-neutral-500 tracking-wide group-hover:text-neutral-900 transition-colors duration-200 text-center">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-400 text-center">
            и другие системы по запросу
          </p>
        </section>

        {/* CTA */}
        <section
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "1.3s" }}
        >
          <div className="border border-neutral-200 p-12 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="font-display italic text-3xl md:text-4xl font-light text-neutral-900 mb-2">
                Готовы автоматизировать?
              </h2>
              <p className="text-neutral-500 text-sm">
                Расскажите о процессе — найдём, что можно убрать с плеч команды.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
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
        <span className="font-display italic text-neutral-400 text-lg">autoflow.</span>
        <p className="text-xs text-neutral-400 tracking-wide">
          © 2026 — Автоматизация бизнес-процессов
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