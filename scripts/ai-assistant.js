/**
 * Kastamonu Özel İnci Yükseköğrenim Kız Öğrenci Yurdu
 * İnci Yapay Zeka (YZ) Yurt Danışmanı & Chatbot Motoru
 * Desteklenen Diller: TR (Türkçe), EN (English), AR (العربية), RU (Русский)
 */

(function () {
  // 1. DÖRT DİLLİ KAPSAMLI BİLGİ TABANI (KNOWLEDGE BASE)
  const KB = {
  "tr": {
    "botName": "İnci Yurt Danışmanı (YZ)",
    "onlineStatus": "Çevrim içi • 7/24 Yanıt",
    "welcomeMsg": "Merhaba! 👋 Ben Özel İnci Kız Yurdu Yapay Zeka Danışmanıyım. Yurdumuz, odalarımız, kampüse 150m mesafemiz, yemeklerimiz, fiyatlarımız, ücretsiz çamaşırhanemiz veya kayıt koşullarımız hakkında merak ettiğiniz her şeyi bana sorabilirsiniz!",
    "inputPlaceholder": "Yurdumuz hakkında bir soru yazın...",
    "sendBtn": "Gönder",
    "askWhatsApp": "İnci Yurt Yönetimine Yazın",
    "typingText": "İnci Danışman yazıyor...",
    "quickChips": [
      {
        "label": "🚶 Kampüse Mesafe",
        "query": "Kastamonu Üniversitesi kampüsüne ne kadar uzakta?"
      },
      {
        "label": "🛏️ Odalar & Ranza",
        "query": "Odalarda ranza var mı, yataklar ve oda tipleri nasıl?"
      },
      {
        "label": "🍳 Yemek Hizmeti",
        "query": "Yemekler fiyata dahil mi, açık büfe ve menü nasıl?"
      },
      {
        "label": "💰 Fiyatlar & İndirim",
        "query": "Fiyatlar ne kadar, peşin indirimi ve taksit var mı?"
      },
      {
        "label": "🧺 Çamaşırhane",
        "query": "Çamaşırhane ücretli mi, ütü ve yıkama nasıl yapılıyor?"
      },
      {
        "label": "🛡️ Güvenlik",
        "query": "Yurdun güvenliği nasıl, giriş çıkış saatleri nedir?"
      },
      {
        "label": "🌍 İkamet İzni (Yabancı)",
        "query": "Yabancı öğrenciler için ikamet izni desteği var mı?"
      },
      {
        "label": "📞 İletişim & Konum",
        "query": "Yurt müdürünün telefon numarası ve açık adresi nedir?"
      }
    ],
    "answers": {
      "greeting": "Merhaba! 👋 Ben Özel İnci Kız Yurdu Yapay Zeka Danışmanıyım. Yurdumuz 2006'dan bu yana T.C. Gençlik ve Spor Bakanlığı ruhsatlı olarak hizmet vermektedir. Kampüse 150m yürüyüş mesafemiz, konforlu bazalı odalarımız, açık büfe kahvaltı & 4 çeşit sıcak ev yemeğimiz ve erken kayıt fırsatlarımız hakkında dilediğinizi sorabilirsiniz!",
      "distance": "🏫 **Kastamonu Üniversitesi'ne Tam 150 Metre (2 Dakika Yürüyüş)!**\\n\\n• **Eğitim Fakültesi:** Yurdumuzun hemen karşısında (150m), yürüyerek sadece 2 dakikada derstesiniz.\\n• **Merkez Kuzeykent Kampüsü (İİBF, Mühendislik, Fen-Edebiyat, İlahiyat vb.):** Yurdumuzun 30 metre önündeki duraktan kalkan ring ve dolmuşlarla 2-4 dakikada ulaşabilirsiniz.\\n• **Ulaşım Maliyeti:** Sıfır yol parası! Kışın dondurucu soğukta dolmuş beklemeden ders aralarında odanıza gelip sıcak çayınızı yudumlayabilirsiniz.\\n• **Otogar / Şehir Merkezi:** Yurdumuzun önünden kalkan araçlarla otogara ve çarşı merkezine 10-15 dakikada direkt ulaşım vardır.",
      "rooms": "🛏️ **%100 Ranzasız, Yüksek Konforlu Odalar:**\\n\\n• **Ranza Kesinlikle Yoktur:** Tüm odalarımızda her öğrenciye özel bağımsız **ortopedik baza ve yatak** sunulur.\\n• **Oda Seçenekleri:** 1 Kişilik VIP Süit, 2 Kişilik Süit, 3 Kişilik ve 4 Kişilik Ferah odalar.\\n• **VIP 1 Kişilik Süit:** Özel giyinme bölümü, 6 kapaklı gardırop, Xiaomi M5 akıllı hava temizleyici, mini buzdolabı, çalışma masası ve ses yalıtımı.\\n• **Tüm Odalarda:** Kişisel geniş elbise dolabı, ergonomik çalışma masası ve sandalyesi, laminat parke, mini buzdolabı ve yüksek hızlı fiber Wi-Fi mevcuttur.",
      "food": "🍳 **Açık Büfe Sabah Kahvaltısı & 4 Çeşit Sıcak Ev Yemeği (Fiyata Dahildir):**\\n\\n• **Anne Eli Değmiş Sıcak Yemekler:** Dışarıdan hazır catering yerine kendi hijyenik mutfağımızda usta kadın aşçılarımız tarafından her gün taze pişirilir.\\n• **Sabah:** Zengin açık büfe kahvaltı (peynirler, zeytin, yumurta, tereyağı, reçeller, yeşillik, sınırsız çay ve taze ekmek).\\n• **Akşam:** Çorba, ana yemek, pilav/makarna ve tatlı/meyve/yoğurttan oluşan 4 çeşit dengeli sıcak menü.\\n• **7/24 Öğrenci Hobi Mutfağı:** Canınız istediğinde barista espresso makinesi, çay ocağı ve airfryer bulunan hobi mutfağımızda kendi kahvenizi ve atıştırmalıklarınızı hazırlayabilirsiniz!",
      "price": "💰 **2026-2027 Erken Kayıt Fırsatları & Ödeme Kolaylıkları:**\\n\\n• **Peşin İndirimi:** Peşin ödemelerde anında **%10 nakit indirimi** sağlanır.\\n• **Vade Farksız Taksit:** Tüm kredi kartlarına **10 aya varan vade farksız taksit** veya senetle ödeme planı sunulur.\\n• **Her Şey Dahil Konsept:** Elektrik, su, ısınma, 7/24 sıcak su, sınırsız fiber internet, temizlik, çamaşırhane ve 2 öğün yemek için ek fatura ödemezsiniz!\\n• **Net Fiyat Teklifi:** Seçilen oda tipine (1, 2, 3 veya 4 kişilik) ve kalan kontenjana göre en uygun fiyat teklifini Yurt Müdürümüz Gülnur Hanım'dan alabilirsiniz: [0533 427 17 18](tel:05334271718).",
      "security": "🛡️ **7/24 Kesintisiz Güvenlik & Kurumsal Güvence:**\\n\\n• **20 Yıllık Tecrübe & Bakanlık Ruhsatı:** 2006'dan bu yana T.C. Gençlik ve Spor Bakanlığı denetiminde resmi ruhsatlı hizmet veriyoruz.\\n• **Giriş-Çıkış Kontrolü:** Yalnızca yurt sakinlerimizin kullanabildiği akıllı çipli turnike ve biyometrik kartlı geçiş sistemi.\\n• **7/24 Güvenlik Kameraları:** Ortak alanlar ve bina çevresi yüksek çözünürlüklü kapalı devre kameralarla izlenir.\\n• **Gece Nöbetçi Amiri:** Gece boyunca kadın idari personelimiz binada ikamet ederek öğrencilerimizin her türlü ihtiyacında yanındadır.\\n• **Giriş-Çıkış Saatleri:** Güvenlik gereği Bakanlık standartlarında güvenli kapı saatleri uygulanır, veli bilgilendirme sistemi mevcuttur.",
      "laundry": "🧺 **Ücretsiz Çamaşırhane & Ütü Salonu:**\\n\\n• Yurdumuzda çamaşır yıkama, kurutma ve ütü hizmetleri öğrencilerimize **%100 tamamen ücretsizdir**.\\n• Herhangi bir jeton, sayaç, elektrik bedeli veya ek ücret kesinlikle talep edilmez.\\n• Çok sayıda otomatik çamaşır makinesi, kurutma makineleri ve buharlı ütü istasyonları haftanın 7 günü kullanıma açıktır.",
      "cleaning": "🧹 **Düzenli Kat, Oda ve Ortak Alan Temizliği:**\\n\\n• Yurdumuzun tüm katları, koridorları, banyoları ve ortak alanları profesyonel kadın temizlik personelimiz tarafından **her gün düzenli olarak** dezenfekte edilir.\\n• Öğrenci odaları periyodik olarak temizlenir, hijyen standartları en üst düzeyde tutulur.\\n• Çöp toplama ve ortak alan hijyeni titizlikle yürütülür.",
      "heating_water": "🔥 **Merkezi Doğalgaz Isıtma & 7/24 Kesintisiz Sıcak Su:**\\n\\n• Yüksek ısı yalıtımı ve **merkezi doğalgaz ısıtma sistemi** sayesinde Kastamonu'nun kış soğuklarında tüm odalar sıcacık tutulur.\\n• **7/24 Sıcak Su:** Yüksek kapasiteli boyler ve hidrofor sistemi sayesinde günün ve gecenin her saatinde kesintisiz tazyikli sıcak su mevcuttur.\\n• **Su Deposu & Jeneratör:** Olası su veya elektrik kesintilerine karşı yedek jeneratör ve büyük hacimli su depolarımız anında devreye girer.",
      "wifi": "📶 **Tüm Katlarda Sınırsız Yüksek Hızlı Fiber Wi-Fi:**\\n\\n• Her katta konumlandırılmış endüstriyel Access Point cihazları ile odalarda, etüt salonunda ve bahçede **kesintisiz yüksek hızlı fiber internet** sunulur.\\n• Online dersler, video konferanslar, akademik araştırmalar ve dizi/film izleme için özel bant genişliği sağlanır; kota veya hız düşümü uygulanmaz.",
      "study": "📚 **Sessiz Etüt & Kütüphane Çalışma Salonu:**\\n\\n• Vize ve final dönemlerinde odaklanarak verimli çalışabileceğiniz, **tamamen sessiz ve ferah etüt salonumuz** 24 saat açıktır.\\n• Ergonomik çalışma masaları, kişisel aydınlatmalar, priz üniteleri ve yüksek hızlı Wi-Fi ile donatılmıştır.",
      "sports_social": "🌿 **Sosyal Alanlar, Ücretsiz Fitness & Cam Balkon:**\\n\\n• **Fitness & Spor Alanı:** Sağlıklı ve zinde kalmanız için yurdumuz bünyesindeki spor aletleri ve fitness alanı öğrencilerimize ücretsizdir.\\n• **Panoramik Cam Balkon Dinlenme Alanı:** Manzaralı dinlenme alanında arkadaşlarınızla sohbet edip günün yorgunluğunu atabilirsiniz.\\n• **Ahşap Veranda & Bahçe:** Açık havada temiz hava alabileceğiniz yeşil bahçe ve ahşap oturma verandası mevcuttur.",
      "guests": "👨‍👩‍👧 **Veli & Aile Ziyaret Politikası:**\\n\\n• Öğrencilerimizin ailelerini yurdumuzda ağırlamaktan onur duyarız. Yurdumuzun giriş katında veli ve misafir görüşme salonu bulunmaktadır.\\n• Öğrencimizin **annesi ve kız kardeşleri** için önceden idaremizle görüşülerek uygunluk durumuna göre konaklama kolaylığı sağlanmaktadır.\\n• Erkek misafirlerin öğrenci odalarına ve katlara girişi güvenlik kuralları gereği kesinlikle yasaktır.",
      "international": "🌍 **Uluslararası Öğrenci Masası (Yabancı Uyruklu Öğrenciler):**\\n\\n• **İkamet İzni Desteği:** Kastamonu İl Göç İdaresi ve üniversite öğrenci işleri evrak süreçlerinde deneyimli yurt yönetimimiz rehberlik eder.\\n• **Çok Dilli İletişim:** İngilizce, Arapça ve Rusça dillerinde idari iletişim desteği sunulur.\\n• **%100 Helal Mutfak:** Sertifikalı helal ürünlerle hazırlanan zengin kahvaltı ve akşam yemekleri.\\n• 60'tan fazla ülkeden gelen öğrenciyle kültürlerarası saygıya dayalı huzurlu bir aile ortamı sunulmaktadır.",
      "city_guide": "🏛️ **Kastamonu Şehir Rehberi & Yöresel Gastronomi:**\\n\\n• **Gezilecek Tarihi Yerler:** Kastamonu Kalesi, Tarihi Saat Kulesi, Nasrullah Camii ve Şadırvanı, Şeyh Şaban-ı Veli Külliyesi, Tarihi Kastamonu Konakları ve Doğa Harikası Valla Kanyonu ile Ilgaz Dağı.\\n• **Yöresel Lezzetler:** Meşhur Kastamonu Etli Ekmeği, Banduma, Kastamonu Susamsız Simidi, Çekme Helva, Siyez Bulguru ve Taşköprü Sarımsağı.\\n• Yurdumuzun web sitesindeki [Şehir Rehberi](#sehir-rehberi) bölümünden tüm detaylara ve veli gezi rotalarına ulaşabilirsiniz!",
      "student_guide": "**Kastamonu'da Öğrenci Yaşamı, Kampüs & Şehir Artıları:**\\n\\n• **Üniversite Artıları:** YÖK Ormancılık ve Tabiat Turizmi İhtisas Üniversitesi statüsü, 7/24 açık Bilgehan Bilgili Kütüphanesi, yarı olimpik yüzme havuzlu Ay Yıldız Spor Kompleksi.\\n• **Sosyal Yaşam:** Kuzeykent Kafeler Caddesi, çalışma ve kitap kafeleri, GSB Gençlik Merkezi ücretsiz yabancı dil, müzik ve kodlama atölyeleri.\\n• **Doğa & Kış Sporları:** 40 dakikada Ilgaz Dağı Kayak Merkezi, Horma ve Valla Kanyonları, Ilıca Şelalesi ve Karadeniz Cide Gideros Koyu.\\n• **Şehir Artısı:** Türkiye'nin suç oranı en düşük şehirlerinden biri, huzurlu atmosfer, sıfır trafik stresi ve büyükşehirlere kıyasla 3 kat daha ekonomik yaşam maliyeti.\\n• **Konaklama Avantajı:** Yurdumuz yerleşkeye sadece 150m mesafede olup sıfır dolmuş masrafı sağlar! Detaylar için sitemizdeki [Öğrenci Yaşam Rehberi](#ogrenci-rehberi) bölümünü inceleyebilirsiniz.",
      "contact": "📞 **İletişim, Açık Adres ve Konum Bilgileri:**\\n\\n• **Yurt Müdürü:** Gülnur Özdil - [0533 427 17 18](tel:05334271718)\\n• **Mobil İletişim & Danışma (WhatsApp):** [0505 103 93 09](tel:05051039309) / [0554 023 73 66](tel:05540237366)\\n• **Açık Adres:** Kuzeykent Mah. 31. Sok. No: 1/1, Merkez / Kastamonu (Eğitim Fakültesi Karşısı 150m)\\n• **Google Haritalar:** [Konumu Haritada Aç](https://maps.app.goo.gl/2hL9c878L5gqY81g7)\\n• İster WhatsApp'tan yazabilir, ister hemen telefonla arayarak detaylı bilgi alabilirsiniz!",
      "fallback": "Sorunuz için teşekkür ederim! 😊 Özel İnci Kız Yurdu hakkında aradığınız tüm detaylı bilgileri, oda müsaitliğini ve indirimli erken kayıt teklifini hemen Yurt Müdürümüz Gülnur Hanım'dan alabilirsiniz: [0533 427 17 18](tel:05334271718)"
    }
  },
  "en": {
    "botName": "Inci Dormitory AI Advisor",
    "onlineStatus": "Online • 24/7 Support",
    "welcomeMsg": "Hello! 👋 I am the AI Assistant of Private Inci Female Student Residence. Feel free to ask me anything about our 150m walking distance to Kastamonu University, room options, open buffet breakfast & home-cooked meals, or 2026 early registration discounts!",
    "inputPlaceholder": "Ask a question about our residence...",
    "sendBtn": "Send",
    "askWhatsApp": "Chat with Manager on WhatsApp",
    "typingText": "Inci Advisor is typing...",
    "quickChips": [
      {
        "label": "🚶 Campus Distance",
        "query": "How far is the dormitory from Kastamonu University?"
      },
      {
        "label": "🛏️ Rooms & Beds",
        "query": "Are there bunk beds? What are the room options and beds like?"
      },
      {
        "label": "🍳 Meal Service",
        "query": "Are breakfast and dinner included in the price?"
      },
      {
        "label": "💰 Prices & Discounts",
        "query": "What are the room prices, discounts, and payment installments?"
      },
      {
        "label": "🧺 Laundry Free?",
        "query": "Is the laundry room free to use?"
      },
      {
        "label": "🛡️ Safety & Curfew",
        "query": "How is dormitory security and what are the closing hours?"
      },
      {
        "label": "🌍 Residence Permit",
        "query": "Do you assist international students with residence permits?"
      },
      {
        "label": "📞 Contact & Address",
        "query": "What is the manager phone number and official address?"
      }
    ],
    "answers": {
      "greeting": "Hello! 👋 I am the AI Advisor for Private Inci Female Student Residence. We have been officially licensed by the Turkish Ministry of Youth and Sports since 2006. Feel free to ask about our 150m walking distance to campus, 100% bunk-free orthopedic rooms, open buffet dining, or early booking discounts!",
      "distance": "🏫 **Only 150 Meters (2-Minute Walk) to Campus!**\\n\\n• **Faculty of Education:** Directly across from our dormitory (150m), just a 2-minute walk.\\n• **Main Kuzeykent Campus (Engineering, Economics, Sciences, etc.):** Ring buses leave from right in front of our door (30m away) reaching faculties in 2-4 minutes.\\n• **Zero Commute Hassle:** No bus fees, no waiting in winter cold! Relax in your room between lectures.\\n• **Bus Terminal & City Center:** Direct local shuttles take only 10-15 minutes to the central bus terminal and downtown.",
      "rooms": "🛏️ **100% No Bunk Beds, Luxury Orthopedic Bedding:**\\n\\n• **No Bunk Beds:** Every student enjoys an independent orthopedic base bed.\\n• **Room Choices:** 1-Person VIP Suite, 2-Person Suite, 3-Person, and 4-Person spacious rooms.\\n• **VIP Single Suite:** Private dressing area, 6-door wardrobe, Xiaomi M5 smart air purifier, mini fridge, study desk, and soundproofing.\\n• **Room Amenities:** Personal wardrobe, dedicated study desk, ergonomic chair, laminate flooring, and high-speed fiber Wi-Fi.",
      "food": "🍳 **Open Buffet Breakfast & 4-Course Hot Dinner (Included!):**\\n\\n• Prepared fresh daily in **our own hygienic kitchen** by master female chefs.\\n• **Every day of the week:** Unlimited tea, fresh bread, and rich buffet breakfast.\\n• Balanced 4-course hot home-style dinner every evening.\\n• Also, our **Student Hobby Kitchen** with barista coffee machine and airfryer is open 24/7 for free use!",
      "price": "💰 **2026-2027 Early Booking Advantages:**\\n\\n• **Cash Discount:** Instant **10% discount** on cash payments.\\n• **Installments:** Up to **10 installments** on credit cards or flexible payment plans.\\n• **All-Inclusive:** Heating, water, electricity, fiber Wi-Fi, laundry, and 2 meals/day are all included with zero hidden costs.\\n• Contact our Manager Ms. Gülnur for custom quotes and available quotas: [+90 533 427 17 18](tel:+905334271718).",
      "security": "🛡️ **24/7 Security & Ministry Licensed:**\\n\\n• **20 Years of Trust:** Officially licensed by the Turkish Ministry of Youth and Sports since 2006.\\n• **Smart Chip Entry:** Turnstile access system limited exclusively to registered residents.\\n• **CCTV Surveillance:** 24/7 security cameras throughout all common areas.\\n• **Night Supervisor:** Female duty supervisors on site all night long for complete peace of mind.\\n• **Safe Curfew:** Ministry-compliant safe closing hours with parental notification support.",
      "laundry": "🧺 **Free Laundry & Ironing Facilities:**\\n\\n• Washing machines, dryer areas, and ironing stations are **100% free of charge** for all students.\\n• No coin tokens or extra laundry charges ever.",
      "cleaning": "🧹 **Daily Housekeeping & Sanitization:**\\n\\n• All hallways, shared spaces, and bathrooms are cleaned and disinfected daily by professional female staff.\\n• Student rooms are cleaned regularly according to strict hygiene protocols.",
      "heating_water": "🔥 **Central Heating & 24/7 Hot Water:**\\n\\n• Modern thermal insulation and central gas heating keep all rooms comfortably warm during cold Kastamonu winters.\\n• **24/7 Hot Water:** High-capacity boilers and water pressure pumps ensure instant hot showers at any hour.\\n• **Backup Generator & Water Reserves:** Dedicated backup power generator and water reservoirs prevent any utility interruptions.",
      "wifi": "📶 **Unlimited High-Speed Fiber Wi-Fi:**\\n\\n• Industrial-grade Wi-Fi Access Points on every floor guarantee fast, stable internet in all rooms, the library, and garden.\\n• Unlimited bandwidth tailored for online lectures, academic research, and video calls.",
      "study": "📚 **Quiet Study Lounge & Library:**\\n\\n• Open 24/7 for peaceful, focused studying during midterm and final exam periods.\\n• Equipped with ergonomic desks, personal reading lights, charging outlets, and high-speed Wi-Fi.",
      "sports_social": "🌿 **Fitness Area, Social Lounge & Garden Veranda:**\\n\\n• **Complimentary Fitness Space:** Exercise equipment available free for residents.\\n• **Panoramic Glass Balcony:** Relax with roommates while enjoying pleasant panoramic views.\\n• **Garden Patio & Veranda:** Green outdoor garden area with wooden patio furniture for refreshing breaks.",
      "guests": "👨‍👩‍👧 **Family & Guest Visit Policy:**\\n\\n• We warmly welcome parents in our dedicated reception guest lounge.\\n• **Mothers and sisters** may be accommodated upon prior coordination with management based on availability.\\n• For security, male visitors are strictly not permitted on residential floors.",
      "international": "🌍 **International Students Desk:**\\n\\n• **Residence Permit Assistance:** Experienced management support with Kastamonu Immigration Office and university paperwork.\\n• **Multilingual Guidance:** Staff assistance in English, Arabic, and Russian.\\n• **100% Halal Certified Kitchen:** Delicious, nutritious, and certified meals.\\n• Welcoming family atmosphere where students from over 60 countries feel at home.",
      "city_guide": "🏛️ **Kastamonu City Guide & Gastronomy:**\\n\\n• **Historic Attractions:** Kastamonu Castle, Historic Clock Tower, Nasrullah Square, Sheikh Shaban-i Veli, and Valla Canyon.\\n• **Local Delicacies:** Traditional Etli Ekmek, Banduma, Çekme Halva, and ancient Siyez wheat.\\n• Check our website [City Guide](#sehir-rehberi) section for curated routes for visiting families!",
      "contact": "📞 **Contact & Address Information:**\\n\\n• **Dormitory Director:** Ms. Gülnur Özdil - [+90 533 427 17 18](tel:+905334271718)\\n• **Mobile Info:** [+90 505 103 93 09](tel:+905051039309) / [+90 554 023 73 66](tel:+905540237366)\\n• **Address:** Kuzeykent Mah. 31. Sok. No: 1/1, Kastamonu (Opposite Education Faculty - 150m)\\n• Reach out directly on WhatsApp or phone for room reservations!",
      "fallback": "Thank you for asking! 😊 For exact prices, remaining quotas, and special discounts, you can directly message our Residence Director Ms. Gülnur via WhatsApp or phone: [+90 533 427 17 18](tel:+905334271718)"
    }
  },
  "ar": {
    "botName": "مستشار إنجي للذكاء الاصطناعي",
    "onlineStatus": "متصل • دعم على مدار 24/7",
    "welcomeMsg": "مرحباً بكِ! 👋 أنا المستشار الذكي لسكن إنجي الخاص للطالبات في كاستامونو. يمكنكِ سؤالي عن مسافة الـ 150 متراً إلى الجامعة، أنواع الغرف والأسرة الطبية، وجبات الإفطار المفتوح والعشاء المنزلي، أو إجراءات إقامة الطالب والتسجيل المبكر لعام 2026!",
    "inputPlaceholder": "اكتبي سؤالكِ عن السكن الجامعي...",
    "sendBtn": "إرسال",
    "askWhatsApp": "تواصلي مع المديرة عبر واتساب",
    "typingText": "المستشار يكتب الآن...",
    "quickChips": [
      {
        "label": "🚶 المسافة إلى الجامعة",
        "query": "كم يبعد السكن عن جامعة كاستامونو؟"
      },
      {
        "label": "🛏️ الغرف والأسرة",
        "query": "هل توجد أسرّة طابقية وما هي أنواع الغرف؟"
      },
      {
        "label": "🍳 وجبات الطعام",
        "query": "هل وجبات الفطور والعشاء مشمولة بالسعر؟"
      },
      {
        "label": "💰 الأسعار والتقسيط",
        "query": "ما هي الأسعار وطرق الدفع والتقسيط؟"
      },
      {
        "label": "🧺 غسيل الملابس",
        "query": "هل صالة غسيل وكي الملابس مجانية؟"
      },
      {
        "label": "🛡️ الأمان والحراسة",
        "query": "كيف هو نظام الأمان وساعات الدخول والخروج؟"
      },
      {
        "label": "🌍 إقامة الطالب الأجنبي",
        "query": "هل تساعدون الطالبات الأجنبيات في استخراج إقامة الطالب؟"
      },
      {
        "label": "📞 أرقام التواصل والعنوان",
        "query": "ما هو رقم مديرة السكن والعنوان الدقيق؟"
      }
    ],
    "answers": {
      "greeting": "أهلاً بكِ! 👋 أنا المستشار الذكي لسكن إنجي الخاص للبنات في كاستامونو. سكننا مرخص رسمياً من وزارة الشباب والرياضة منذ عام 2006. يسعدني الإجابة عن قربنا 150 متراً من الحرم الجامعي، الغرف المريحة بدون أسرّة طابقية، البوفيه المفتوح، أو خصومات التسجيل المبكر!",
      "distance": "🏫 **150 متراً فقط (دقيقتان سيراً على الأقدام) إلى الحرم الجامعي!**\\n\\n• **كلية التربية:** تقع مباشرة أمام السكن (150م)، دقيقتان مشياً وتكونين في قاعة المحاضرات.\\n• **حرم كوزيكنت الرئيسي (الهندسة، الاقتصاد، العلوم، الشريعة وغيرها):** تنطلق حافلات النقل الداخلي من أمام باب السكن (30م) لتصل إلى كلياتكِ خلال 2-4 دقائق.\\n• **راحة تامة في الشتاء:** لا داعي للانتظار في برد الشتاء القارس أو دفع مصاريف مواصلات!",
      "rooms": "🛏️ **100% بدون أسرّة طابقية، أسرة طبية مريحة ومستقلة:**\\n\\n• **لا توجد أسرّة طابقية إطلاقاً:** نوفر لكل طالبة سرير مستقل ذو قاعدة طبية ممتازة.\\n• **خيارات الغرف:** غرفة جناح لشخص واحد VIP، جناح لشخصين، غرف لـ 3 أشخاص ولـ 4 أشخاص واسعة.\\n• **محتويات الغرفة:** خزانة ملابس خاصة وواسعة، مكتب دراسة مستقل، كرسي مريح، وإنترنت فايبر فائق السرعة.",
      "food": "🍳 **بوفيه إفطار مفتوح و4 أصناف عشاء منزلي ساخن (مشمول بالسعر):**\\n\\n• يُطهى يومياً طازجاً في **مطبخنا الصحي الخاص** بأيدي طاهيات ماهرات بأجواء منزلية دافئة.\\n• **طوال أيام الأسبوع:** شاي وخبز مجاني غير محدود مع بوفيه الصباح.\\n• عشاء متكامل ومغذي من 4 أطباق ساخنة كل مساء.\\n• يتوفر أيضاً **مطبخ الهوايات** المزود بآلة تحضير القهوة والإسبريسو والقلاية الهوائية مجاناً 24 ساعة!",
      "price": "💰 **مزايا التسجيل المبكر 2026-2027:**\\n\\n• **خصم الدفع النقدي:** خصم فوري بنسبة **10%** عند السداد النقدي الكامل.\\n• **التقسيط:** خطط تقسيط ميسرة تصل إلى 10 أشهر.\\n• **شامل لكافة المصاريف:** التدفئة، المياه الساخنة، الكهرباء، الإنترنت الفايبر، الغسيل، ووجبتين يومياً دون أي رسوم خفية.\\n• يرجى التواصل مع مديرة السكن السيدة غولنور للحصول على عرض السعر المناسب لكِ: [+90 533 427 17 18](tel:+905334271718).",
      "security": "🛡️ **أمان تام 7/24 وترخيص رسمي من وزارة الشباب والرياضة:**\\n\\n• **خبرة 20 عاماً:** نعمل بترخيص رسمي معتمد منذ عام 2006.\\n• **بوابات إلكترونية ذكية:** دخول عبر بطاقات إلكترونية مخصصة للمقيمات فقط.\\n• **كاميرات مراقبة:** تغطي كافة المرافق المشتركة على مدار الساعة.\\n• **مشرفة أمن نسائية:** متواجدة داخل السكن طوال ساعات الليل لراحة وأمان الطالبات.\\n• **مواعيد آمنة:** ساعات إغلاق منضبطة بنظام إشعارات لأولياء الأمور.",
      "laundry": "🧺 **صالة غسيل وكي ملابس مجانية بالكامل:**\\n\\n• الغسالات الأوتوماتيكية وأجهزة التجفيف ومكواة البخار متوفرة **مجاناً لجميع الطالبات** دون أي عملات معدنية أو رسوم إضافية.",
      "cleaning": "🧹 **نظافة يومية وتعقيم شامل لجميع المرافق:**\\n\\n• تنظيف وتعقيم يومي للأروقة والحمامات والمساحات المشتركة بواسطة عاملات نظافة محترفات.\\n• تنظيف دوري للغرف الخاصة وفق أعلى معايير النظافة والصحة.",
      "heating_water": "🔥 **تدفئة مركزية بالغاز الطبيعي ومياه ساخنة 24/7:**\\n\\n• عزل حراري متطور ونظام تدفئة مركزية يضمنان بقاء الغرف دافئة طوال الشتاء.\\n• مياه ساخنة بتدفق قوي على مدار الساعة.\\n• مولد كهربائي وخزانات مياه احتياطية ضخمة تمنع أي انقطاع للخدمات.",
      "wifi": "📶 **إنترنت ألياف ضوئية (فايبر) فائق السرعة وغير محدود:**\\n\\n• أجهزة توزيع إنترنت متطورة في كل طابق تضمن تغطية ممتازة في جميع الغرف وقاعات الدراسة والحديقة.\\n• سرعة عالية بدون حدود لتحميل المحاضرات ومكالمات الفيديو والبحث الأكاديمي.",
      "study": "📚 **قاعة دراسة هادئة ومكتبة مجهزة:**\\n\\n• مفتوحة 24 ساعة لتوفير بيئة دراسية هادئة ومريحة خلال فترات الامتحانات.\\n• مجهزة بمكاتب مريحة وإضاءة قراءة مخصصة ومنافذ شحن وإنترنت فائق السرعة.",
      "sports_social": "🌿 **صالة لياقة بدنية مجانية، شرفة بانورامية وحديقة:**\\n\\n• أجهزة رياضية مجانية للحفاظ على النشاط والصحة.\\n• شرفة زجاجية بانورامية للاسترخاء وتبادل الأحاديث.\\n• حديقة وتراس خشبي للاستمتاع بالهواء الطلق.",
      "guests": "👨‍👩‍👧 **سياسة زيارة أولياء الأمور والعائلة:**\\n\\n• نرحب بعائلات الطالبات في قاعة استقبال الزوار المخصصة في الطابق الأرضي.\\n• يمكن لـ **الأمهات والأخوات** المبيت بالتنسيق المسبق مع الإدارة حسب توفر الأماكن.\\n• يُمنع صعود الزوار الذكور إلى طوابق غرف الطالبات حفاظاً على الخصوصية والأمان التام.",
      "international": "🌍 **مكتب رعاية الطالبات الدوليات:**\\n\\n• **معاملات الإقامة الطلابية:** تقدم إدارة السكن دعماً كاملاً في تحضير أوراق السكن الرسمية لمديرية إدارة الهجرة وجامعة كاستامونو.\\n• **تواصل متعدد اللغات:** إرشاد ودعم باللغات العربية والإنجليزية والروسية.\\n• **مطبخ حلال 100%:** جميع اللحوم والمكونات مذبوحة ومجهزة وفق الشريعة الإسلامية.\\n• بيئة عائلية آمنة ومحترمة تحتضن طالبات من أكثر من 60 دولة.",
      "city_guide": "🏛️ **دليل مدينة كاستامونو والمعالم السياحية:**\\n\\n• **أبرز المعالم:** قلعة كاستامونو التاريخية، برج الساعة، جامع نصر الله، وادي فالا وجبل إلغاز.\\n• **أشهر المأكولات:** خبز كاستامونو باللحم، الباندوما، الحلاوة السحب، وقمح السييز العضوي.\\n• تفضلوا بزيارة قسم دليل المدينة على موقعنا لمزيد من التفاصيل!",
      "contact": "📞 **معلومات التواصل والعنوان الرسمي:**\\n\\n• **مديرة السكن:** السيدة غولنور أوزديل - [+90 533 427 17 18](tel:+905334271718)\\n• **هواتف الاستعلام:** [0505 103 93 09](tel:+905051039309) / [+90 554 023 73 66](tel:+905540237366)\\n• **العنوان:** كوزيكنت، شارع 31، رقم 1/1، كاستامونو (مقابل كلية التربية 150م)",
      "fallback": "شكراً لتواصلكِ معنا! 😊 لمعرفة الأسعار الدقيقة وحجز الغرفة المتاحة وخصومات التسجيل المبكر، يمكنكِ التواصل فوراً مع مديرة السكن السيدة غولنور عبر واتساب أو الهاتف: [+90 533 427 17 18](tel:+905334271718)"
    }
  },
  "ru": {
    "botName": "ИИ-Консультант общежития Инджи",
    "onlineStatus": "В сети • 24/7 поддержка",
    "welcomeMsg": "Здравствуйте! 👋 Я виртуальный консультант частной женской резиденции «Инджи» в Кастамону. Вы можете задать мне любые вопросы о расстоянии 150м до университета, типах комнат, ортопедических кроватях, шведском столе или скидках раннего бронирования на 2026 год!",
    "inputPlaceholder": "Напишите ваш вопрос о резиденции...",
    "sendBtn": "Отправить",
    "askWhatsApp": "Написать директору в WhatsApp",
    "typingText": "Консультант печатает ответ...",
    "quickChips": [
      {
        "label": "🚶 Расстояние до кампуса",
        "query": "Как далеко общежитие от Университета Кастамону?"
      },
      {
        "label": "🛏️ Комнаты и кровати",
        "query": "Есть ли двухъярусные кровати и какие типы комнат?"
      },
      {
        "label": "🍳 Питание (завтрак и ужин)",
        "query": "Входит ли питание в стоимость проживания?"
      },
      {
        "label": "💰 Цены и скидки",
        "query": "Сколько стоит проживание и есть ли рассрочка?"
      },
      {
        "label": "🧺 Прачечная бесплатно?",
        "query": "Бесплатна ли прачечная и глажка?"
      },
      {
        "label": "🛡️ Безопасность",
        "query": "Как организована охрана и до скольки вход?"
      },
      {
        "label": "🌍 ВНЖ для иностранцев",
        "query": "Помогаете ли с документами на вид на жительство (икамет)?"
      },
      {
        "label": "📞 Контакты и адрес",
        "query": "Номер телефона директора и точный адрес?"
      }
    ],
    "answers": {
      "greeting": "Здравствуйте! 👋 Я виртуальный консультант женского общежития «Инджи». Наше общежитие лицензировано Министерством молодежи и спорта Турции с 2006 года. Спрашивайте о комнатах без двухъярусных кроватей, 150 метрах до университета, питании или скидках!",
      "distance": "🏫 **Всего 150 метров (2 минуты пешком) до кампуса!**\\n\\n• **Педагогический факультет:** Прямо напротив нашего общежития (150м, 2 мин ходьбы).\\n• **Главный кампус Кузейкент (Инженерный, Экономика, Наука и др.):** Автобусы и шаттлы отходят в 30м от наших ворот и доезжают за 2-4 минуты.\\n• **Комфорт зимой:** Не нужно мерзнуть на остановках и тратить деньги на проезд; между парами можно прийти и отдохнуть в своей комнате!\\n• **Автовокзал и центр города:** Маршрутки за 10-15 минут доставят вас в центр.",
      "rooms": "🛏️ **100% без двухъярусных кроватей, ортопедический комфорт:**\\n\\n• **Никаких двухъярусных нар:** У каждой студентки отдельная удобная кровать с ортопедическим основанием.\\n• **Типы комнат:** 1-местный VIP-сьют, 2-местный сьют, 3-местные и 4-местные просторные комнаты.\\n• **В комнате:** Личный вместительный шкаф, рабочий стол, эргономичный стул и скоростной Wi-Fi.",
      "food": "🍳 **Шведский стол на завтрак и 4 блюда горячего домашнего ужина (включено):**\\n\\n• Еда готовится ежедневно на **собственной чистой кухне** опытными поварами по-домашнему.\\n• **Каждый день:** Богатый шведский стол, свежий хлеб и чай без ограничений.\\n• Горячий сбалансированный ужин из 4 блюд каждый вечер.\\n• Также 24/7 доступна **студенческая хобби-кухня** с автоматической кофемашиной и аэрогрилем!",
      "price": "💰 **Преимущества ранней регистрации 2026-2027:**\\n\\n• **Скидка при полной оплате:** Скидка **10%** при единовременной оплате наличными.\\n• **Рассрочка:** Удобные программы рассрочки до 10 месяцев.\\n• **Все включено:** Отопление, горячая вода, свет, скоростной интернет, прачечная и 2-разовое питание включены в стоимость без скрытых доплат.\\n• Свяжитесь с директором Гюльнур ханым для персонального расчета: [+90 533 427 17 18](tel:+905334271718).",
      "security": "🛡️ **Круглосуточная охрана и государственная лицензия:**\\n\\n• **20 лет опыта:** Официальная лицензия Министерства молодежи и спорта Турции с 2006 года.\\n• **Электронный пропуск:** Проход через турникеты по умным чип-картам.\\n• **Видеонаблюдение:** Камеры 24/7 во всех общих зонах.\\n• **Ночные дежурные:** Женский персонал находится в здании всю ночь.\\n• **Безопасные часы входа:** Контролируемый доступ с информированием родителей.",
      "laundry": "🧺 **Бесплатная прачечная и гладильная комната:**\\n\\n• Стиральные машины, сушилки и утюги **полностью бесплатны** для всех студенток. Никаких жетонов и доплат.",
      "cleaning": "🧹 **Регулярная уборка комнат и этажей:**\\n\\n• Все этажи, холлы, ванные комнаты и общие зоны ежедневно убираются и дезинфицируются профессиональным персоналом.\\n• Комнаты студенток регулярно убираются с соблюдением высоких стандартов гигиены.",
      "heating_water": "🔥 **Центральное отопление и горячая вода 24/7:**\\n\\n• Качественная теплоизоляция здания и центральное газовое отопление гарантируют уют и тепло в комнатах.\\n• **Горячая вода 24/7:** Мощные бойлеры обеспечивают бесперебойную подачу горячей воды в любое время.\\n• **Резервуары для воды и генератор:** Защита от любых городских перебоев.",
      "wifi": "📶 **Безлимитный скоростной оптоволоконный Wi-Fi:**\\n\\n• Мощные точки доступа на всех этажах гарантируют стабильный скоростной интернет в комнатах, учебном зале и саду.\\n• Безлимитный трафик для онлайн-лекций, учебы и общения с родными.",
      "study": "📚 **Тихий учебный зал и библиотека:**\\n\\n• Открыт 24/7 для сосредоточенной подготовки к экзаменам и зачетам.\\n• Эргономичные столы, индивидуальное освещение, розетки и быстрый Wi-Fi.",
      "sports_social": "🌿 **Фитнес-зона, лаунж-балкон и сад с верандой:**\\n\\n• **Бесплатный фитнес:** Тренажеры для поддержания здоровья и активности.\\n• **Панорамный застекленный балкон:** Уютная зона отдыха с красивым видом.\\n• **Сад и деревянная веранда:** Зеленая территория на свежем воздухе для отдыха между занятиями.",
      "guests": "👨‍👩‍👧 **Правила посещения для родителей и гостей:**\\n\\n• Мы с радостью принимаем родителей в специальном гостевом зале на первом этаже.\\n• **Мамы и сестры** могут остаться с ночевкой по предварительному согласованию с администрацией.\\n• Вход мужчин на жилые этажи строго запрещен в целях безопасности и приватности.",
      "international": "🌍 **Международный отдел поддержки иностранных студенток:**\\n\\n• **Помощь с ВНЖ (икамет):** Предоставляем официальные документы и сопровождаем в Миграционной службе Кастамону.\\n• **Многоязычный сервис:** Консультации на русском, английском и арабском языках.\\n• **100% Халяль:** Все продукты питания строго халяльные и свежие.\\n• Дружная многонациональная атмосфера, где учатся студентки более чем из 60 стран.",
      "city_guide": "🏛️ **Гид по Кастамону и местная кухня:**\\n\\n• **Достопримечательности:** Крепость Кастамону, Историческая часовая башня, площадь Насруллах, старинные особняки, каньон Валла и горы Илгаз.\\n• **Кулинарные бренды:** Знаменитый пирог с мясом (Etli Ekmek), Бандума, халва Чекме и органическая полба Сиез.\\n• Подробные туристические маршруты для родителей доступны в разделе гида на сайте!",
      "contact": "📞 **Контакты и официальный адрес:**\\n\\n• **Директор общежития:** Гюльнур Оздил - [+90 533 427 17 18](tel:+905334271718)\\n• **Телефоны для справок:** [+90 505 103 93 09](tel:+905051039309) / [+90 554 023 73 66](tel:+905540237366)\\n• **Адрес:** Kuzeykent Mah. 31. Sok. No: 1/1, Kastamonu (напротив факультета педагогики, 150м)\\n• Звоните или пишите в WhatsApp для бронирования и получения скидки!",
      "fallback": "Спасибо за ваш вопрос! 😊 Чтобы узнать точные цены, свободные места на 2026-2027 учебный год и получить индивидуальное предложение, напишите директору Гюльнур ханым в WhatsApp или позвоните по телефону: [+90 533 427 17 18](tel:+905334271718)"
    }
  }
};

  // 2. AĞIRLIKLI INTENT EŞLEŞTİRME KURALLARI
  const TOPIC_RULES = [
  {
    "topic": "greeting",
    "weight": 4,
    "words": [
      "merhaba",
      "selam",
      "gunaydin",
      "iyi gunler",
      "hayirli gunler",
      "iyi aksamlar",
      "kolay gelsin",
      "nasilsiniz",
      "hello",
      "hi",
      "hey",
      "good morning",
      "good afternoon",
      "مرحبا",
      "أهلا",
      "اهلا",
      "السلام عليكم",
      "صباح الخير",
      "مساء الخير",
      "привет",
      "здравствуйте",
      "добрый день",
      "доброе утро",
      "добрый вечер"
    ]
  },
  {
    "topic": "distance",
    "weight": 4,
    "words": [
      "kampus",
      "mesafe",
      "kac metre",
      "kac dakika",
      "ne kadar uzakta",
      "uzakta",
      "uzak",
      "uzaklik",
      "yurume",
      "fakulte",
      "egitim fakultesi",
      "kuzeykent",
      "merkez kampus",
      "ring",
      "ulasim",
      "durak",
      "otogar",
      "yol parasi",
      "servis",
      "campus",
      "distance",
      "how far",
      "walk",
      "faculty",
      "minibus",
      "shuttle",
      "station",
      "المسافة",
      "كم يبعد",
      "كم دقيقة",
      "مشيا",
      "كلية",
      "حرم",
      "جامعة",
      "مواصلات",
      "محطة",
      "расстояни",
      "далеко",
      "пешком",
      "кампус",
      "факультет",
      "остановк",
      "автобус",
      "автовокзал"
    ]
  },
  {
    "topic": "rooms",
    "weight": 3,
    "words": [
      "ranza",
      "baza",
      "yatak",
      "oda",
      "tek kisilik",
      "1 kisilik",
      "2 kisilik",
      "3 kisilik",
      "4 kisilik",
      "vip",
      "suit",
      "gardırop",
      "dolap",
      "mini buzdolabi",
      "buzdolabi",
      "hava temizleyici",
      "balkon",
      "ortopedik",
      "room",
      "rooms",
      "bed",
      "beds",
      "bunk",
      "single room",
      "double room",
      "suite",
      "wardrobe",
      "fridge",
      "orthopedic",
      "غرف",
      "غرفة",
      "سرير",
      "أسرة",
      "طابق",
      "طابقين",
      "مفرد",
      "ثلاجة",
      "دولاب",
      "комнат",
      "номер",
      "кроват",
      "двухъярусн",
      "сьют",
      "холодильник",
      "ортопедическ",
      "шкаф"
    ]
  },
  {
    "topic": "food",
    "weight": 3,
    "words": [
      "yemek",
      "kahvalti",
      "acik bufe",
      "aksam yemegi",
      "ogun",
      "asci",
      "mutfak",
      "hobi mutfagi",
      "airfryer",
      "kahve",
      "cay",
      "menu",
      "helal",
      "food",
      "meal",
      "breakfast",
      "dinner",
      "buffet",
      "kitchen",
      "cook",
      "halal",
      "طعام",
      "أكل",
      "فطور",
      "عشاء",
      "وجب",
      "مطبخ",
      "بوفيه",
      "حلال",
      "еда",
      "питани",
      "завтрак",
      "ужин",
      "кухн",
      "шведский",
      "халяль",
      "чай"
    ]
  },
  {
    "topic": "price",
    "weight": 3,
    "words": [
      "fiyat",
      "ucret",
      "kac tl",
      "kac para",
      "taksit",
      "indirim",
      "odeme",
      "senet",
      "pesin",
      "maliyet",
      "butce",
      "depozito",
      "fiyati ne kadar",
      "ucreti ne kadar",
      "aylik ne kadar",
      "donemlik ne kadar",
      "erken kayit",
      "price",
      "pricing",
      "cost",
      "how much",
      "installment",
      "discount",
      "fee",
      "rates",
      "deposit",
      "سعر",
      "أسعار",
      "اسعار",
      "تكلف",
      "خصم",
      "تقسيط",
      "دفع",
      "كم سعر",
      "цен",
      "стоимост",
      "скидк",
      "рассрочк",
      "оплат",
      "сколько стоит"
    ]
  },
  {
    "topic": "security",
    "weight": 4,
    "words": [
      "guvenlik",
      "cip",
      "turnike",
      "kamera",
      "giris saat",
      "cikis saat",
      "kapi saat",
      "saat kacta",
      "izin",
      "ruhsat",
      "bakanlik",
      "nobetci",
      "gece amiri",
      "kapanis",
      "security",
      "safe",
      "curfew",
      "turnstile",
      "camera",
      "license",
      "night supervisor",
      "أمان",
      "حراس",
      "بواب",
      "ساعات",
      "كاميرات",
      "ترخيص",
      "مشرفة",
      "безопасн",
      "охран",
      "турникет",
      "время входа",
      "камер",
      "лицензи",
      "дежурн"
    ]
  },
  {
    "topic": "laundry",
    "weight": 4,
    "words": [
      "camasir",
      "camasirhane",
      "utu",
      "yikama",
      "kurutma",
      "deterjan",
      "laundry",
      "wash",
      "iron",
      "drying",
      "washing machine",
      "غسيل",
      "كوي",
      "غسالة",
      "ملابس",
      "стирк",
      "прачечн",
      "утюг",
      "сушилк",
      "стиральная машина"
    ]
  },
  {
    "topic": "cleaning",
    "weight": 5,
    "words": [
      "temiz",
      "temizlik",
      "kat temizligi",
      "oda temizligi",
      "hijyen",
      "dezenfekt",
      "cop",
      "cleaning",
      "housekeeping",
      "hygiene",
      "clean",
      "نظافة",
      "تنظيف",
      "تعقيم",
      "уборк",
      "гигиен",
      "дезинфекц",
      "чистк"
    ]
  },
  {
    "topic": "heating_water",
    "weight": 4,
    "words": [
      "isinma",
      "dogalgaz",
      "kalorifer",
      "sicak su",
      "sicaksu",
      "banyo",
      "hidrofor",
      "su deposu",
      "jenerator",
      "soguk",
      "kisin",
      "heating",
      "hot water",
      "warm",
      "generator",
      "winter",
      "تدفئة",
      "ماء ساخن",
      "غاز",
      "مولد",
      "شتاء",
      "отоплени",
      "горячая вода",
      "генератор",
      "тепло",
      "зима"
    ]
  },
  {
    "topic": "wifi",
    "weight": 4,
    "words": [
      "wifi",
      "wi-fi",
      "internet",
      "fiber",
      "baglanti",
      "kota",
      "hiz",
      "modem",
      "sifre",
      "kopma",
      "speed",
      "network",
      "شبكة",
      "واي فاي",
      "انترنت",
      "вайфай",
      "вай-фай",
      "интернет",
      "скорость"
    ]
  },
  {
    "topic": "study",
    "weight": 4,
    "words": [
      "etut",
      "kutuphane",
      "ders calisma",
      "calisma salonu",
      "sessiz oda",
      "vize",
      "final",
      "sinav",
      "study",
      "library",
      "exam",
      "quiet room",
      "مكتبة",
      "دراسة",
      "قاعة دراسة",
      "امتحان",
      "библиотек",
      "учебный зал",
      "экзамен",
      "тихая комната"
    ]
  },
  {
    "topic": "sports_social",
    "weight": 4,
    "words": [
      "spor",
      "fitness",
      "spor salonu",
      "plates",
      "pilates",
      "cam balkon",
      "veranda",
      "bahce",
      "dinlenme",
      "sosyal",
      "gym",
      "workout",
      "garden",
      "patio",
      "balcony",
      "رياضة",
      "لياقة",
      "شرفة",
      "حديقة",
      "спорт",
      "фитнес",
      "сад",
      "веранда",
      "балкон"
    ]
  },
  {
    "topic": "guests",
    "weight": 4,
    "words": [
      "misafir",
      "veli",
      "anne",
      "baba",
      "kardes",
      "aile",
      "yatiya",
      "ziyaret",
      "veli odasi",
      "konuk",
      "guest",
      "parent",
      "mother",
      "family",
      "visit",
      "overnight",
      "ضيوف",
      "عائلة",
      "أهل",
      "ام",
      "زيارة",
      "مبيت",
      "гост",
      "родител",
      "мама",
      "семья",
      "ночевка",
      "визит"
    ]
  },
  {
    "topic": "international",
    "weight": 4,
    "words": [
      "ikamet",
      "yabanci",
      "uluslararasi",
      "goc idaresi",
      "tomer",
      "pasaport",
      "vize",
      "residence",
      "permit",
      "international",
      "foreign",
      "visa",
      "passport",
      "إقامة",
      "اجانب",
      "أجنبي",
      "دولية",
      "فيزا",
      "هجرة",
      "جواز",
      "внж",
      "икамет",
      "иностран",
      "виз",
      "паспорт",
      "миграционн"
    ]
  },
  {
    "topic": "city_guide",
    "weight": 3,
    "words": [
      "sehir rehberi",
      "gezilecek yerler",
      "kastamonuda gezilecek",
      "kastamonu kalesi",
      "saat kulesi",
      "nasrullah",
      "seyh saban",
      "valla kanyonu",
      "ilgaz",
      "etli ekmek",
      "banduma",
      "cekme helva",
      "siyez",
      "gezsen",
      "city guide",
      "attractions",
      "sightseeing",
      "معالم",
      "سياحة",
      "دليل المدينة",
      "достопримечательност",
      "экскурси",
      "гид"
    ]
  },
  {
    "topic": "student_guide",
    "weight": 4,
    "words": [
      "ogrenci hayati",
      "ogrenci yasam",
      "ogrenci rehberi",
      "neler yapilabilir",
      "ne yapilir",
      "universitenin artilari",
      "sehrin artilari",
      "vakit gecirme",
      "nerede eglenilir",
      "eglence",
      "kuzeykent kafeler",
      "kafe",
      "genclik merkezi",
      "kutuphane nerede",
      "spor salonu",
      "yuzme havuzu",
      "kayak",
      "ilgaz kayak",
      "horma",
      "gideros",
      "kudos",
      "student life",
      "what to do",
      "campus life"
    ]
  },
  {
    "topic": "contact",
    "weight": 2,
    "words": [
      "telefon",
      "numara",
      "iletisim",
      "adres",
      "gulnur",
      "mudur",
      "konum",
      "nerede",
      "hangi sokak",
      "yol tarifi",
      "harita",
      "rezervasyon",
      "kayit",
      "contact",
      "phone",
      "number",
      "address",
      "location",
      "director",
      "manager",
      "located",
      "where is",
      "map",
      "directions",
      "هاتف",
      "رقم",
      "اتصال",
      "عنوان",
      "موقع",
      "أين يقع",
      "مديرة",
      "خريطة",
      "телефон",
      "номер",
      "контакт",
      "адрес",
      "где находится",
      "директор",
      "карта"
    ]
  }
];

  function foldText(str) {
    return (str || "")
      .toLowerCase()
      .replace(/[ğĞ]/g, "g")
      .replace(/[üÜ]/g, "u")
      .replace(/[şŞ]/g, "s")
      .replace(/[ıİ]/g, "i")
      .replace(/[öÖ]/g, "o")
      .replace(/[çÇ]/g, "c");
  }

  function findAnswer(query, lang) {
    const rawQ = (query || "").toLowerCase().trim();
    const foldedQ = foldText(rawQ);
    const l = KB[lang] ? lang : "tr";
    const answers = KB[l].answers;

    const scores = {};
    for (const rule of TOPIC_RULES) {
      scores[rule.topic] = 0;
      for (const w of rule.words) {
        const foldedW = foldText(w);
        if (rawQ.includes(w) || foldedQ.includes(foldedW)) {
          scores[rule.topic] += rule.weight;
        }
      }
    }

    let highestTopic = null;
    let maxScore = 0;
    for (const topic in scores) {
      if (scores[topic] > maxScore) {
        maxScore = scores[topic];
        highestTopic = topic;
      }
    }

    if (highestTopic && maxScore > 0 && answers[highestTopic]) {
      return {
        text: answers[highestTopic],
        topic: highestTopic,
        score: maxScore,
        isFallback: false
      };
    }

    return {
      text: answers.fallback,
      topic: "fallback",
      score: 0,
      isFallback: true
    };
  }

  // 3. UI ELEMANLARINI ENJEKTE ETME & YÖNETME
  let chatHistory = [];
  let isChatOpen = false;

  function getCurrentLang() {
    if (window.getLanguage && typeof window.getLanguage === "function") {
      return window.getLanguage() || "tr";
    }
    const htmlLang = document.documentElement.getAttribute("lang");
    return htmlLang && KB[htmlLang] ? htmlLang : "tr";
  }

  function createChatWidget() {
    if (document.getElementById("inci-ai-widget-container")) return;

    const lang = getCurrentLang();
    const kb = KB[lang] || KB.tr;
    const isRtl = lang === "ar";

    // Container
    const container = document.createElement("div");
    container.id = "inci-ai-widget-container";
    container.className = "fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end pointer-events-none transition-[bottom] duration-300 ease-in-out";

    // Floating Button
    const triggerBtn = document.createElement("button");
    triggerBtn.id = "inci-ai-trigger-btn";
    triggerBtn.type = "button";
    triggerBtn.setAttribute("aria-label", "Yapay Zeka Yurt Danışmanı");
    triggerBtn.className = "pointer-events-auto flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full text-white bg-gradient-to-r from-royal-950 via-roseGold-700 to-royal-950 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20 group cursor-pointer";
    triggerBtn.innerHTML = `
      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
      </span>
      <span class="text-lg">🤖</span>
      <span id="inci-ai-btn-text" class="text-xs sm:text-sm font-bold tracking-wide">${kb.botName}</span>
    `;

    // Proactive Prompt Bubble
    const bubble = document.createElement("div");
    bubble.id = "inci-ai-proactive-bubble";
    bubble.className = "pointer-events-auto mb-3 max-w-xs bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-pearl-200 text-xs text-royal-950 font-medium transition-all duration-500 opacity-0 translate-y-3 pointer-events-none";
    bubble.innerHTML = `
      <div class="flex items-start gap-2.5">
        <span class="text-lg">✨</span>
        <div>
          <div class="font-bold text-roseGold-900">${kb.botName}</div>
          <p class="text-[11px] text-royal-700 mt-0.5" id="inci-ai-bubble-text">${kb.welcomeMsg.substring(0, 100)}...</p>
        </div>
        <button type="button" onclick="document.getElementById('inci-ai-proactive-bubble')?.remove()" class="text-stone-400 hover:text-stone-700 ml-1">✕</button>
      </div>
    `;

    // Modal Chatbox
    const chatModal = document.createElement("div");
    chatModal.id = "inci-ai-modal";
    chatModal.className = "pointer-events-auto hidden w-[92vw] sm:w-[420px] h-[560px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border border-pearl-200 flex flex-col overflow-hidden transition-all duration-300 mb-3 origin-bottom-right";
    chatModal.style.backgroundColor = "#ffffff";
    if (isRtl) chatModal.setAttribute("dir", "rtl");

    // Modal Header
    const modalHeader = document.createElement("div");
    modalHeader.className = "bg-gradient-to-r from-royal-950 via-royal-900 to-royal-950 text-white p-4 flex items-center justify-between border-b border-white/10 shrink-0";
    modalHeader.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-white/10 border border-white/20 p-1 flex items-center justify-center shrink-0">
          <img src="assets/logo.png" alt="Logo" class="w-full h-full object-contain rounded-full">
        </div>
        <div>
          <h4 id="inci-ai-modal-title" class="font-heading font-extrabold text-sm text-white">${kb.botName}</h4>
          <div class="flex items-center gap-1.5 text-[10px] text-emerald-400">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span id="inci-ai-status-text">${kb.onlineStatus}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-1">
        <button type="button" id="inci-ai-clear-btn" title="Sohbeti Temizle" class="p-1.5 rounded-xl hover:bg-white/10 text-pearl-300 hover:text-white transition text-xs">
          🗑️
        </button>
        <button type="button" id="inci-ai-close-btn" class="p-1.5 rounded-xl hover:bg-white/10 text-pearl-300 hover:text-white transition text-sm">
          ✕
        </button>
      </div>
    `;

    // Messages Container
    const messagesBox = document.createElement("div");
    messagesBox.id = "inci-ai-messages";
    messagesBox.className = "flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar text-xs sm:text-[13px] bg-gradient-to-b from-pearl-50/50 via-white to-pearl-50/30";

    // Quick Chips Area
    const chipsBox = document.createElement("div");
    chipsBox.id = "inci-ai-chips";
    chipsBox.className = "p-2.5 border-t border-pearl-200/80 bg-white/90 overflow-x-auto flex gap-1.5 no-scrollbar shrink-0";

    // Input Area
    const inputArea = document.createElement("form");
    inputArea.id = "inci-ai-form";
    inputArea.className = "p-3 border-t border-pearl-200 bg-white flex items-center gap-2 shrink-0";
    inputArea.innerHTML = `
      <input type="text" id="inci-ai-input" placeholder="${kb.inputPlaceholder}" autocomplete="off" class="flex-1 px-4 py-2.5 rounded-2xl border border-pearl-300 focus:outline-none focus:ring-2 focus:ring-roseGold-500 text-xs text-royal-950 bg-pearl-50/60 transition">
      <button type="submit" id="inci-ai-send-btn" class="px-4 py-2.5 rounded-2xl bg-gradient-luxury text-white font-bold text-xs shadow hover:scale-[1.02] active:scale-95 transition flex items-center justify-center gap-1">
        <span>${kb.sendBtn}</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </button>
    `;

    // Assemble modal
    chatModal.appendChild(modalHeader);
    chatModal.appendChild(messagesBox);
    chatModal.appendChild(chipsBox);
    chatModal.appendChild(inputArea);

    container.appendChild(bubble);
    container.appendChild(chatModal);
    container.appendChild(triggerBtn);
    document.body.appendChild(container);

    // Initial populate
    renderWelcomeAndChips();

    // Proactive popup after 5 seconds
    setTimeout(() => {
      if (!isChatOpen && bubble) {
        bubble.classList.remove("opacity-0", "translate-y-3", "pointer-events-none");
      }
    }, 5000);

    // Event Listeners
    triggerBtn.addEventListener("click", toggleChat);
    chatModal.querySelector("#inci-ai-close-btn")?.addEventListener("click", toggleChat);
    chatModal.querySelector("#inci-ai-clear-btn")?.addEventListener("click", clearChat);
    inputArea.addEventListener("submit", handleUserSubmit);

    // Listen to language changes
    window.addEventListener("languageChanged", (e) => {
      updateAssistantLanguage(e.detail.lang);
    });
  }

  function renderWelcomeAndChips() {
    const lang = getCurrentLang();
    const kb = KB[lang] || KB.tr;
    const messagesBox = document.getElementById("inci-ai-messages");
    const chipsBox = document.getElementById("inci-ai-chips");
    if (!messagesBox || !chipsBox) return;

    messagesBox.innerHTML = "";
    appendBotMessage(kb.welcomeMsg);

    chipsBox.innerHTML = "";
    kb.quickChips.forEach((chip) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "whitespace-nowrap px-3 py-1.5 rounded-full text-[11px] font-semibold bg-pearl-100 hover:bg-roseGold-100 hover:text-roseGold-900 text-royal-800 border border-pearl-200 transition cursor-pointer shrink-0";
      btn.textContent = chip.label;
      btn.onclick = () => {
        handleUserMessage(chip.query);
      };
      chipsBox.appendChild(btn);
    });
  }

  function updateAssistantLanguage(lang) {
    const kb = KB[lang] || KB.tr;
    const isRtl = lang === "ar";
    const modal = document.getElementById("inci-ai-modal");
    if (modal) {
      if (isRtl) modal.setAttribute("dir", "rtl");
      else modal.removeAttribute("dir");
    }

    const title = document.getElementById("inci-ai-modal-title");
    if (title) title.textContent = kb.botName;

    const btnText = document.getElementById("inci-ai-btn-text");
    if (btnText) btnText.textContent = kb.botName;

    const statusText = document.getElementById("inci-ai-status-text");
    if (statusText) statusText.textContent = kb.onlineStatus;

    const input = document.getElementById("inci-ai-input");
    if (input) input.placeholder = kb.inputPlaceholder;

    const sendBtnSpan = document.querySelector("#inci-ai-send-btn span");
    if (sendBtnSpan) sendBtnSpan.textContent = kb.sendBtn;

    const bubbleText = document.getElementById("inci-ai-bubble-text");
    if (bubbleText) bubbleText.textContent = kb.welcomeMsg.substring(0, 100) + "...";

    renderWelcomeAndChips();
  }

  function toggleChat() {
    const modal = document.getElementById("inci-ai-modal");
    const bubble = document.getElementById("inci-ai-proactive-bubble");
    if (!modal) return;

    isChatOpen = !isChatOpen;
    if (isChatOpen) {
      modal.classList.remove("hidden");
      if (bubble) bubble.remove();
      if (typeof window.dismissCookieBanner === "function") {
        window.dismissCookieBanner();
      }
      const input = document.getElementById("inci-ai-input");
      if (input) setTimeout(() => input.focus(), 150);
    } else {
      modal.classList.add("hidden");
    }
  }

  function clearChat() {
    chatHistory = [];
    renderWelcomeAndChips();
  }

  function appendUserMessage(text) {
    const messagesBox = document.getElementById("inci-ai-messages");
    if (!messagesBox) return;

    const msgEl = document.createElement("div");
    msgEl.className = "flex justify-end";
    msgEl.innerHTML = `
      <div class="max-w-[85%] bg-gradient-luxury text-white rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm leading-relaxed break-words">
        ${escapeHtml(text)}
      </div>
    `;
    messagesBox.appendChild(msgEl);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }

  function appendBotMessage(markdownText, showWhatsAppBtn = false, userQuery = "") {
    const messagesBox = document.getElementById("inci-ai-messages");
    if (!messagesBox) return;

    const lang = getCurrentLang();
    const kb = KB[lang] || KB.tr;

    const formatted = formatMarkdown(markdownText);

    const msgEl = document.createElement("div");
    msgEl.className = "flex items-start gap-2.5";
    let htmlContent = `
      <div class="w-7 h-7 rounded-full bg-royal-900 text-white flex items-center justify-center shrink-0 text-xs shadow-sm mt-1 font-bold">
        🤖
      </div>
      <div class="max-w-[85%] bg-white border border-pearl-200 text-royal-950 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm leading-relaxed space-y-2">
        <div>${formatted}</div>
    `;

    if (showWhatsAppBtn) {
      const waMsg = encodeURIComponent("Merhaba, Özel İnci Kız Yurdu web sitesi yapay zeka danışmanı üzerinden ulaşıyorum. Bilgi almak istediğim konu: " + (userQuery || "Oda ve kayıt detayları"));
      htmlContent += `
        <div class="pt-2 border-t border-pearl-100">
          <a href="https://wa.me/905051039309?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow transition">
            <span>💬</span>
            <span>${kb.askWhatsApp}</span>
          </a>
        </div>
      `;
    }

    htmlContent += `</div>`;
    msgEl.innerHTML = htmlContent;
    messagesBox.appendChild(msgEl);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }

  function showTypingIndicator() {
    const messagesBox = document.getElementById("inci-ai-messages");
    if (!messagesBox) return null;

    const lang = getCurrentLang();
    const kb = KB[lang] || KB.tr;

    const ind = document.createElement("div");
    ind.id = "inci-ai-typing";
    ind.className = "flex items-center gap-2 text-royal-600 text-xs italic";
    ind.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-roseGold-400 animate-ping"></span>
      <span>${kb.typingText}</span>
    `;
    messagesBox.appendChild(ind);
    messagesBox.scrollTop = messagesBox.scrollHeight;
    return ind;
  }

  function removeTypingIndicator() {
    const ind = document.getElementById("inci-ai-typing");
    if (ind) ind.remove();
  }

  async function handleUserSubmit(e) {
    e.preventDefault();
    const input = document.getElementById("inci-ai-input");
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    handleUserMessage(text);
  }

  async function handleUserMessage(userQuery) {
    appendUserMessage(userQuery);
    chatHistory.push({ role: "user", content: userQuery });

    showTypingIndicator();

    let answered = false;

    // 1. First, try Cloudflare Worker /api/ai-chat endpoint
    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: userQuery,
          message: userQuery,
          q: userQuery,
          prompt: userQuery,
          text: userQuery,
          lang: getCurrentLang(),
          history: chatHistory.slice(-4)
        })
      });
      if (response.ok) {
        const data = await response.json();
        let replyText = data && (data.reply || data.response);

        // SAFETY NET: If server returns fallback or empty, evaluate client KB
        if (!data || data.topic === "fallback" || !replyText) {
          const clientAnswer = findAnswer(userQuery, getCurrentLang());
          if (clientAnswer && !clientAnswer.isFallback) {
            replyText = clientAnswer.text;
          }
        }

        if (replyText) {
          removeTypingIndicator();
          appendBotMessage(replyText, true, userQuery);
          chatHistory.push({ role: "assistant", content: replyText });
          answered = true;
        }
      }
    } catch (err) {
      // Server fetch error, use client fallback
    }

    // 2. Client-side grounded Knowledge Base engine (Zero latency fallback)
    if (!answered) {
      setTimeout(() => {
        removeTypingIndicator();
        const lang = getCurrentLang();
        const localAns = findAnswer(userQuery, lang);
        const reply = (localAns && localAns.text) ? localAns.text : localAns;
        appendBotMessage(reply, true, userQuery);
        chatHistory.push({ role: "assistant", content: reply });
      }, 250);
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatMarkdown(str) {
    let s = escapeHtml(str);
    // Bold
    s = s.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Bullet points
    s = s.replace(/^[•*]\s*(.*?)$/gm, "<div class='flex items-start gap-1.5 my-0.5'><span class='text-roseGold-700 font-bold'>•</span><span>$1</span></div>");
    // Links
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' target='_blank' rel='noopener noreferrer' class='text-roseGold-700 font-bold underline hover:text-roseGold-900'>$1</a>");
    // Linebreaks
    s = s.replace(/\n\n/g, "<div class='h-2'></div>");
    s = s.replace(/\n/g, "<br>");
    return s;
  }

  // Initialize
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createChatWidget);
  } else {
    createChatWidget();
  }
})();
