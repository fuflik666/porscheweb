$(document).ready(function() {
    // Бургер-меню
    $('.burger-menu').click(function() {
        $('.nav-list').toggleClass('active');
    });

    // Плавна прокрутка
    $('a[href^="#"]').on('click', function(e) {
        if ($(this).attr('href') === '#') return;
        
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 800);
    });

    // Кнопка "наверх"
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#toTop').addClass('visible');
        } else {
            $('#toTop').removeClass('visible');
        }
    });

    $('#toTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Валідація форми
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        let isValid = true;

        // Валідація імені
        const name = $('#name').val().trim();
        if (name.length < 2) {
            showError('#name', 'Ім\'я повинно містити щонайменше 2 символи');
            isValid = false;
        } else {
            clearError('#name');
        }

        // Валідація email
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('#email', 'Будь ласка, введіть коректний email');
            isValid = false;
        } else if (email.endsWith('.ru')) {
            showError('#email', 'Email з доменом .ru не підтримується');
            isValid = false;
        } else {
            clearError('#email');
        }

        // Валідація повідомлення
        const message = $('#message').val().trim();
        if (message.length < 10) {
            showError('#message', 'Повідомлення повинно містити щонайменше 10 символів');
            isValid = false;
        } else {
            clearError('#message');
        }

        if (isValid) {
            $('#success-modal').fadeIn();
            $('#contact-form')[0].reset();
        }
    });

    // Закриття модального вікна
    $('.close-modal').click(function() {
        $('#success-modal').fadeOut();
    });

    // Допоміжні функції
    function showError(selector, message) {
        $(selector).next('.error-message').text(message);
        $(selector).addClass('error');
    }

    function clearError(selector) {
        $(selector).next('.error-message').text('');
        $(selector).removeClass('error');
    }
});


// Обробник кнопок "Детальніше"
$(document).ready(function() {
    // Бургер-меню
    $('.burger-menu').click(function() {
        $('.nav-list').toggleClass('active');
    });

    // Плавна прокрутка
    $('a[href^="#"]').on('click', function(e) {
        if ($(this).attr('href') === '#') return;
        
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 800);
    });

    // Кнопка "наверх"
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#toTop').addClass('visible');
        } else {
            $('#toTop').removeClass('visible');
        }
    });

    $('#toTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Дані для модальних вікон
    const modelsData = {
        '911': {
            title: 'Porsche 911 Carrera S',
            image: 'images/porsche_911_detail.jpg',
            specs: [
                {icon: 'fa-tachometer-alt', text: 'Потужність: 450 к.с.'},
                {icon: 'fa-gas-pump', text: 'Двигун: 3.0L Turbo'},
                {icon: 'fa-bolt', text: '0-100 км/год: 3.7с'},
                {icon: 'fa-road', text: 'Макс. швидкість: 308 км/год'},
                {icon: 'fa-money-bill-wave', text: 'Ціна: від €120,000'}
            ],
            description: 'Легендарний Porsche 911 Carrera S - це ідеальний баланс між традиціями і інноваціями. Новий 3.0-літровий опозитний 6-циліндровий двигун з подвійним турбонаддувом забезпечує неперевершену динаміку.'
        },
        'cayenne': {
            title: 'Porsche Cayenne Turbo',
            image: 'images/porsche_cayenne_detail.jpg',
            specs: [
                {icon: 'fa-tachometer-alt', text: 'Потужність: 550 к.с.'},
                {icon: 'fa-gas-pump', text: 'Двигун: 4.0L V8 Turbo'},
                {icon: 'fa-bolt', text: '0-100 км/год: 4.1с'},
                {icon: 'fa-road', text: 'Макс. швидкість: 286 км/год'},
                {icon: 'fa-money-bill-wave', text: 'Ціна: від €95,000'}
            ],
            description: 'Porsche Cayenne Turbo поєднує в собі комфорт преміум-класу з спортивною динамікою. Ідеальний вибір для тих, хто цінує простір і потужність.'
        },
        'taycan': {
            title: 'Porsche Taycan Turbo S',
            image: 'images/porsche_taycan_detail.jpg',
            specs: [
                {icon: 'fa-battery-full', text: 'Запас ходу: 400 км (WLTP)'},
                {icon: 'fa-bolt', text: 'Потужність: 680 к.с.'},
                {icon: 'fa-tachometer-alt', text: '0-100 км/год: 2.8с'},
                {icon: 'fa-charging-station', text: 'Швидка зарядка: 270 кВт'},
                {icon: 'fa-money-bill-wave', text: 'Ціна: від €105,000'}
            ],
            description: 'Porsche Taycan - це революція в світі електромобілів. Інноваційна технологія, неперевершена динаміка та автентичний дизайн Porsche.'
        },
        'panamera': {
            title: 'Porsche Panamera 4S',
            image: 'images/porsche_panamera_detail.jpg',
            specs: [
                {icon: 'fa-tachometer-alt', text: 'Потужність: 330 к.с.'},
                {icon: 'fa-gas-pump', text: 'Двигун: 2.9L V6 Turbo'},
                {icon: 'fa-bolt', text: '0-100 км/год: 5.6с'},
                {icon: 'fa-road', text: 'Макс. швидкість: 270 км/год'},
                {icon: 'fa-money-bill-wave', text: 'Ціна: від €85,000'}
            ],
            description: 'Porsche Panamera - це унікальний поєднання спортивного автомобіля і бізнес-седана. Розкішний інтер\'єр і високі технології.'
        }
    };

    // Відкриття модального вікна
    $('.details-btn').click(function() {
        const model = $(this).data('model');
        const modelData = modelsData[model];
        
        $('#modal-title').text(modelData.title);
        $('#modal-img').attr('src', modelData.image);
        
        // Очищаємо список характеристик
        $('#modal-specs-list').empty();
        
        // Додаємо характеристики
        modelData.specs.forEach(spec => {
            $('#modal-specs-list').append(`
                <li><i class="fas ${spec.icon}"></i> ${spec.text}</li>
            `);
        });
        
        // Додаємо опис
        $('#modal-description').html(`
            <h3>Опис моделі:</h3>
            <p>${modelData.description}</p>
        `);
        
        $('#model-modal').fadeIn();
    });

    // Закриття модального вікна
    $('.close-modal').click(function() {
        $('#model-modal').fadeOut();
        $('#success-modal').fadeOut();
    });

    // Кнопка "Записатись" в модальному вікні
    $('#modal-contact-btn').click(function() {
        $('#model-modal').fadeOut();
        $('html, body').animate({
            scrollTop: $('#test-drive').offset().top - 100
        }, 800);
    });

    // Обробник форми тест-драйву
    $('#test-drive-form').submit(function(e) {
        e.preventDefault();
        let isValid = true;

        // Валідація імені
        if ($('#td-name').val().trim().length < 2) {
            $('#td-name').next('.error-message').text('Введіть коректне ім\'я');
            isValid = false;
        } else {
            $('#td-name').next('.error-message').text('');
        }

        // Валідація телефону
        if ($('#td-phone').val().trim().length < 10) {
            $('#td-phone').next('.error-message').text('Введіть коректний телефон');
            isValid = false;
        } else {
            $('#td-phone').next('.error-message').text('');
        }

        // Валідація моделі
        if ($('#td-model').val() === '') {
            $('#td-model').next('.error-message').text('Оберіть модель');
            isValid = false;
        } else {
            $('#td-model').next('.error-message').text('');
        }

        if (isValid) {
            $('#success-modal').fadeIn();
            $('#test-drive-form')[0].reset();
        }
    });
});

$(document).ready(function() {
    // Галерея зображень
    $('.gallery-item img').click(function() {
        const imgSrc = $(this).attr('src');
        const imgAlt = $(this).attr('alt');
        $('#modal-image').attr('src', imgSrc);
        $('#modal-caption').text(imgAlt);
        $('#image-modal').fadeIn();
    });

    // Обробник завантаження файлу
    $('#photo-file').change(function() {
        const fileName = $(this).val().split('\\').pop();
        $('#file-name').text(fileName || "Файл не обрано");
    });

    // Валідація форми
    $('#upload-form').submit(function(e) {
        e.preventDefault();
        let isValid = true;

        // Валідація імені
        if ($('#photo-name').val().trim().length < 2) {
            showError('#photo-name', "Введіть коректне ім'я");
            isValid = false;
        } else {
            clearError('#photo-name');
        }

        // Валідація email
        const email = $('#photo-email').val().trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError('#photo-email', "Введіть коректний email");
            isValid = false;
        } else if (email.endsWith('.ru')) {
            showError('#photo-email', "Email з доменом .ru не підтримується");
            isValid = false;
        } else {
            clearError('#photo-email');
        }

        // Валідація опису
        if ($('#photo-description').val().trim().length < 10) {
            showError('#photo-description', "Опис занадто короткий");
            isValid = false;
        } else {
            clearError('#photo-description');
        }

        // Валідація файлу
        if (!$('#photo-file').val()) {
            showError('#photo-file', "Оберіть фото");
            isValid = false;
        } else {
            clearError('#photo-file');
        }

        if (isValid) {
            $('#success-modal').fadeIn();
            $('#upload-form')[0].reset();
            $('#file-name').text("Файл не обрано");
        }
    });

    // Закриття модальних вікон
    $('.close-modal').click(function() {
        $('.modal').fadeOut();
    });

    $(window).click(function(e) {
        if ($(e.target).hasClass('modal')) {
            $('.modal').fadeOut();
        }
    });

    function showError(selector, message) {
        $(selector).next('.error-message').text(message);
        $(selector).addClass('error');
    }

    function clearError(selector) {
        $(selector).next('.error-message').text('');
        $(selector).removeClass('error');
    }
});

// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH


// Обробник форми контактів
$('#contact-form').submit(function(e) {
    e.preventDefault();
    let isValid = true;

    // Валідація імені
    if ($('#contact-name').val().trim().length < 2) {
        showError('#contact-name', "Введіть коректне ім'я");
        isValid = false;
    } else {
        clearError('#contact-name');
    }

    // Валідація email
    const email = $('#contact-email').val().trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('#contact-email', "Введіть коректний email");
        isValid = false;
    } else if (email.endsWith('.ru')) {
        showError('#contact-email', "Email з доменом .ru не підтримується");
        isValid = false;
    } else {
        clearError('#contact-email');
    }

    // Валідація повідомлення
    if ($('#contact-message').val().trim().length < 10) {
        showError('#contact-message', "Повідомлення занадто коротке");
        isValid = false;
    } else {
        clearError('#contact-message');
    }

    if (isValid) {
        $('#success-modal').fadeIn();
        $('#contact-form')[0].reset();
    }
});

// Допоміжні функції
function showError(selector, message) {
    $(selector).next('.error-message').text(message);
    $(selector).addClass('error');
}

function clearError(selector) {
    $(selector).next('.error-message').text('');
    $(selector).removeClass('error');
}
