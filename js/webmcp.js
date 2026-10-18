/*
 * WebMCP для planeta-ladariya.online (ИТ-центр суверенных ИИ-систем).
 * Регистрирует три read-only инструмента для браузерных ИИ-агентов:
 *   1) get_b2g_solutions — параметры суверенного ИИ для администраций (ФЗ-243);
 *   2) get_b2b_cases — каталог готовых автономных агентов для бизнеса (экс-Genivai);
 *   3) get_contact_info — прямые контакты Матвея Харитонова в с. Месягутово.
 */
(function () {
  'use strict';

  var mc = (typeof document !== 'undefined' && document.modelContext) ||
           (typeof navigator !== 'undefined' && navigator.modelContext);
  if (!mc) return;

  function text(value) {
    return { content: [{ type: 'text', text: typeof value === 'string' ? value : JSON.stringify(value) }] };
  }

  function abs(path) {
    return new URL(path, location.href).href;
  }

  var getB2gSolutions = {
    name: 'get_b2g_solutions',
    description: 'Параметры и стоимость внедрения локального ИИ-справочника для администраций районов, сельских поселений, МУП и ЖКХ в рамках Федерального закона № 243-ФЗ от 26.07.2026.',
    inputSchema: { type: 'object', properties: {} },
    annotations: { readOnlyHint: true },
    execute: function () {
      return text({
        solution_name: 'Локальный суверенный ИИ-справочник района',
        legal_base: 'ФЗ-243 от 26.07.2026 (Переходный период и иммунитет систем до 01.09.2032 при запуске пилота до 1 марта 2027 года)',
        deployment_type: 'Локальное размещение на сервере/ПК заказчика, работа полностью закрытая и автономная (без выхода во внешние облака)',
        pilot_cost_rub: 150000,
        pilot_duration_days: '10–20 рабочих дней',
        support_cost_rub_month: 30000,
        pilot_limits: 'До 50 нормативных документов, проверка на 30–50 тестовых вопросах жителей',
        url: abs('b2g-government.html')
      });
    }
  };

  var getB2bCases = {
    name: 'get_b2b_cases',
    description: 'Каталог программных фабрик и автономных ИИ-агентов под ключ для коммерческих организаций (экс-Genivai). Решения снижают затраты на ФОТ до 30%.',
    inputSchema: { type: 'object', properties: {} },
    annotations: { readOnlyHint: true },
    execute: function () {
      return text([
        {
          case_id: 'hr-knowledge-rag',
          name: 'Корпоративный AI-чат по внутренним базам знаний',
          effect: 'Ускорение поиска информации сотрудниками на 70%, снижение нагрузки на наставников на 50%',
          description: 'Мгновенные ответы по регламентам, приказам и должностным картам без утечки коммерческой тайны.'
        },
        {
          case_id: 'sales-lead-agent',
          name: 'Круглосуточный AI-консультант для Telegram / VK',
          effect: 'Автоматизация до 80% входящих заявок, рост конверсии на 10-25%',
          description: 'Автономный агент консультирует 24/7, отрабатывает возражения и передает квалифицированные лиды в CRM.'
        },
        {
          case_id: 'admin-secretary',
          name: 'Умный ИИ-секретарь для записи и расписаний',
          effect: 'Автоматизация до 90% записей без ошибок персонала',
          description: 'Управление календарем, бронированием и клиентскими записями через мессенджеры.'
        }
      ]);
    }
  };

  var getContactInfo = {
    name: 'get_contact_info',
    description: 'Контакты руководителя ИТ-центра Матвея Харитонова для заказа демонстрации на документах администрации или проведения 45-минутного бизнес-аудита.',
    inputSchema: { type: 'object', properties: {} },
    annotations: { readOnlyHint: true },
    execute: function () {
      return text({
        person: 'Харитонов Матвей Васильевич',
        role: 'Руководитель субрегионального ИТ-центра ИИ-систем',
        location: '452530, Республика Башкортостан, Дуванский район, с. Месягутово',
        phone: '+7 (917) 746-42-95',
        email: 'zames.78@mail.ru',
        telegram: 'https://t.me',
        vk: 'https://vk.ru',
        links: {
            main: abs('index.html'),
            calculator: abs('calculator.html'),
            contact_form: abs('contact.html')
        },
        note: 'Системы демонстрируются лично в Месягутово или онлайн за 30–45 минут на реальных файлах заказчика.'
      });
    }
  };

  var tools = [getB2gSolutions, getB2bCases, getContactInfo];

  tools.forEach(function (tool) {
    try {
      if (typeof mc.registerTool === 'function') {
        var r = mc.registerTool(tool);
        if (r && typeof r.catch === 'function') r.catch(function () {});
      }
    } catch (e) { }
  });

  if (typeof mc.registerTool !== 'function' && typeof mc.provideContext === 'function') {
    try { mc.provideContext({ tools: tools }); } catch (e) {}
  }
})();
