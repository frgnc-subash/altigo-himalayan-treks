import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      Explore: "Explore",
      Destinations: "Destinations",
      Packages: "Packages",
      "Contact Us": "Contact Us",
      Home: "Home",
      Journal: "Journal",
      Regions: "Regions",
      Privacy: "Privacy Policy",
      Terms: "Terms of Service",
      visit_nepal: "VISIT NEPAL",
      hero_title_1: "CONQUER",
      hero_title_2: "THE HIMALAYAS",
      hero_subtitle:
        "From the streets of Kathmandu to the summit of Everest. We craft journeys that define a lifetime.",
      trending: "trending",
      abc: "ABC",
      annapurna: "ANNAPURNA",
      mustang: "MUSTANG",
      find_adventure: "Find Adventure",
      where_to: "Where to?",
      when: "When?",
      search_placeholder: "Search Destinations...",
      spring_exp: "Spring Expedition (Mar-May)",
      autumn_exp: "Autumn Trek (Sep-Nov)",
      feature_1_title: "Certified Safety",
      feature_1_desc:
        "Our guides are IFMGA certified with 500+ successful summits.",
      feature_2_title: "Local Expertise",
      feature_2_desc:
        "Born and raised in the Himalayas, we know every hidden trail.",
      feature_3_title: "Eco-Conscious",
      feature_3_desc:
        "We follow strict 'Leave No Trace' policies to protect our mountains.",
      Gallery: "Gallery",
      gallery_subtitle: "Visual Chronicles",
      gallery_desc:
        "Moments captured across the high-altitude landscapes of the Himalayas.",
      born_nepal: "Born in the Himalayas",
      footer_desc:
        "We organize the best hiking and trekking adventures in the Himalayas, ensuring safety and unforgettable experiences.",
      "Everest Region": "Everest Region",
      "Annapurna Region": "Annapurna Region",
      "Langtang Valley": "Langtang Valley",
      "Manaslu Circuit": "Manaslu Circuit",
      "Upper Mustang": "Upper Mustang",
      join_expedition: "JOIN THE EXPEDITION",
      newsletter_desc:
        "Subscribe to receive latest news, exclusive offers, and expedition updates directly to your inbox.",
      email_placeholder: "Enter your email address",
      subscribe: "Subscribe",
      all_rights: "All Rights Reserved",
    },
  },
  es: {
    translation: {
      Explore: "Explorar",
      Destinations: "Destinos",
      Packages: "Paquetes",
      "Contact Us": "Contáctenos",
      Home: "Inicio",
      Journal: "Diario",
      Regions: "Regiones",
      Privacy: "Política de Privacidad",
      Terms: "Términos de Servicio",
      visit_nepal: "VISITA NEPAL",
      hero_title_1: "CONQUISTA",
      hero_title_2: "EL HIMALAYA",
      hero_subtitle:
        "Desde las calles de Katmandú hasta la cima del Everest. Creamos viajes que definen una vida.",
      trending: "tendencias",
      ebc: "EBC",
      annapurna: "ANNAPURNA",
      mustang: "MUSTANG",
      find_adventure: "Buscar Aventura",
      where_to: "¿A dónde?",
      when: "¿Cuándo?",
      search_placeholder: "Buscar destinos...",
      spring_exp: "Expedición de primavera",
      autumn_exp: "Treking de otoño",
      feature_1_title: "Seguridad Certificada",
      feature_1_desc:
        "Nuestros guías están certificados por IFMGA con más de 500 cumbres.",
      feature_2_title: "Experiencia Local",
      feature_2_desc: "Nacidos en el Himalaya, conocemos cada sendero oculto.",
      feature_3_title: "Eco-Consciente",
      feature_3_desc:
        "Seguimos políticas estrictas para proteger nuestras montañas.",
      Gallery: "Galería",
      gallery_subtitle: "Crónicas Visuales",
      gallery_desc:
        "Momentos capturados a través de los paisajes del Himalaya.",
      born_nepal: "Nacido en el Himalaya",
      footer_desc:
        "Organizamos las mejores aventuras de senderismo y trekking en el Himalaya, garantizando seguridad y experiencias inolvidables.",
      "Everest Region": "Región del Everest",
      "Annapurna Region": "Región de Annapurna",
      "Langtang Valley": "Valle de Langtang",
      "Manaslu Circuit": "Circuito Manaslu",
      "Upper Mustang": "Alto Mustang",
      join_expedition: "ÚNETE A LA EXPEDICIÓN",
      newsletter_desc:
        "Suscríbete para recibir las últimas noticias, ofertas exclusivas y actualizaciones de expediciones directamente en tu bandeja de entrada.",
      email_placeholder: "Introduce tu correo electrónico",
      subscribe: "Suscribirse",
      all_rights: "Todos los derechos reservados",
    },
  },
  hi: {
    translation: {
      Explore: "अन्वेषण करें",
      Destinations: "गंतव्य",
      Packages: "पैकेज",
      "Contact Us": "संपर्क करें",
      Home: "मुख्य पृष्ठ",
      Journal: "पत्रिका",
      Regions: "क्षेत्र",
      Privacy: "गोपनीयता नीति",
      Terms: "सेवा की शर्तें",
      visit_nepal: "नेपाल पधारें",
      hero_title_1: "विजय",
      hero_title_2: "हिमालय की",
      hero_subtitle:
        "काठमांडू की गलियों से लेकर एवरेस्ट के शिखर तक। हम ऐसी यात्राएं बनाते हैं जो जीवन को परिभाषित करती हैं।",
      trending: "ट्रेंडिंग",
      ebc: "ईबीसी",
      annapurna: "अन्नपूर्णा",
      mustang: "मुस्तांग",
      find_adventure: "रोमांच खोजें",
      where_to: "कहाँ जाना है?",
      when: "कब?",
      search_placeholder: "गंतव्य खोजें...",
      spring_exp: "वसंत अभियान (मार्च-मई)",
      autumn_exp: "शरद ऋतु ट्रेक (सितंबर-नवंबर)",
      feature_1_title: "प्रमाणित सुरक्षा",
      feature_1_desc:
        "हमारे गाइड IFMGA प्रमाणित हैं और 500+ सफल शिखर सम्मेलन कर चुके हैं।",
      feature_2_title: "स्थानीय विशेषज्ञता",
      feature_2_desc:
        "हिमालय में जन्मे और पले-बढ़े, हम हर छिपे हुए रास्ते को जानते हैं।",
      feature_3_title: "पर्यावरण के प्रति जागरूक",
      feature_3_desc:
        "हम अपने पहाड़ों की सुरक्षा के लिए 'लीव नो ट्रेस' नीतियों का कड़ाई से पालन करते हैं।",
      Gallery: "गेलरी",
      gallery_subtitle: "दृश्य इतिहास",
      gallery_desc: "हिमालय के उच्च ऊंचाई वाले परिदृश्यों में कैद किए गए क्षण।",
      born_nepal: "हिमालय में जन्मे",
      footer_desc:
        "हम हिमालय में सबसे अच्छे हाइकिंग और ट्रेकिंग रोमांच का आयोजन करते हैं, सुरक्षा और अविस्मरणीय अनुभव सुनिश्चित करते हैं।",
      "Everest Region": "एवरेस्ट क्षेत्र",
      "Annapurna Region": "अन्नपूर्णा क्षेत्र",
      "Langtang Valley": "लांगटांग घाटी",
      "Manaslu Circuit": "मनास्लु सर्किट",
      "Upper Mustang": "ऊपरी मुस्तांग",
      join_expedition: "अभियान में शामिल हों",
      newsletter_desc:
        "नवीनतम समाचार, विशेष ऑफ़र और अभियान अपडेट सीधे अपने इनबॉक्स में प्राप्त करने के लिए सदस्यता लें।",
      email_placeholder: "अपना ईमेल पता दर्ज करें",
      subscribe: "सदस्यता लें",
      all_rights: "सर्वाधिकार सुरक्षित",
    },
  },
  ja: {
    translation: {
      Explore: "探索",
      Destinations: "目的地",
      Packages: "パッケージ",
      "Contact Us": "お問い合わせ",
      Home: "ホーム",
      Journal: "ジャーナル",
      Regions: "地域",
      Privacy: "プライバシーポリシー",
      Terms: "利用規約",
      visit_nepal: "ネパールへ",
      hero_title_1: "征服せよ",
      hero_title_2: "ヒマラヤを",
      hero_subtitle:
        "カトマンズの通りからエベレストの頂上まで。私たちは一生を決定づける旅を作り上げます。",
      trending: "トレンド",
      ebc: "EBC",
      annapurna: "アンナプルナ",
      mustang: "ムスタン",
      find_adventure: "冒険を探す",
      where_to: "どこへ？",
      when: "いつ？",
      search_placeholder: "目的地を検索...",
      spring_exp: "春の遠征 (3月-5月)",
      autumn_exp: "秋のトレッキング (9月-11月)",
      feature_1_title: "認定された安全性",
      feature_1_desc:
        "私たちのガイドはIFMGA認定を受けており、500回以上の登頂に成功しています。",
      feature_2_title: "現地の専門知識",
      feature_2_desc:
        "ヒマラヤで生まれ育った私たちは、すべての隠されたトレイルを知っています。",
      feature_3_title: "環境への配慮",
      feature_3_desc:
        "私たちは山を守るために「痕跡を残さない」ポリシーを厳守しています。",
      Gallery: "ギャラリー",
      gallery_subtitle: "ビジュアルクロニクル",
      gallery_desc: "ヒマラヤの高地で捉えられた瞬間。",
      born_nepal: "ヒマラヤ生まれ",
      footer_desc:
        "私たちはヒマラヤで最高のハイキングとトレッキングの冒険を企画し、安全性と忘れられない体験を保証します。",
      "Everest Region": "エベレスト地域",
      "Annapurna Region": "アンナプルナ地域",
      "Langtang Valley": "ランタン谷",
      "Manaslu Circuit": "マナスル・サーキット",
      "Upper Mustang": "アッパー・ムスタン",
      join_expedition: "遠征に参加する",
      newsletter_desc:
        "最新ニュース、特別オファー、遠征の更新情報を直接受信トレイで受け取るには、登録してください。",
      email_placeholder: "メールアドレスを入力",
      subscribe: "登録する",
      all_rights: "全著作権所有",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
