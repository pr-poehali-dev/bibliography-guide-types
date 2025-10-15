import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const bibliographyTypes = [
  {
    id: 1,
    title: 'Государственная библиография',
    category: 'Организационная',
    icon: 'Building2',
    description: 'Система библиографических пособий, создаваемых государственными библиографическими центрами и институтами.',
    features: [
      'Общегосударственное значение',
      'Централизованное создание',
      'Официальный статус',
      'Систематический охват'
    ],
    examples: [
      'Книжная летопись',
      'Летопись журнальных статей',
      'Библиография официальных изданий'
    ]
  },
  {
    id: 2,
    title: 'Научно-вспомогательная библиография',
    category: 'Функциональная',
    icon: 'GraduationCap',
    description: 'Библиографические пособия, предназначенные для научно-исследовательской работы и научной информации.',
    features: [
      'Углубленный анализ литературы',
      'Критическая оценка источников',
      'Специализированная тематика',
      'Аналитические обзоры'
    ],
    examples: [
      'Библиографические указатели по темам исследований',
      'Научные обзоры литературы',
      'Персональные библиографии учёных'
    ]
  },
  {
    id: 3,
    title: 'Рекомендательная библиография',
    category: 'Функциональная',
    icon: 'BookOpen',
    description: 'Пособия, рекомендующие литературу для различных категорий читателей с учётом их образовательных и профессиональных потребностей.',
    features: [
      'Ориентация на читателя',
      'Педагогический подход',
      'Оценочные характеристики',
      'Доступность изложения'
    ],
    examples: [
      'Рекомендательные списки для учащихся',
      'Профессиональные библиографии',
      'Руководства по чтению'
    ]
  },
  {
    id: 4,
    title: 'Текущая библиография',
    category: 'Временная',
    icon: 'Calendar',
    description: 'Систематическая регистрация новых публикаций по мере их выхода в свет.',
    features: [
      'Оперативность информации',
      'Периодичность выпуска',
      'Хронологический охват',
      'Полнота регистрации'
    ],
    examples: [
      'Еженедельные указатели новых книг',
      'Сигнальная информация',
      'Бюллетени новых поступлений'
    ]
  },
  {
    id: 5,
    title: 'Ретроспективная библиография',
    category: 'Временная',
    icon: 'Clock',
    description: 'Библиографическая информация о документах прошлых лет, охватывающая определённый исторический период.',
    features: [
      'Исторический охват',
      'Систематизация материалов',
      'Научная обработка',
      'Долгосрочная ценность'
    ],
    examples: [
      'История книги в России',
      'Библиография по периодам',
      'Сводные каталоги'
    ]
  },
  {
    id: 6,
    title: 'Библиографический указатель',
    category: 'Видовая',
    icon: 'List',
    description: 'Библиографическое пособие с простым перечислением документов по определённому признаку или теме.',
    features: [
      'Структурированность',
      'Вспомогательные указатели',
      'Тематическая группировка',
      'Полнота охвата'
    ],
    examples: [
      'Тематические указатели',
      'Персональные указатели',
      'Указатели по видам литературы'
    ]
  },
  {
    id: 7,
    title: 'Библиографический список',
    category: 'Видовая',
    icon: 'FileText',
    description: 'Краткий перечень библиографических записей, составленный по определённому принципу.',
    features: [
      'Краткость',
      'Практическая направленность',
      'Избирательность',
      'Простота структуры'
    ],
    examples: [
      'Списки литературы к научным работам',
      'Рекомендательные списки',
      'Прикнижные списки'
    ]
  },
  {
    id: 8,
    title: 'Библиографический обзор',
    category: 'Видовая',
    icon: 'BookMarked',
    description: 'Библиографическое пособие с аналитико-синтетической характеристикой документов.',
    features: [
      'Аналитический характер',
      'Связное изложение',
      'Оценка литературы',
      'Сравнительный анализ'
    ],
    examples: [
      'Обзоры научной литературы',
      'Критические обзоры',
      'Аналитические обзоры по темам'
    ]
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Организационная', 'Функциональная', 'Временная', 'Видовая'];
  const categoryLabels: Record<string, string> = {
    all: 'Все типы',
    'Организационная': 'Организационная',
    'Функциональная': 'Функциональная',
    'Временная': 'Временная',
    'Видовая': 'Видовая'
  };

  const filteredTypes = bibliographyTypes.filter(type => {
    const matchesSearch = type.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      type.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || type.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="BookOpen" size={32} className="text-primary" />
            <h1 className="text-3xl font-semibold text-foreground">
              Типы библиографических пособий
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Полное руководство по классификации библиографических материалов
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="text"
              placeholder="Поиск по типам библиографии..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid grid-cols-5 w-full h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
                >
                  {categoryLabels[category]}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTypes.map((type) => (
            <Card 
              key={type.id} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={type.icon} size={24} className="text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {type.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-medium leading-tight">
                  {type.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {type.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-foreground mb-2 flex items-center gap-2">
                    <Icon name="CheckCircle2" size={16} className="text-primary" />
                    Характеристики
                  </h4>
                  <ul className="space-y-1">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-foreground mb-2 flex items-center gap-2">
                    <Icon name="Lightbulb" size={16} className="text-primary" />
                    Примеры
                  </h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTypes.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium text-foreground mb-2">
              Ничего не найдено
            </h3>
            <p className="text-muted-foreground">
              Попробуйте изменить поисковый запрос или фильтр
            </p>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Icon name="Info" size={20} className="text-primary" />
                О классификации
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Библиографические пособия классифицируются по различным признакам: 
                организационным, функциональным, временным и видовым.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Icon name="Target" size={20} className="text-primary" />
                Назначение
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Каждый тип пособия имеет своё назначение и целевую аудиторию, 
                от научных исследователей до широкого круга читателей.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Icon name="BookOpen" size={20} className="text-primary" />
                Применение
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Правильный выбор типа библиографического пособия обеспечивает 
                эффективный поиск и систематизацию информации.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
