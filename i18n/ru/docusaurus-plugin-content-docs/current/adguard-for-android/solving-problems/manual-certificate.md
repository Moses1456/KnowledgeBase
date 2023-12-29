---
title: Установка сертификата на устройствах с Android 11+
sidebar_position: 12
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

Чтобы [фильтровать HTTPS-трафик](/general/https-filtering/what-is-https-filtering.md) (что крайне важно, поскольку большая часть рекламы передаётся по протоколу HTTPS), AdGuard необходимо установить сертификат в пользовательское хранилище устройства. На старых версиях Android это происходило автоматически, но на Android 11 и выше приходится устанавливать его вручную.

![Сертификат *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Как установить сертификат AdGuard:

1. В уведомлении *«HTTPS-фильтрация отключена»* нажмите *Включить*.

1. Появятся три экрана с объяснениями:
    - Зачем фильтровать HTTPS-трафик
    - Почему эта фильтрация безопасна
    - Почему сертификат AdGuard необходим

    Нажмите *Далее* → *Далее* → *Сохранить сертификат*.

1. Нажмите *Сохранить* в нижней части открывшейся папки *Загрузки*.

1. После сохранения нажмите *Открыть настройки*.

1. Tap *More security settings* → *Encryption & credentials* → *Install a certificate* → *CA certificate*.

1. You might see a warning. If so, tap *Install anyway* and enter your PIN if necessary.

1. Select the AdGuard certificate file. Its name should look like *adguard_1342_020322.crt*.

Всё готово! Когда сертификат будет установлен, HTTPS-фильтрация включится автоматически.

Please note that the steps provided are based on the Google Pixel 7 smartphone. В других устройствах Android названия настроек могут отличаться. For easier navigation consider searching for a certificate by entering "certificate" or "credentials" in the settings search bar.

Если у вас возникли проблемы при ручной установке сертификата (например, вы установили сертификат, но приложение продолжает его игнорировать), вы можете воспользоваться одним из решений ниже.

1. Перезапустите AdGuard.
2. Попробуйте ещё раз установить правильный сертификат (AdGuard Personal CA).

Если вы по-прежнему сталкиваетесь с проблемой и не можете установить сертификат, напишите нашей команде поддержки по адресу support@adguard.com.
