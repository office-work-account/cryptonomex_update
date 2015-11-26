 module.exports = {
    languages: {
        en: "English",
        cn: "简体中文",
        fr: "Français",
        ko: "한국어",
        de: "Deutsch",
        es: "İspanyolca",
        tr: "Türkçe"

    },
    header: {
        title: "Bitshares 2.0",
        account: "Hesap",
        dashboard: "Panel",
        explorer: "Araştır",
        exchange: "Al-Sat",
        payments: "Transferler",
        logout: "Çıkış",
        settings: "Ayarlar",
        current: "Kullanılan Hesap",
        create_account: "Hesap Aç",
        create_asset: "Varlık Oluştur",
        update_asset: "Varlık Güncelle",
        lock: "Kiliti Kapat",
        unlock: "Aç",
        help: "Yardım",
        locked_tip: "Cüzdan kilidi kapalı . Açmak için tıkla.",
        unlocked_tip: "Cüzdan kilidi açık. Kapamak için tıkla."
    },
    operation: {
        pending: "sırada %(blocks)s blok var"
    },
    propose: "teklif et",
    cancel: "iptal et",
    account: {
        welcome: "Graphene'e Hoşgeldiniz",
        asset: "Varlık",
        market_value: "Piyasa Değeri",
        hour_24: "24sa Değişim",
        recent: "Son hareketler",
        name: "Hesap adı",
        more: "fazlası",
        deposit_withdraw: "Yatır/Çek",
        member: {
            stats: "Üyelik",
            join: "Katılma tarihi",
            registrar: "Kaydı yapan",
            referrer: "Yeni Üye Referrer",
            lifetime_referrer: "Ömür-boyu Referrer",
            network_percentage: "Ağ",
            fee_allocation: "Ücret Tahsisi",
            membership: "Üyelik",
            fees_paid: "Ödenmiş ömür-boyu ücretler",
            fees_pending: "Bekleyen ücretler",
            fees_vested: "Bekleyen hak ücretler",
            referrals: "Referraller",
            rewards: "Nakit-İade Ödülleri",
            cashback: "Hak edilmiş nakit iade bakiyesi",
            vested: "Hak edilmiş",
            unknown: "Bilinmeyen üye",
            lifetime: "Ömür-Boyu üye",
            basic: "Normal üye",
            annual: "Yıllık abone",
            upgrade_lifetime: "Ömür-Boyu Üyelik Satın Al",
            subscribe: "Yıllık Abone ol",
            expires: "bitiş tarihi",
            membership_expiration: "Üyelik Bitiş Tarihi",
            fees_cashback: "Ücretler ve nakit iadeler"
        },
        user_issued_assets: {
            symbol: "Sembol",
            name: "Varlık Adı",
            description: "Tanım",
            max_supply: "Maximum arz",
            precision: "Hassasiyet",
            to: "Hesaba çıkar",
            market_fee: "Piyasa ücreti",
            max_market_fee: "Max piyasa ücreti",
            details: "Detaylar",
            primary: "Ana ayarlar",
            optional: "Opsiyonel ayarlar",
            approx_fee: "Yaklaşık ücret",
            exists: "O varlık zaten mevcut",
            max_positive: "Maksimum pozitif bir sayı olmalıdır",
            core_exchange_rate: "Esas kur oranı",
            quote: "Kota varlık miktarı",
            quote_name: "Kota varlık",
            base: "Temel varlık miktarı",
            base_name: "Temel varlık",
            update_owner: "Sahibi güncelle",
            current_issuer: "Şu anki sahip hesabı",
            new_issuer: "Yeni sahip hesabı",
            flags: "Bayraklar",
            charge_market_fee: "Piyasa ücretinin etkin kıl",
            override_authority: "Süren varlığını geriye kendine transfer edebilir",
            transfer_restricted: "İhrac eden tüm transferleri onlaylamak zorunda",
            disable_confidential: "Özel işlemleri etkisizleştir",
            white_list: "Tutanları beyaz-listelemeyi gerektir",
            witness_fed_asset: "Tanıkların fiyat beslemelerine müsade et",
            committee_fed_asset: "Kurul üyelerinin fiyat beslemelerine müsade et",
            disable_force_settle: "Zorla kapamayı etkisizleştir",
            global_settle: "İhrac edene genel kapama izni ver",
            advanced: "Gelişmiş",
            need_asset: " İki varlıktan biri an azından %(name)s olmalıdır",
            perm_warning: "UYARI: İzinler yalnızca etkisiz hale getirilebilitler, bir kere etkisiziştiridiklerinde tekrar aktif hale getirilemezler!!",
            issued_assets: "Sürülmüş Varlıklar"
        },
        connections: {
            known: "Tarafından Tanınıyor",
            "black": "Tarafından Karalistelenmiş"
        },
        perm: {
            active: "Etkin İzinler",
            owner: "Sahip İzinleri ",
            publish: "Değişimleri Duyur",
            reset: "Değişiklikleri Sıfırla",
            add: "Yetki Ekle",
            type: "Tür",
            key: "Anahtar/İsim",
            weight: "Ağırlık",
            threshold: "Eşik",
            confirm_add: "Ekle",
            cancel: "İptal",
            add_permission_label: "Hesap adı/anahtarını ve ağırlığını girin",
            account_name_or_key: "Hesap adı yada anahtar",
            memo_public_key: "Açık Anahtar Memo"
        },
        votes: {
            proxy_short: "Vekil",
            workers_short: "İşgörenler",
            proxy: "Vekil Oy Hesabı",
            no_proxy: "Vekil Yok",
            clear_proxy: "Vekili kaldır",
            name: "Ad",
            info: "Bilgi",
            votes: "Oylar",
            url: "Web Sayfası",
            support: "Destek",
            workers: "Bütçe Öğeler",
            publish: "Değişimleri Duyur",
            add_witness: "Ekle",
            remove_witness: "Kaldır",
            remove_committee: "Kaldır",
            add_committee: "Ekle",
            add_committee_label: "Kurul Üyesi",
            add_witness_label: "Tanık",
            approve_worker: "İşgören önerisini onayla",
            reject_worker: "İşgören teklifini reddet",
            worker_account: "İşgören hesabı",
            total_votes: "Toplam oylar",
            votes_against: "Aleyhine oylar",
            daily_pay: "Günlük Ödeme",
            max_pay: "Maximum toplam ödeme",
            unclaimed: "Talep edilmemiş ödeme",
            status: {
                title: "Durum",
                supported: "Destekleniyor",
                rejected: "Red edildi",
                neutral: "Tarafsız"
            }
        },
        options: {
            num_witnesses: "Gerekli Tanıklar",
            num_committee: "Gerekli Kurul Üyeleri",
            memo_key: "Memo Anahtar"
        },
        upgrade: "Hesap yükselt",
        unfollow: "Takibi bırak",
        follow: "Takib et",
        pay: "Öde",
        overview: "Genel Bakış",
        bts_market: "Piyasa",
        history: "Geçmiş",
        payees: "Alıcılar",
        permissions: "İzinler",
        voting: "Oylama",
        orders: "Emirler",
        select_placeholder: "Hesap Seç...",
        errors: {
            not_found: "%(name)s adında bir hesap yok, doğru yazdığınıza emin misiniz?",
            invalid: "Geçersiz hesap adı",
            unknown: "Bilinmeyan hesap",
            not_yours: "Hesap sizin değil"
        },
        collaterals: "Teminat Pozisyonları",
        eq_value: "Eş Değeri",
        percent: "Toplam arzın yüzdesi",
        please_create_account: "Lütfen bir hesap açın",
        create_account: "Hesap aç",
        identicon: "Identicon",
        pay_from: "Buradan öde",
        existing_accounts: "Mevcut hesaplar",
        name_input: {
            name_is_taken: "Hesap adı zaten alınmış.",
            not_found: "Hesap bulunamadı.",
            premium_name_faucet: "Bu paralı bir addır. Ücretli adlar hem daha pahalıdır hem de musluk tarafından ücretsiz kayıt yapılmazlar. En azından bir tire , rakam içeren yada sesli harfin bulunmadığı bir ad seçiniz.",
            premium_name_warning: "Bu kayıt yapılması daha pahalı ücretli bir addır. Normal adların içerinde en azından bir tire, rakam bulunur yada hiç sesli harf yoktur."
        },
        propose_from: "Tarafından teklif",
        settle: "Settle"
    },
    pagination: {
        newer: "Daha yeni",
        older: "Daha eski"
    },
    transfer: {
        from: "Gönderen",
        pay_from: "Buradan öde",
        amount: "Miktar",
        to: "Alıcı",
        memo: "Açıklama",
        fee: "Ücret",
        send: "Gönder",
        final: "Son bakiye",
        balances: "Bakiyeler",
        available: "Mevcut",
        errors: {
            req: "Mecburi alan",
            pos: "Miktar pozitif olmak zorunda",
            valid: "Lütfen geçerli bir pozitif numara giriniz",
            balance: "Sonuç bakiye 0'dan büyük olmalıdır",
            insufficient: "Yetersiz Bakiye"
        },
        back: "GERİ",
        confirm: "ONAYLA",
        broadcasting: "Yayınlanıyor...",
        broadcast: "Transfer işleminiz yayınlanmıştır",
        again: "BAŞKA BİR TRANSFER GERÇEKLEŞTİR",
        see: "TRANSFER İŞLEMLERİMİ GÖR",
        close: "Kapat"
    },
    transaction: {
        confirm: "Lütfen işlemi teyit et",
        broadcast_success: "İşlem yayınlanmıştır",
        transaction_confirmed: "İşlem teyit edildi",
        broadcast_fail: "İşlemin yayınlanması başarısız: %(message)s",
        broadcasting: "İşlem yayınlanıyor..",
        broadcasting_short: "Yayınlanıyor..",
        sent: "gönderdi , miktar :  ",
        to: "alan:",
        received: "alan:",
        from: "gönderen",
        amount_sell: "Satılacak miktar",
        expiration: "Bitiş tarihi ",
        fill_or: "Doldur yada öldür",
        min_receive: "Alınacak minimum miktar",
        seller: "Satıcı",
        collateral: "Teminat",
        coll_ratio: "İlk teminat oranı",
        coll_maint: "Teminat idame oranı",
        "create_key": "Açık anahtar oluşturuldu",
        reg_account: "Hesabı kaydetti",
        was_reg_account: "kaydı yapıldı, yapan :",
        create_asset: "varlığı oluşturdu",
        limit_order_sell: "#%(num)s satış emrini verdi , miktar: %(sell_amount)s fiyat:",
        limit_order_buy: "#%(num)s alış emrini verdi, miktar: %(buy_amount)s fiyat: ",
        limit_order_cancel: "emri iptal etti",
        short_order: "Satış için Short emri verdi",
        short_order_cancel: "Short iptal etti",
        at: "için şu kurdan:",
        coll_of: "teminatıyla",
        call_order_update: "marjin pozisyonunu güncelledi, şunun: ",
        lifetime_upgrade_account: "ömür-boyu üyeye yükseltildi",
        annual_upgrade_account: "yıllık üyeliğe yükseltildi",
        update_account: "hesabını güncelledi",
        whitelist_account: "Beyaz listeye alındı",
        whitelisted_by: "Hesap tarafından beyaz listeye alındı",
        transfer_account: "Hesap transfer edildi",
        update_asset: "Varlığı güncelledi",
        update_feed_producers: "Varlık yayın üreticilerini güncelledi ",
        feed_producer: "Varlık için bir yayın üreticisi oldu",
        feed_price: "Yayın fiyatı",
        asset_issue: "piyasaya sürdü",
        was_issued: "Piyasaya sürülmüş",
        by: "tarafından",
        burn_asset: "Yakıldı",
        fund_pool: "%(asset)s ücret havuzunu şununla finanse etti:",
        asset_settle: "Ödemesini talep etti ",
        asset_global_settle: "Genel ödemesini talep etti şunun:",
        publish_feed: "yayın duyurdu ",
        committee_member_create: "Kurul üyesi oluşturuldu",
        witness_create: "Tanık oluşturuldu",
        witness_update: "Tanığı güncelledi",
        witness_pay: "Hesaba tanık ödemesi çekildi",
        witness_receive: "Tanık tarafından tanık geldi",
        proposal_create: "Teklif oluşturdu",
        proposal_update: "Bir teklif güncelledi",
        proposal_delete: "Teklif güncellendi",
        withdraw_permission_create: "Hesaptan çekme izni verildi",
        withdraw_permission_update: "Hesaptan çekme iznini güncelledi",
        withdraw_permission_claim: "Çekme iznini sahiplendi",
        withdraw_permission_delete: "Hesaptan çekme izni silindi",
        paid: "tarafından",
        obtain: "ödendi, ",
        global_parameters_update: "Evrensel parametrelerini güncelledi",
        file_write: "Bir dosya yazıldı",
        vesting_balance_create: "Şunun hakedilmiş bakiyesini oluşturdu :",
        for: "için",
        vesting_balance_withdraw: "Şunun hakedilmiş bakiyesini çekti : ",
        bond_create_offer: "Senet teklifi oluştur",
        bond_cancel_offer: "Senet teklifini iptal etti",
        bond_accept_offer: "Senet teklifi kabul edilen:",
        bond_claim_collateral: "Teminatı sahiplendi :",
        bond_pay_collateral: "Ödedi teminatını:",
        create_worker: "Ödemesiyle bütçe öğesi yaratılan: ",
        custom: "Özel işlem yaratıldı",
        order_id: "Talimat no",
        balance_claim: "%(balance_amount)s sahiplendi , bu bakiyeden: #%(balance_id)s",
        balance_owner: "Bakiye sahibinin anahtarı",
        balance_id: "Bakiye No",
        deposit_to: "Hesaba yatırıldı",
        claimed: "Toplam sahiplenildi",
        borrow_amount: "Borç",
        funding_account: "Kaynak Hesap",
        delta_collateral: "Teminat değişimi",
        delta_debt: "Borç değişimi",
        new_url: "Websitesi",
        publisher: "Duyuran",
        market_fee: "Piyasa ücreti",
        max_market_fee: "Maksimum piyasa ücreti",
        blinding_factor: "Körlük faktörü",
        outputs: "Çıkanlar",
        inputs: "Girdiler",
        trxTypes: {
            transfer: "Transfer",
            limit_order_create: "Emir Ver",
            limit_order_cancel: "Emir İptal",
            call_order_update: "Marjin güncelleme",
            account_create: "Yeni Hesap",
            account_update: "Hesap güncelleme",
            account_whitelist: "Beyaz Listeye Alma",
            account_upgrade: "Hesap yükseltme",
            account_transfer: "Hesap transfer et",
            asset_create: "Varlık oluşturma",
            asset_update: "Varlık güncelleme",
            asset_update_bitasset: "Akıllı para güncelle",
            asset_update_feed_producers: "Varlık feed üreticilerini güncelle",
            asset_issue: "Varlık ihraç et",
            asset_reserve: "Varlık yak",
            asset_fund_fee_pool: "Varlık ücret havuzu finansı",
            asset_settle: "Varlık ödemesi",
            asset_global_settle: "Genel Varlık Ödemesi",
            asset_publish_feed: "Yayın Duyur",
            committee_member_create: "Kurul üyesi oluşturma",
            witness_create: "Tanık oluştur",
            witness_update: "Tanık güncelle",
            witness_withdraw_pay: "Tanık maaş çekimi",
            proposal_create: "Teklif oluşturma",
            proposal_update: "Teklif güncelleme",
            proposal_delete: "Teklif silme",
            withdraw_permission_create: "Hesaptan çekme izni oluşturma",
            withdraw_permission_update: "Hesaptan çekme izni güncelleme",
            withdraw_permission_claim: "Çekme izini talebi",
            withdraw_permission_delete: "Çekme izni silme",
            fill_order: "Emir İcra",
            committee_member_update_global_parameters: "Evrensel parametreleri güncelleme",
            vesting_balance_create: "Hakedilmiş bakiye oluşturma",
            vesting_balance_withdraw: "Hakedilmiş bakiyeyi çekme",
            worker_create: "Bütçe öğesi oluştur",
            custom: "Kişiye özel",
            assert: "İşlem talep et",
            balance_claim: "Bakiye talebi",
            override_transfer: "Transferi yenile",
            transfer_to_blind: "Kör hesaba transfer",
            blind_transfer: "Kör transfer",
            transfer_from_blind: "Kör hesaptan transfer"
        }
    },
    explorer: {
        accounts: {
            title: "Hesaplar"
        },
        blocks: {
            title: "Blokzinciri",
            globals: "Evrensel parametreler",
            recent: "Son bloklar",
            trx: "İşlem",
            block_times: "Blok süreleri",
            block_time: "Blok süresi",
            transactions: "işlem sayısı",
            recently_missed_blocks: "Son kaçırılan bloklar",
            trx_per_block: "İşlem/blok",
            active_committee_members: "Etkin kurul üyeleri",
            active_witnesses: "Etkin Tanık",
            avg_conf_time: "Ortalama teyit süresi",
            trx_per_sec: "İşlem/s",
            last_block: "Son blok",
            current_block: "Şimdiki Blok"

        },
        block: {
            title: "Blok",
            id: "Blok Kimlik",
            witness: "Tanık",
            count: "İşlem Sayısı",
            date: "Tarih",
            time: "Zaman",
            previous: "Bir önceki",
            previous_secret: "Bir önceki gizli",
            next_secret: "Bir sonraki gizli hash",
            op: "İşlem",
            trx: "İşlem",
            op_type: "İşlem türü",
            fee_payer: "Ücret ödeyen hesap",
            key: "Açık anahtar",
            transactions: "İşlem Sayısı",
            account_upgrade: "Yükseltilecek hesap",
            lifetime: "Ömür-boyu üyeliğine yükselt",
            authorizing_account: "Yetki veren hesap ",
            listed_account: "Kaydedilmiş hesap",
            new_listing: "Yeni kayıt",
            asset_update: "Güncellenecek Varlık",
            common_options: "Yaygın seçenekler",
            new_options: "Yeni seçenekler",
            new_producers: "Yeni yayın üreticileri",
            asset_issue: "Sürülecek miktar",
            max_margin_period_sec: "Max marjin periodları (s)",
            call_limit: "Çağrı Sınırı",
            short_limit: "Short limit",
            settlement_price: "Ödeme Fiyatı"
        },
        assets: {
            title: "Varlıklar",
            market: "AkıllıParalar",
            user: "Kullanıcı Sürümü Varlıklar",
            symbol: "Sembol",
            id: "Kimlik",
            issuer: "Piyasaya süren",
            precision: "Hassasiyet"
        },
        asset: {
            title: "Varlık",
            not_found: "%(name)s diye bir varlık mevcut değil",
            summary: {
                asset_type: "Varlık türü",
                issuer: "Piyasaya süren",
                current_supply: "Mevcut Arz",
                stealth_supply: "Gizli arz",
                market_fee: "Piyasa ücreti",
                max_market_fee: "Max Piyasa ücreti"
            },
            price_feed: {
                title: "Fiyat Yayını",
                settlement_price: "Uzlaşma Fiyatı",
                maintenance_collateral_ratio: "İdame Teminat Oranı (MCR)",
                maximum_short_squeeze_ratio: "Maksimum kısa sıkıştırma oranı (MSSR)"
            },
            fee_pool: {
                title: "Ücret Havuzu",
                core_exchange_rate: "Esas Kur (CER)",
                pool_balance: "Havuz bakiyesi",
                unclaimed_issuer_income: "Talep edilmemiş ihraççı geliri "
            },
            permissions: {
                title: "İzinler",
                max_market_fee: "Max piyasa ücreti",
                max_supply: "Max arz",
                blacklist_authorities: "Karaliste yetkiler",
                blacklist_markets: "Karaliste piyasları",
                whitelist_authorities: "Beyaz Liste yetkiler",
                whitelist_markets: "Beyaz Liste piyasaları"
            },
            price_feed_data: {
                title: "Fiyat Yayın Verileri",
                settlement_price: "Uzlaşma Fiyatı",
                core_exchange_rate: "CER",
                maintenance_collateral_ratio: "MCR",
                maximum_short_squeeze_ratio: "MSSR",
                publisher: "Duyuran",
                published: "Duyurdu"
            }
        },
        witnesses: {
            title: "Tanıklar",
            current: "Şimdiki tanık",
            participation: "Katılım oranı",
            pay: "Blok-başına-ödeme",
            budget: "Kalan bütçe",
            next_vote: "Sıradaki oy güncellemesi",
            card: "Kart görünümü",
            table: "Tablo görünümü",
            rank: "Sıralama",
            last_confirmed: "Son teyit edilen",
            missed: "Kaçırılan bloklar"

        },
        committee_members: {
            title: "Kurul Üyeleri",
            active: "Toplam etkin kurul üyesi"
        },
        committee_member: {
            title: "Kurul üyesi"
        },
        workers: {
            title: "Bütçe Öğeleri"
        },
        proposals: {
            title: "Teklifler"
        },
        account: {
            title: "Hesap"
        }
    },
    settings: {
        inverseMarket: "Piyasa eğilim tercihi",
        unit: "Tercih edilen hesap birimi",
        confirmMarketOrder: "Piyasa emirleri için teyit iste",
        locale: "Lisanı değiştir",
        confirm_yes: "Herzaman",
        confirm_no: "Hiçbirzaman",
        always_confirm: "Onay için herzaman sor",
        wallets: "Cüzdanlar",
        connection: "API Bağlantısı",
        add_ws: "Yeni websocket API ekle",
        remove_ws: "Websocket API'sini kaldır",
        faucet_address: "Faucet Address"
    },
    footer: {
        title: "Graphene",
        block: "Baş blok",
        loading: "Yüklüyor..."
    },
    exchange: {
        market: "Piyasa",
        price_history: "Fiyat Tablosu",
        order_depth: "Piyasa Derinliği",
        history: "Tüm Geçmiş",
        my_history: "Geçmişim",
        balance: "Bakiyeniz",
        lowest_ask: "En düşük istenen",
        highest_bid: "En yüksek verilen",
        total: "Toplam",
        value: "Değer",
        price: "Fiyat",
        latest: "En Yeni fiyat",
        call: "Çağrı Fiyatı",
        core_rate: "Ücret Oranı",
        settle: "Ödeme Fiyatı",
        squeeze: "Marjin Çağrı Fiyatı",
        maintenance: "İdame Çağrı Fiyatı",
        your_price: "Sizin Çağrı Fiyatınız",
        volume: "Hacim",
        vol_short: "Hcm",
        spread: "Fark",
        quantity: "Miktar",
        buy: "Al",
        sell: "Sat",
        receive: "Tahsil",
        vertical: "Dikey",
        horizontal: "Yatay",
        confirm_buy: "Alma emrini onayla: Miktar :%(buy_amount)s miktarda %(buy_symbol)s   Fiyat: %(price_amount)s %(price_symbol)s",
        confirm_sell: "Emri teyit et: Sat %(sell_amount)s %(sell_symbol)s fiyat %(price_amount)s %(price_symbol)s",
        market_name: "Piyasalarım",
        quote_supply: "Kota arzı",
        base_supply: "Teel arz",
        more: "Tüm piyasalar",
        volume_24: "24s Değişim",
        change: "Değişim",
        confirm: "Verdiğiniz emir şimdiki fiyattan %(diff)s% kadar farklı, emin misiniz?",
        indicators: "Göstergeler",
        rsi: "Relatif Güç İndeksi",
        ema: "Üssel Hareketli Ortalama",
        sma: "Basit Hareketli Ortalama",
        atr: "Ortalama Gerçek Fiyat Aralığı",
        period: "Zaman aralığı (gün)",
        overbought: "Aşırı Alım",
        oversold: "Aşırı Satış",
        index: "Indeks"

    },
    markets: {
        title: "Piyasalar",
        base: "Temel varlık",
        market_search: "Piyasa Arama",
        filter: "Filtrele",
        core_rate: "Esas oran",
        supply: "Arz",
        search: "Ara",
        preferred: "Piyasalarım"
    },
    wallet: {
        title: "Cüzdan",
        confirm: "Parola (onayla)",
        password: "Parola",
        existing_password: "Mevcut parola",
        change_password: "Parolayı Değiştir",
        change_wallet: "Cüzdanı Değiştir",
        wallet_created: "Cüzdan Oluşturuldu",
        create_wallet: "Cüzdan Oluştur",
        import_bts1: "BitShares 0.9.3c den aktarım",
        setup_wallet: "Cüzdanınızı Oluşturun",
        delete_wallet: "Cüzdanı Sil",
        delete_confirm_line1: "KESİNLİKLE emin misiniz?",
        delete_confirm_line2: "Bunu okumazsanız beklenmedik şeyler olabilir!",
        delete_confirm_line3: "Bu işlem geri düzeltilemez.",
        delete_wallet_name: "(%(name)s)Adlı Cüzdanı Sil",
        balance_claims: "Bakiye Talepleri",
        download: "İndir",
        name: "Cüzdan Adı",
        create: "Oluştur",
        console: "Cüzdan Yönetim Paneli",
        create_backup: "Yedek Oluştur",
        backup_brainkey: "Beyin-anahtarı Yedekle",
        create_backup_of: "(%(name)sAdlı Cüzdanı Yedekle)",
        import_backup: "Yedeği İçeri Aktar",
        restore_backup: "Yedekten Geri Yükle",
        import_keys: "İçeri Anahtar Aktar",
        import_keys_tool: "Anahtar Aktarım Aracı",
        brainkey: "Beyin-anahtarı",
        new_wallet: "Yeni Cüzdan",
        active_wallet: "Etkin Cüzdan",
        verified: "Doğrulanmış",
        verify_prior_backup: "Yedeklemeden Önce Doğrula",
        brainkey_not_verified: "Bu Beyin-anahtarı teyit edilmemiş",
        cancel: "İptal",
        reset: "Sıfırla",
        done: "Tamam",
        verify: "Doğrula",
        invalid_format: "Geçersiz Biçem",
        enter_password: "Parola Girin",
        downoad: "İndir",
        new_wallet_name: "Yeni Cüzdan Adı",
        wallet_exist: "Zaten mevcut , yeni bir ad seçin",
        wallet_exist_with_name: "(%(name)s) adında bir cüzdan zaten mevcut, lütfen adını değiştirin",
        accept: "Kabul",
        ready_to_restore: "Eski Haline Dönmeye Hazır",
        restore_wallet_of: "(%(name)s Adlı Cüzdanı Eski Haline Getir)",
        restore_success: "(%(name)s)Adlı cüzdan başarıyla eski haline döndürüldü",
        change: "Değiştir (%(name)s Cüzdan)",
        import_20_notice1: "İlk önce BTS 2.0+ YEDEĞİNİZİ içeri aktarın ",
        import_20_notice2: "(eğer varsa)",
        loading_balances: "Bakiye istemleri yükleniyor",
        no_balance: "Bakiye talebi yok",
        claim_balance: "Bakiye Talebi",
        claim_balances: "Bakiyelerı Sahiplen",
        balance_claim_lookup: "Bakiye Arama",
        unclaimed: "Sahiplenilmemiş",
        unclaimed_vesting: "Sahiplenilmemiş ",
        no_accounts: "Hesap Yok",
        brainkey_no_match: "Beyin-anahtarı uyuşmuyor, devam et",
        reenter_brainkey: "Beyin-anahtarını tekrar gir",
        pwd4brainkey: "Beyin-anahtarını göstermek için parolayı gir",
        show_brainkey: "Beyin Anahtarını Göster",
        brainkey_w1: "UYARI : Bunu bir kağıda yazın yada çıktı alın .",
        brainkey_w2: "Kurtarma anahtarınıza ulaşan herhangi bir kimse",
        brainkey_w3: "bu cüzdan içindeki fonlara ulaşabilir.",
        custom_brainkey: "Kişiye Özel Beyin-anahtarı (gelişmiş)",
        last_backup: "Son yedekleme",
        never_backed_up: "Bu cüzdan hiç yedeklenmedi",
        need_backup: "Bu cüzdanın yedeklenmesi gerek",
        noneed_backup: "Yedekleme gerekmiyor"
    },
    borrow: {
        title: "%(asset_symbol)s Marjin",
        no_valid: "%(asset_symbol)s için geçerli yayın mevcut değil",
        coll_ratio: "Teminat oranı",
        call_limit: "Piyasa Çağrı Limiti",
        adjust: "Pozisyonu Güncelle",
        close: "Pozisyonu Kapa",
        update: "Güncelle",
        errors: {
            below: "Teminat oranı çok düşük, bu pozisyon anında marjin-çağrılır",
            collateral: "Yetersiz teminat seviyesi"
        }
    },
    modal : {
      issue : {
        to: "Buna çıkar",
        amount: "Çıkarılacak miktar",
        submit: "Piyasaya Varlık Sür"
      },
      withdraw : {
        amount: "Çekilecek Miktar",
        address: "Şu Adrese Çekilecek",
        submit: "Çek"
      },
      settle: {
        title: "%(asset)s ödenmesini talep et",
        amount: "Ödenecek miktar",
        submit: "Varlık tasfiye et"
      },
      ok: "Tamam"
    },
    init_error: {
        title: "Uygulama başlatma problemleri",
        ws_status: "Websocket Bağlantı Durumu",
        retry: "Yeniden dene",
        connected: "Bağlandı",
        not_connected: "Bağlanmadı"
    },
    refcode: {
        claim: "Talep",
        claim_refcode: "Referral Kodunu Talep Et",
        refcode_optional: "Referral Kodu (opsiyonel)",
        enter_refcode: "Referral Kodunu Gir"
    },
    gateway: {
        bridge: "Köprü",
        gateway: "Kapı",
        symbol: "Sembol",
        deposit_to: "Yatırılacak Yer",
        balance: "Bakiye",
        generate: "Oluştur",
        deposit: "Yatır",
        withdraw: "Çek",
        inventory: "Envanter",
        scan_qr: "QR Tara",
        transwiser: {
            gateway: "Transwiser",
            visit_weidian: "Yatırmak için WEIDIAN'ı ziyaret edin ",
            deposit_title: "%(asset)s'a RMB yatırın",
            withdraw_title: "RMB'ye %(asset)s çekin",
            alipay: "ALIPAY Hesap Adı",
            withdraw_note: "Şimdilik sadece ALIPAY çekmek destekleniyor. Varlığınız 1:1 oranında çevrilecektir ve ALIPAY hesabınıza RMB gönderilecektir.",
            you_will_receive: "%(amount)s miktarında RMB elinize geçecek"
        },
        meta: {
            open_website: "Websitesini Aç"
        }
    }
};
