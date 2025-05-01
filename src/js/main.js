document.addEventListener('DOMContentLoaded', function() {
    // 教师轮播数据
    const teachers = [
        {
            name: "张老师",
            title: "钢琴教授",
            desc: "中央音乐学院毕业，20年教学经验",
            img: "images/teacher1.jpg"
        },
        {
            name: "李老师",
            title: "钢琴演奏家",
            desc: "茱莉亚音乐学院硕士，国际比赛获奖者",
            img: "images/teacher2.jpg"
        }
    ];
    
    // 动态加载教师信息
    const teacherCarousel = document.querySelector('.teacher-carousel');
    if (teacherCarousel) {
        teachers.forEach(teacher => {
            const teacherEl = document.createElement('div');
            teacherEl.className = 'teacher-item mb-3';
            teacherEl.innerHTML = `
                <img src="${teacher.img}" alt="${teacher.name}" class="rounded-circle mb-2" width="60">
                <h5 class="mb-1">${teacher.name}</h5>
                <small class="text-muted d-block">${teacher.title}</small>
                <small>${teacher.desc}</small>
            `;
            teacherCarousel.appendChild(teacherEl);
        });
    }
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // 底部导航交互
    const bottomNavLinks = document.querySelectorAll('.bottom-nav .nav-link');
    bottomNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            bottomNavLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});