let url = window.location.href;
// console.log(url);
let url_segment = url.split('?');
// console.log(url_segment[1]);



let date = new Date();
let main_date = date.getDate();
// console.log((main_date))




let pvr = [
    {
        movie: 'TeeYod',
        title: 'Tee Yod: Quỷ Ăn Tạng Phần 2',
        directed: 'Taweewat Wantha',
        starring: 'Nadech Kugimiya, Denise Jelilcha Kapaun',
        edited: 'Gay cấn, Kinh dị',
        audi: 1,
        time: '111 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate(),
        img: '../img/poster/tedyo-pt.jpg',
        background: '../img/bg/ted-bg.jpg',
    },
    {
        movie: 'TeeYod',
        title: 'Tee Yod: Quỷ Ăn Tạng Phần 2',
        audi: 1,
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [18, 10],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 1,
        img: '../img/poster/tedyo-pt.jpg',

        background: '../img/bg/ted-bg.jpg',
    },
    {
        movie: 'TeeYod',
        title: 'Tee Yod: Quỷ Ăn Tạng Phần 2',
        audi: 1,
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [18, 10],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 2,
        img: '../img/poster/tedyo-pt.jpg',
        background: '../img/bg/ted-bg.jpg',
    },
    {
        movie: 'CDHM',
        title: 'Cô dâu hào môn',
        directed: 'Vũ Ngọc Đãng',
        starring: 'Uyển Ân, Samuel An, Thu Trang, Lê Giang, Kiều Minh Tuấn, NSND Hồng Vân,...',
        edited: 'Tâm lý, Gia đình, Hài',
        audi: 2,
        time: '114 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 15,
        j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
        h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
        f: [1, 3, 13, 15, 22],
        e: [3, 9, 10, 20, 24],
        d: [7, 12, 9, 21, 20],
        c: [6, 8, 11, 12, 19],
        b: [8, 5, 12, 13, 14],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate(),
        img: '../img/poster/codau-pt.png',
        background: '../img/bg/codau-bg.jpg',
    },
    {
        movie: 'CDHM',
        title: 'Cô dâu hào môn',
        audi: 2,
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 25,
        j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
        h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
        f: [1, 3, 13, 15, 22],
        e: [3, 9, 10, 20, 24],
        d: [7, 12, 9, 21, 20],
        c: [6, 8, 11, 12, 19],
        b: [8, 5, 12, 13, 14],
        a: [5, 7, 6, 2, 4],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 1,
        img: '../img/poster/codau-pt.png',
        background: '../img/bg/codau-bg.jpg',
    },
    {
        movie: 'CDHM',
        title: 'Cô dâu hào môn',
        audi: 2,
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 25,
        j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
        h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
        f: [1, 3, 13, 15, 22],
        e: [3, 9, 10, 20, 24],
        d: [7, 12, 9, 21, 20],
        c: [6, 8, 11, 12, 19],
        b: [8, 5, 12, 13, 14],
        a: [5, 7, 6, 2, 4],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 2,
        img: '../img/poster/codau-pt.png',
        background: '../img/bg/codau-bg.jpg',
    },
    {
        movie: 'Robot',
        title: 'Robot Hoang Dã',
        directed: 'Chris Sanders',
        starring: 'Lupita Nyongo, Pedro Pascal, Catherine Ohara, Bill Nighy,...',
        edited: 'Gia đình, Hoạt hình, Khoa học - Viễn tưởng',
        audi: 1,
        time: '110 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [18, 10],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() ,
        img: '../img/poster/robot-pt.png',
        background: '../img/bg/robot-bg.jpg',
    },
    {
        movie: 'Robot',
        title: 'Robot Hoang Dã',
        directed: 'Chris Sanders',
        starring: 'Lupita Nyongo, Pedro Pascal, Catherine Ohara, Bill Nighy,...',
        edited: 'Gia đình, Hoạt hình, Khoa học - Viễn tưởng',
        audi: 1,
        time: '110 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [18, 10],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 1,
        img: '../img/poster/robot-pt.png',

        background: '../img/bg/robot-bg.jpg',
    },
    {
        movie: 'Robot',
        title: 'Robot Hoang Dã',
        directed: 'Chris Sanders',
        starring: 'Lupita Nyongo, Pedro Pascal, Catherine Ohara, Bill Nighy,...',
        edited: 'Gia đình, Hoạt hình, Khoa học - Viễn tưởng',
        audi: 1,
        time: '110 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [18, 10],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 2 ,
        img: '../img/poster/robot-pt.png',

        background: '../img/bg/robot-bg.jpg',
    },
    {
        movie: 'Jack',
        title: 'Mộ Đom Đóm',
        directed: 'Takahata Isao',
        starring: 'Tatsumi Tsutomu, Shiraishi Ayano, Shinohara Yoshiko',
        edited: 'Chiến tranh, Chính kịch, Hoạt hình',
        audi: 1,
        time: '89 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate(),
        img: '../img/poster/domdom-pt.jpg',

        background: '../img/bg/domdom-bg.jpg',
    },
    {
        movie: 'Jack',
        title: 'Mộ Đom Đóm',
        directed: 'Takahata Isao',
        starring: 'Tatsumi Tsutomu, Shiraishi Ayano, Shinohara Yoshiko',
        edited: 'Chiến tranh, Chính kịch, Hoạt hình',
        audi: 1,
        time: '89 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 1,
        img: '../img/poster/domdom-pt.jpg',

        background: '../img/bg/domdom-bg.jpg',
    },
    {
        movie: 'Jack',
        title: 'Mộ Đom Đóm',
        directed: 'Takahata Isao',
        starring: 'Tatsumi Tsutomu, Shiraishi Ayano, Shinohara Yoshiko',
        edited: 'Chiến tranh, Chính kịch, Hoạt hình',
        audi: 1,
        time: '89 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 2,
        img: '../img/poster/domdom-pt.jpg',

        background: '../img/bg/domdom-bg.jpg',
    },
    {
        movie: 'NXCMCT',
        title: 'Ngày Xưa Có Một Chuyện Tình',
        directed: 'Trịnh Đình Lê Minh',
        starring: 'Avin Lu, Ngọc Xuân, Đỗ Nhật Hoàng, Thanh Tú, Bảo Tiên, Hạo Khang',
        edited: 'Lãng mạn',
        audi: 1,
        time: '135 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate(),
        img: '../img/poster/chuyentinh-pt.png',

        background: '../img/bg/chuyentinh-bg.jpg',
    },
    {
        movie: 'NXCMCT',
        title: 'Ngày Xưa Có Một Chuyện Tình',
        directed: 'Trịnh Đình Lê Minh',
        starring: 'Avin Lu, Ngọc Xuân, Đỗ Nhật Hoàng, Thanh Tú, Bảo Tiên, Hạo Khang',
        edited: 'Lãng mạn',
        audi: 1,
        time: '135 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 1,
        img: '../img/poster/chuyentinh-pt.png',

        background: '../img/bg/chuyentinh-bg.jpg',
    },
    {
        movie: 'NXCMCT',
        title: 'Ngày Xưa Có Một Chuyện Tình',
        directed: 'Trịnh Đình Lê Minh',
        starring: 'Avin Lu, Ngọc Xuân, Đỗ Nhật Hoàng, Thanh Tú, Bảo Tiên, Hạo Khang',
        edited: 'Lãng mạn',
        audi: 1,
        time: '135 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 2,
        img: '../img/poster/chuyentinh-pt.png',

        background: '../img/bg/chuyentinh-bg.jpg',
    },
    {
        movie: 'Sos',
        title: 'Tín Hiệu Cầu Cứu',
        directed: 'Zoë Kravitz',
        starring: 'Naomi Ackie, Channing Tatum,...',
        edited: 'Gia đình, Hoạt hình, Khoa học - Viễn tưởng',
        audi: 1,
        time: '103 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() ,
        img: '../img/poster/sos.pt.jpg',

        background: '../img/bg/sos-bg.jpg',
    },
    {
        movie: 'Sos',
        title: 'Tín Hiệu Cầu Cứu',
        directed: 'Zoë Kravitz',
        starring: 'Naomi Ackie, Channing Tatum,...',
        edited: 'Gia đình, Hoạt hình, Khoa học - Viễn tưởng',
        audi: 1,
        time: '103 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 2,
        img: '../img/poster/sos.pt.jpg',

        background: '../img/bg/sos-bg.jpg',
    },
    {
        movie: 'Sos',
        title: 'Tín Hiệu Cầu Cứu',
        directed: 'Zoë Kravitz',
        starring: 'Naomi Ackie, Channing Tatum,...',
        edited: 'Gia đình, Hoạt hình, Khoa học - Viễn tưởng',
        audi: 1,
        time: '103 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 2,
        img: '../img/poster/sos.pt.jpg',

        background: '../img/bg/sos-bg.jpg',
    },
    {
        movie: 'Anlac',
        title: 'An Lạc',
        directed: 'Win Lwin Htet',
        starring: 'Paing Takhon, LUCKY, Thu Htoo San, Khin Zar Chi Kyaw',
        edited: 'Chính kịch, Tâm lý',
        audi: 1,
        time: '121 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() ,
        img: '../img/poster/anlac-pt.jpg',

        background: '../img/bg/anlac-bg.jpg',
    },
    {
        movie: 'Anlac',
        title: 'An Lạc',
        directed: 'Win Lwin Htet',
        starring: 'Paing Takhon, LUCKY, Thu Htoo San, Khin Zar Chi Kyaw',
        edited: 'Chính kịch, Tâm lý',
        audi: 1,
        time: '121 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 1,
        img: '../img/poster/anlac-pt.jpg',

        background: '../img/bg/anlac-bg.jpg',
    },
    {
        movie: 'Anlac',
        title: 'An Lạc',
        directed: 'Win Lwin Htet',
        starring: 'Paing Takhon, LUCKY, Thu Htoo San, Khin Zar Chi Kyaw',
        edited: 'Chính kịch, Tâm lý',
        audi: 1,
        time: '121 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 2,
        img: '../img/poster/anlac-pt.jpg',

        background: '../img/bg/anlac-bg.jpg',
    },
    {
        movie: 'DACDT',
        title: 'Đố Anh Còng Được Tôi',
        directed: 'RYOO Seung-wan',
        starring: 'HWANG Jung-min, JUNG Hae-in',
        edited: 'Hài, Hành động, Hình sự',
        audi: 1,
        time: '118 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() ,
        img: '../img/poster/doanhcongdctoi-pt.jpg',

        background: '../img/bg/doanhcongdctoi-bg.jpg',
    },
    {
        movie: 'DACDT',
        title: 'Đố Anh Còng Được Tôi',
        directed: 'RYOO Seung-wan',
        starring: 'HWANG Jung-min, JUNG Hae-in',
        edited: 'Hài, Hành động, Hình sự',
        audi: 1,
        time: '118 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 1,
        img: '../img/poster/doanhcongdctoi-pt.jpg',

        background: '../img/bg/doanhcongdctoi-bg.jpg',
    },
    {
        movie: 'DACDT',
        title: 'Đố Anh Còng Được Tôi',
        directed: 'RYOO Seung-wan',
        starring: 'HWANG Jung-min, JUNG Hae-in',
        edited: 'Hài, Hành động, Hình sự',
        audi: 1,
        time: '118 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 2,
        img: '../img/poster/doanhcongdctoi-pt.jpg',

        background: '../img/bg/doanhcongdctoi-bg.jpg',
    },
    {
        movie: 'Domino',
        title: 'Domino: Lối Thoát Cuối Cùng',
        directed: 'Nguyễn Phúc Huy Cương',
        starring: 'Thuận Nguyễn, Quốc Cường, Huỳnh Anh Tuấn, Henry Nguyễn, Cát Hạ',
        edited: 'Hành động, Tội phạm, Tâm lý',
        audi: 1,
        time: '103 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() ,
        img: '../img/poster/domino-pt.jpg',

        background: '../img/bg/domino-bg.webp',
    },
    {
        movie: 'Domino',
        title: 'Domino: Lối Thoát Cuối Cùng',
        directed: 'Nguyễn Phúc Huy Cương',
        starring: 'Thuận Nguyễn, Quốc Cường, Huỳnh Anh Tuấn, Henry Nguyễn, Cát Hạ',
        edited: 'Hành động, Tội phạm, Tâm lý',
        audi: 1,
        time: '103 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 1,
        img: '../img/poster/domino-pt.jpg',

        background: '../img/bg/domino-bg.webp',
    },
    {
        movie: 'Domino',
        title: 'Domino: Lối Thoát Cuối Cùng',
        directed: 'Nguyễn Phúc Huy Cương',
        starring: 'Thuận Nguyễn, Quốc Cường, Huỳnh Anh Tuấn, Henry Nguyễn, Cát Hạ',
        edited: 'Hành động, Tội phạm, Tâm lý',
        audi: 1,
        time: '103 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 2,
        img: '../img/poster/domino-pt.jpg',

        background: '../img/bg/domino-bg.webp',
    },
    {
        movie: 'Takagi',
        title: 'Nhất Quỷ Nhì Ma, Thứ Ba Takagi: Trêu Rồi Yêu',
        directed: 'Rikiya Imaizumi',
        starring: 'Mei Nagano; Fumiya Takahashi; Yôsuke Eguchi',
        edited: 'Hài, Tình cảm',
        audi: 1,
        time: '119 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() ,
        img: '../img/poster/takagi-pt.jpg',

        background: '../img/bg/takagi-bg.webp',
    },
    {
        movie: 'Takagi',
        title: 'Nhất Quỷ Nhì Ma, Thứ Ba Takagi: Trêu Rồi Yêu',
        directed: 'Rikiya Imaizumi',
        starring: 'Mei Nagano; Fumiya Takahashi; Yôsuke Eguchi',
        edited: 'Hài, Tình cảm',
        audi: 1,
        time: '119 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 1,
        img: '../img/poster/takagi-pt.jpg',

        background: '../img/bg/takagi-bg.webp',
    },
    {
        movie: 'Takagi',
        title: 'Nhất Quỷ Nhì Ma, Thứ Ba Takagi: Trêu Rồi Yêu',
        directed: 'Rikiya Imaizumi',
        starring: 'Mei Nagano; Fumiya Takahashi; Yôsuke Eguchi',
        edited: 'Hài, Tình cảm',
        audi: 1,
        time: '119 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 2,
        img: '../img/poster/takagi-pt.jpg',

        background: '../img/bg/takagi-bg.webp',
    },
    {
        movie: 'Taeyong',
        title: 'TAEYONG: TỪ TAEYONG ĐẾN TY TRACK',
        directed: 'Yoon Dong Oh',
        starring: 'TAEYONG',
        edited: 'Tài liệu, Âm Nhạc',
        audi: 1,
        time: '110 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() ,
        img: '../img/poster/taeyong-pt.jpg',

        background: '../img/bg/taeyong-bg.jpg',
    },
    {
        movie: 'Taeyong',
        title: 'TAEYONG: TỪ TAEYONG ĐẾN TY TRACK',
        directed: 'Yoon Dong Oh',
        starring: 'TAEYONG',
        edited: 'Tài liệu, Âm Nhạc',
        audi: 1,
        time: '110 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 1,
        img: '../img/poster/taeyong-pt.jpg',

        background: '../img/bg/taeyong-bg.jpg',
    },
    {
        movie: 'Taeyong',
        title: 'TAEYONG: TỪ TAEYONG ĐẾN TY TRACK',
        directed: 'Yoon Dong Oh',
        starring: 'TAEYONG',
        edited: 'Tài liệu, Âm Nhạc',
        audi: 1,
        time: '110 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 2,
        img: '../img/poster/taeyong-pt.jpg',

        background: '../img/bg/taeyong-bg.jpg',
    },
    {
        movie: 'Cam',
        title: 'CÁM',
        directed: 'Trần Hữu Tấn',
        starring: 'Quốc Cường, Thúy Diễm, Rima Thanh Vy, Lâm Thanh Mỹ, Hải Nam',
        edited: 'Kinh dị',
        audi: 1,
        time: '122 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() ,
        img: '../img/poster/cam-pt.jpg',

        background: '../img/bg/cam-bg.jpg',
    },
    {
        movie: 'Cam',
        title: 'CÁM',
        directed: 'Trần Hữu Tấn',
        starring: 'Quốc Cường, Thúy Diễm, Rima Thanh Vy, Lâm Thanh Mỹ, Hải Nam',
        edited: 'Kinh dị',
        audi: 1,
        time: '122 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 1,
        img: '../img/poster/cam-pt.jpg',

        background: '../img/bg/cam-bg.jpg',
    },
    {
        movie: 'Cam',
        title: 'CÁM',
        directed: 'Trần Hữu Tấn',
        starring: 'Quốc Cường, Thúy Diễm, Rima Thanh Vy, Lâm Thanh Mỹ, Hải Nam',
        edited: 'Kinh dị',
        audi: 1,
        time: '122 phút',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: date.getDate() + 2,
        img: '../img/poster/cam-pt.jpg',

        background: '../img/bg/cam-bg.jpg',
    }
]






// ///////////////////////////////////////////////////////////////////////////////////////////////



let totalAmount = 0; 
let seatPrice = 50000; 
let comboPrice1 = 68000; 
let comboPrice2 = 88000; 
let selectedSeats = 0; 
let comboCount1 = 0; 
let comboCount2 = 0; 

let updateSeatTotal = () => {
    let seatTotal = selectedSeats * seatPrice;
    document.getElementById('price').innerText = `${seatTotal.toLocaleString()}đ`; 
    return seatTotal; 
};

let updateTotal = () => {
    totalAmount = updateSeatTotal() + (comboCount1 * comboPrice1) + (comboCount2 * comboPrice2);
    document.querySelector('.total-price').innerText = `${totalAmount.toLocaleString()}đ`; 
};

document.querySelectorAll('.plus').forEach((button, index) => {
    button.addEventListener('click', () => {
        let quantityInput = button.previousElementSibling;
        quantityInput.value = parseInt(quantityInput.value) + 1;
        if (index === 0) comboCount1++; 
        else comboCount2++; 
        updateTotal(); 
    });
});

document.querySelectorAll('.minus').forEach((button, index) => {
    button.addEventListener('click', () => {
        let quantityInput = button.nextElementSibling;
        if (parseInt(quantityInput.value) > 0) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
            if (index === 0) comboCount1--; 
            else comboCount2--; 
            updateTotal(); 
        }
    });
});




let addSeats = (arr) => {
    // console.log(arr)
    arr.forEach((el, i) => {
        const { series, row_section, seat, price, a, b, c, d, e, f, h, j } = el;

        // Create Row 
        for (let index = 0; index < series.length; index++) {
            //   console.log(series[index]);
            let row = document.createElement('div');
            row.className = 'row';

            let booked_seats = [];
            booked_seats = [...eval(series[index].toLocaleLowerCase())];
            // console.log(booked_seats);


            // Create Seats 

            for (let seats = 0; seats < seat; seats++) {

                if (seats === 0) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }

                let li = document.createElement('li');
                let filter = booked_seats.filter(el => {
                    return el === seats;
                })
                // console.log(filter);

                if (filter.length > 0) {
                    li.className = "seat booked";
                } else {
                    li.className = "seat";
                }

                li.id = series[index] + seats;
                li.setAttribute('book', seats);
                li.setAttribute('sr', series[index]);
                li.innerText = price[index];


                li.onclick = () => {
                    if (li.className === 'seat booked') {
                        li.classList.remove('selected');
                    } else {
                        li.classList.toggle('selected');
                    }
                    if (li.classList.contains('selected')) {
                        selectedSeats++;
                    } else {
                        selectedSeats--;
                    }
                    updateTotal(); // Cập nhật tổng tiền khi chọn ghế

                    let len = Array.from(document.getElementsByClassName('selected')).length;
                    if (len > 0) {
                        document.getElementById('book_ticket').style.display = 'unset';
                        document.getElementById('total_ticket').style.display = 'unset';
                        document.getElementById('popup_modal').style.display = 'unset';
                    } else {
                        document.getElementById('total_ticket').style.display = 'none';
                        document.getElementById('book_ticket').style.display = 'none';
                        document.getElementById('popup_modal').style.display = 'none';

                        totalAmount = 0; // Đặt lại tổng số tiền khi không có ghế nào được chọn
                        document.getElementById('price').innerText = `${totalAmount.toLocaleString()}đ`; // Đặt lại hiển thị giá về 0đ
                    }
                }


                row.appendChild(li);

                if (seats === seat - 1) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }
            }

            document.getElementById('chair').appendChild(row);
        }


    })
}

updateTotal();

let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);

if (data.length > 0) {
    document.getElementById('title').innerText = data[0].title;
    document.getElementById('poster').src = data[0].img;
    document.getElementById('directed').innerText = data[0].directed;
    document.getElementById('starring').innerText = data[0].starring;
    document.getElementById('edited').innerText = data[0].edited;
    document.getElementById('time').innerText = data[0].time;

    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = `.book .right:before {background: url(${data[0].background}) no-repeat center -30px/cover}`;

} else {
    console.error("Không tìm thấy dữ liệu cho phim này vào ngày đã chỉ định.");
}

let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let monthsOfYear = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

let createDateElements = () => {
    let currentDay = date.getDay();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth();

    let time_date = document.createElement('div');
    time_date.className = 'time_date';

    let dateList = '';

    for (let i = -2; i < 10; i++) {
        let dayIndex = (currentDay + i) % 7;
        let newDate = new Date();
        newDate.setDate(currentDate + i);

        let day = daysOfWeek[dayIndex];
        let dateNum = newDate.getDate();

        dateList += `
            <li class="date-item">
                <h6>${day}</h6>
                <h6 class="date_point">${dateNum}</h6>
            </li>
        `;
    }

    let today = `${daysOfWeek[date.getDay()]}  ${currentDate}  ${monthsOfYear[currentMonth]}`;


    time_date.innerHTML = `
        <div class="time_date">
            <h6 class="title">${today}</h6>
            <div class="card_month crd">
                ${dateList}
            </div>
        </div>
    `;

    let timeDateElement = document.getElementById('timedate');
    timeDateElement.innerHTML = '';
    timeDateElement.appendChild(time_date);

};
createDateElements();




let offDate = () => {
    Array.from(document.getElementsByClassName('date_point')).forEach(el => {
        el.classList.remove('h6_active');
    })
}

let offTime = () => {
    Array.from(document.getElementsByClassName('time_point')).forEach(el => {
        el.classList.remove('h6_active');
    })
}


let isDateSelected = false;

Array.from(document.getElementsByClassName('date_point')).forEach((el) => {
    if (el.innerText == main_date) {
        el.classList.add('h6_active')
        isDateSelected = true;
    }
})
Array.from(document.getElementsByClassName('date_point')).forEach(el => {
    el.addEventListener('click', () => {
        if (el.innerText > date.getDate() - 1) {
            let date_test = +el.innerText
            // document.getElementById('chair').innerHTML = '';
            let availableMovies = pvr.filter(obj => obj.date == date_test);
            if (availableMovies.length === 0) {
                alert("Không có lịch cho ngày đã chọn.");
            } else {
                offDate();
                offTime();
                main_date = +el.innerText;
                el.classList.add('h6_active');
                document.getElementById('chair').innerHTML = '';
                isDateSelected = true;


                // Nếu có lịch, thực hiện các hành động cần thiết
                // addSeats(availableMovies);
            }
            // let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);
            // // console.log(data);
            // if (!selectedTime) {
            //     alert("Vui lòng chọn thời gian trước khi đặt vé!");
            //     return; // Không thực hiện đặt vé nếu chưa chọn thời gian
            // }else{
            // addSeats(data)
            // }
        }
    })
})

let selectedTime = null;

Array.from(document.getElementsByClassName('time_point')).forEach(el => {
    el.addEventListener('click', () => {
        if (!isDateSelected) {
            alert("Vui lòng chọn ngày trước khi chọn giờ!");
            offTime();
            return;
        }
        let time = el.innerText;
        let [hours, minutes] = time.split(':').map(Number);
        let timeInMinutes = hours * 60 + minutes; 

        let currentHours = date.getHours();
        let currentMinutes = date.getMinutes();
        let currentTime = currentHours * 60 + currentMinutes;
        let currentDate = date.getDate();
        if (main_date === currentDate) {
            if (timeInMinutes > currentTime) {
                offTime(); 
                el.classList.add('h6_active'); 
                document.getElementById('chair').innerHTML = ''; 
                let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]); 
                selectedTime = time; 
                addSeats(data); 
            } else {
                alert("Giờ chiếu phim đã qua! Vui lòng chọn giờ khác.");
            }
        } else if (main_date > currentDate) {
            offTime();
            el.classList.add('h6_active');
            document.getElementById('chair').innerHTML = '';
            let data = pvr.filter(obj => obj.date == main_date && obj.movie == url_segment[1]);
            selectedTime = time;
            addSeats(data);
        } else {
            alert("Ngày và giờ đã qua! Vui lòng chọn ngày và giờ khác.");
        }
    })
})

document.getElementById('continue').addEventListener('click', () => {
    Array.from(document.getElementsByClassName('selected')).forEach(el => {
        let seat_no = el.getAttribute('book');
        let seat_sr = el.getAttribute('sr').toLocaleLowerCase();
        let seat_price = el.innerText;
        let activeTimePoint = document.querySelector('.time_point.h6_active');
        let activeTimeValue = activeTimePoint.innerText;
        let parentLi = activeTimePoint.closest('li');
        let childElements = parentLi.querySelectorAll('*');
        let activeChild = '';

        childElements.forEach(child => {
            if (!child.classList.contains('h6_active')) {
                activeChild = child.innerText;
            }
        });

        let obj = {
            movie: url_segment[1],
            date: main_date
        }

        let getData = pvr.map((obj) => {
            if (
                obj.movie === url_segment[1] && obj.date === main_date
            ) {
                obj[seat_sr].push(+seat_no);
            }
            return obj;
        });
        let currentMonth = date.getMonth();
        let currentYear = date.getFullYear();

        let abbreviatedMonths = monthsOfYear.map(month => month.substring(0, 3));

        // console.log(getData);
        let setDay = `${main_date}  ${monthsOfYear[currentMonth]}  ${currentYear}`;

        document.getElementById('chair').innerHTML = '';
        let data = getData.filter(obj => obj.date === main_date && obj.movie === url_segment[1]);
        addSeats(data);


        document.getElementById('screen').style.display = 'none';
        document.getElementById('chair').style.display = 'none';
        document.getElementById('det').style.display = 'none';
        document.getElementById('book_ticket').style.display = 'none';
        document.getElementById('back_ticket').style.display = 'unset';
        document.getElementById('ticket').style.display = 'block';
        document.getElementById('total_ticket').style.display = 'none';
        document.getElementById('popup_screen').style.display='none';



        let tic = document.createElement('div');
        tic.className = 'tic';
        tic.innerHTML = `
                    <div class="barcode">
                        <div class="card">
                            <h6>ROW ${seat_sr.toLocaleUpperCase()}</h6>
                            <h6>${setDay}</h6>
                        </div>
                        <div class="card">
                            <h6>Seat ${seat_no}</h6>
                            <h6>${activeTimeValue}</h6>
                        </div>

                        <svg id="${seat_sr}${seat_no}barcode"></svg>
                        <h5>MOVIE CINEMA</h5>
                    </div>
                    <div class="tic_details" style=" background: url(${data[0].background})no-repeat center -35px /cover">
                        <div class="type">${activeChild}</div>
                        <h5 class="pvr"><span>Movie</span> Cinema</h5>
                        <h1>${data[0].title}</h1>
                        <div class="seat_det">
                            <div class="seat_cr">
                                <h6>ROW</h6>
                                <h6>${seat_sr.toLocaleUpperCase()}</h6>
                            </div>
                            <div class="seat_cr">
                                <h6>SEAT</h6>
                                <h6>${seat_no}</h6>
                            </div>
                            <div class="seat_cr">
                                <h6>DATE</h6>
                                <h6>${main_date} <sub>${abbreviatedMonths[currentMonth]}</sub></h6>
                            </div>
                            <div class="seat_cr">
                                <h6>TIME</h6>
                                <h6>${activeTimeValue} <sub>pm</sub></h6>
                            </div>
                        </div>
                    </div>
        `
        document.getElementById('ticket').appendChild(tic);

        JsBarcode(`#${seat_sr}${seat_no}barcode`,
            `${seat_sr.toLocaleUpperCase()}${seat_no}${seat_price}${main_date}${currentMonth}${currentYear}`);
    })
})

document.getElementById('book_ticket').addEventListener('click', () => {
    document.getElementById('popup_screen').style.display='unset';
})

let resetComboInputs = () => {
    document.querySelectorAll('.quantity').forEach((input) => {
        input.value = 0; 
    });
    comboCount1 = 0; 
    selectedSeats = 0; 
    comboCount2 = 0; 
    updateTotal(); 
};

document.getElementById('back_ticket').addEventListener('click', () => {
    window.location.href = '../html/home.html';
});